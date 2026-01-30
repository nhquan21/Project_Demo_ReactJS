import { useEffect, useState } from 'react'
import type { DisplayCardProduct } from '../admin/product/product';
import type { CategoryResponse } from '../admin/category/category';
import { apiCategory } from '../../api/category.api';
import { apiProduct } from '../../api/product.api';
import { useDispatch } from 'react-redux';
import { AppAlert } from '../../components/ui/AppAlert';
import { addToCart } from './cart/cartSlice';


export const Home = () => {
    const [products, setProducts] = useState<DisplayCardProduct[]>([]);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
    const ALL_CATEGORY = "ALL";
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
    const [count, setCount] = useState<number>(0);
    const [activePr, setActivePr] = useState<number>(0);
    const [keyword, setKeyword] = useState('');
    const [minPrice, setMinPrice] = useState<number | undefined>();
    const [maxPrice, setMaxPrice] = useState<number | undefined>();
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size, setSize] = useState(10);
    const dispatch = useDispatch();
    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null);

    const handleSearch = async () => {
        try {
            const res = await apiProduct.search({
                keyword: keyword || undefined,
                categoryId: selectedCategory === ALL_CATEGORY ? undefined : selectedCategory,
                minPrice: minPrice || undefined,
                maxPrice: maxPrice || undefined,
                page,
                size,
                sortField: "price",
                sortDir: "asc"
            });

            const pageData = res.data.data!;

            setProducts(pageData.content);
            setCount(pageData.totalElements);
            setTotalPages(pageData.totalPages);
            setActivePr(pageData.content.filter(p => p.quantity > 0).length);

        } catch (error) {
            console.error(error);
            setProducts([]);
        }
    };

    const fetchCategories = async () => {
        const res = await apiCategory.getAll();
        const cats = res.data.data ?? [];
        setCategories(cats);

        const counts = await Promise.all(
            cats.map(c =>
                apiProduct.findByCategoryPublicId(c.publicId)
                    .then(r => ({
                        id: c.publicId,
                        count: r.data.data?.length ?? 0
                    }))
            )
        );

        // chuyển array -> object map
        const countMap: Record<string, number> = {};
        counts.forEach(c => {
            countMap[c.id] = c.count;
        });

        setCategoryCounts(countMap);
    };
    const isProductNew = (createdDate: string): boolean => {
        const createdTime = new Date(createdDate).getTime();
        return Date.now() - createdTime <= 24 * 60 * 60 * 1000;
    };

    const onSaveCart = (p: DisplayCardProduct) => {
        dispatch(addToCart({
            publicId: p.publicId,
            name: p.name,
            price: p.price,
            image: p.image
        }));
        setAlert({
            type: "success",
            message: "Added to cart successfully",
        });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        setPage(0);
    }, [selectedCategory, minPrice, maxPrice, size, keyword]);

    useEffect(() => {
        handleSearch();
    }, [page, selectedCategory, minPrice, maxPrice, size]);

    useEffect(() => {
        const t = setTimeout(() => {
            handleSearch();
        }, 400);
        return () => clearTimeout(t);
    }, [keyword]);
    return (
        <>
            {alert && (
                <AppAlert
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Products Grid</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Products Grid</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row mb-2">
                        <div className="col-lg-12">
                            <form className="bg-light-subtle rounded border p-3">
                                <div className="d-flex flex-wrap justify align-items-center gap-3">
                                    <div className="d-lg-none d-flex gap-2">
                                        <button className="btn btn-default btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#productFillterOffcanvas" aria-controls="productFillterOffcanvas">
                                            <i className="ti ti-menu-4 fs-lg"></i>
                                        </button>
                                    </div>
                                    <h3 className="mb-0 fs-xl flex-grow-1"><span data-target="1025">{count}</span> Products</h3>
                                    <div>
                                        <select
                                            value={size}
                                            onChange={(e) => setSize(Number(e.target.value))}
                                            className="form-select"
                                        >
                                            <option value={8}>8</option>
                                            <option value={16}>16</option>
                                            <option value={24}>24</option>
                                            <option value={32}>32</option>
                                        </select>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-xl-3">
                            <div className="offcanvas-lg offcanvas-start" tabIndex={-1} id="productFillterOffcanvas">
                                <div className="card h-100" data-simplebar>
                                    <div className="card-body p-0">
                                        <div className="p-3 border-bottom border-dashed">
                                            <div className="app-search">
                                                <input type="search" value={keyword} className="form-control" placeholder="Search product name..." onChange={(e) => setKeyword(e.target.value)} />
                                                <i className="ti ti-search app-search-icon text-muted"></i>
                                            </div>
                                        </div>

                                        <div className="p-3 border-bottom border-dashed">
                                            <div className="d-flex mb-2 justify-content-between align-items-center">
                                                <h5 className="mb-0">Category:</h5>
                                                <a href="javascript: void(0);" className="btn btn-link btn-sm px-0 fw-semibold">View All</a>
                                            </div>

                                            <div className="d-flex align-items-center gap-2 text-muted py-1">
                                                <div className="form-check flex-grow-1">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        className="form-check-input"
                                                        checked={selectedCategory === ALL_CATEGORY}
                                                        onChange={() => setSelectedCategory(ALL_CATEGORY)}
                                                    />
                                                    <label className="form-check-label mb-0">{ALL_CATEGORY}</label>
                                                </div>
                                            </div>
                                            {/* <!-- Category List --> */}
                                            {
                                                categories.map(item => (
                                                    <div key={item.publicId} className="d-flex align-items-center gap-2 text-muted py-1">
                                                        <div className="form-check flex-grow-1">
                                                            <input
                                                                type="radio"
                                                                name="category"
                                                                className="form-check-input"
                                                                checked={selectedCategory === item.publicId}
                                                                onChange={() => setSelectedCategory(item.publicId)}
                                                            />
                                                            <label className="form-check-label mb-0">{item.name}</label>
                                                        </div>

                                                        <div className="flex-shrink-0">
                                                            <span className="badge text-bg-light">
                                                                {categoryCounts[item.publicId] ?? 0}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                        </div>
                                        {/* <!-- end brands--> */}

                                        <div className="p-3 border-bottom border-dashed">
                                            <h5 className="mb-3">Price:</h5>

                                            <div id="price-filter" data-slider-size="sm"></div>

                                            <div className="d-flex gap-2 align-items-center mt-3">
                                                <div className="app-search">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Min price"
                                                        value={minPrice ?? ""}
                                                        onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
                                                    />
                                                    <i className="ti ti-arrow-down app-search-icon text-muted"></i>
                                                </div>
                                                <span className="fw-semibold text-muted">to</span>
                                                <div className="app-search">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Max price"
                                                        value={maxPrice ?? ""}
                                                        onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
                                                    />
                                                    <i className="ti ti-arrow-up app-search-icon text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end rating--> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-col-1 g-2">
                                {products.map(e => (
                                    <div className="col">
                                        <article className="card h-100 mb-2">
                                            {/* <!-- Badge --> */}
                                            <div className="badge text-bg-success badge-label fs-base rounded position-absolute top-0 start-0 m-3">{isProductNew(e.createdDate)}</div>

                                            {/* <!-- Card Body --> */}
                                            <div className="card-body pb-0">
                                                <div className="p-3">
                                                    <img src={e.image} alt="modern-sofa" className="img-fluid" />
                                                </div>
                                                {/* <!-- Title --> */}
                                                <h6 className="card-title fs-sm lh-base mb-2">
                                                    <a href="apps-ecommerce-product-details.html" className="link-reset">Modern Minimalist Fabric Sofa Single Seater</a>
                                                </h6>

                                                <div>
                                                    <span className="ms-1">
                                                        <a href="apps-ecommerce-reviews.html" className="link-reset fw-semibold">{e.size}</a>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* <!-- Card footer --> */}
                                            <div className="card-footer bg-transparent d-flex justify-content-between">
                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                    <h5 className="text-success d-flex align-items-center gap-2 mb-0">
                                                        ${e.price?.toLocaleString('vi-VN')}
                                                    </h5>
                                                </div>
                                                <a className="btn btn-sm btn-icon btn-primary" onClick={() => onSaveCart(e)}>
                                                    <i className="ti ti-basket fs-lg"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                            {/* <!-- end row--> */}
                        </div>
                        <div className="card-footer border-0 m-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <nav>
                                    <ul className="pagination pagination-boxed pagination-secondary mb-0">
                                        <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={() => setPage(p => p - 1)}>
                                                <i className="ti ti-arrow-left"></i>
                                            </button>
                                        </li>

                                        {[...Array(totalPages)].map((_, i) => (
                                            <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
                                                <button className="page-link" onClick={() => setPage(i)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li className={`page-item ${page + 1 === totalPages ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={() => setPage(p => p + 1)}>
                                                <i className="ti ti-arrow-right"></i>
                                            </button>
                                        </li>
                                    </ul>

                                </nav>
                            </div>
                        </div>

                        {/* <!-- end col-9--> */}
                    </div>
                    {/* <!-- end row--> */}
                </div>
                {/* <!-- container --> */}

                {/* <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                ©
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>
                                Paces
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}
            </div>
        </>
    )
}
