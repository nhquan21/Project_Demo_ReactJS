import { useEffect, useState } from 'react'
import type { DisplayCardProduct } from '../admin/product/product';
import type { CategoryResponse } from '../admin/category/category';
import { apiCategory } from '../../api/category.api';
import { apiProduct } from '../../api/product.api';
import { useDispatch, useSelector } from 'react-redux';
import { AppAlert } from '../../components/ui/AppAlert';
import { addToCart } from './cart/cartSlice';
import type { AppDispatch, RootState } from '../../app/store';
import { searchProducts, type ProductState } from '../admin/product/ProductSlice';
import { Loading } from '../../components/ui/Loading';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export type ProductFilter = {
    keyword?: string;
    categoryId?: string;
    minPrice?: number;
    maxPrice?: number;
    page: number;
    size: number;
    sortField: string;
    sortDir: "asc" | "desc";
};
export const Home = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
    const ALL_CATEGORY = "ALL";
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const productState: ProductState = useSelector((state: RootState) => state.product);
    const {t} = useTranslation("common");
    const fetchCategories = async () => {
        const res = await apiCategory.getAll();
        const cats = res.data ?? [];
        setCategories(cats);

        const counts = await Promise.all(
            cats.map(c =>
                apiProduct.findByCategoryPublicId(c.publicId)
                    .then(r => ({
                        id: c.publicId,
                        count: r.data?.length ?? 0
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
    const [filter, setFilter] = useState<ProductFilter>({
        keyword: undefined,
        categoryId: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        page: 0,
        size: 10,
        sortField: "price",
        sortDir: "asc"
    });
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

    const updateFilter = <K extends keyof ProductFilter>(
        key: K,
        value: ProductFilter[K]
    ) => {
        setFilter(prev => ({
            ...prev,
            [key]: value,
            page: key === "page" ? value as number : 0
        }));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const delay = setTimeout(() => {
            dispatch(searchProducts(filter));
        }, 400);

        return () => {
            controller.abort();
            clearTimeout(delay);
        };
    }, [filter, dispatch]);
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
                                    <h3 className="mb-0 fs-xl flex-grow-1"><span data-target="1025">{productState.items.length}</span> {t("app.product")}</h3>
                                    <div>
                                        <select
                                            value={filter.size}
                                            onChange={e => updateFilter("size", Number(e.target.value))}
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
                                                <input type="search" value={filter.keyword ?? ""} className="form-control" placeholder={t("product.search")} onChange={e => updateFilter("keyword", e.target.value || undefined)} />
                                                <i className="ti ti-search app-search-icon text-muted"></i>
                                            </div>
                                        </div>

                                        <div className="p-3 border-bottom border-dashed">
                                            <div className="d-flex mb-2 justify-content-between align-items-center">
                                                <h5 className="mb-0">{t("app.category")}:</h5>
                                                <a href="javascript: void(0);" className="btn btn-link btn-sm px-0 fw-semibold">View All</a>
                                            </div>

                                            <div className="d-flex align-items-center gap-2 text-muted py-1">
                                                <div className="form-check flex-grow-1">
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        className="form-check-input"
                                                        checked={selectedCategory === ALL_CATEGORY}
                                                        onChange={() => {
                                                            setSelectedCategory(ALL_CATEGORY);
                                                            updateFilter("categoryId", undefined);
                                                        }}
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
                                                                value={item.publicId}
                                                                onChange={e => {
                                                                    setSelectedCategory(e.target.value)
                                                                    updateFilter("categoryId", e.target.value === "All" ? undefined : e.target.value)
                                                                }}
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
                                            <h5 className="mb-3">{t("app.price")}:</h5>

                                            <div id="price-filter" data-slider-size="sm"></div>

                                            <div className="d-flex gap-2 align-items-center mt-3">
                                                <div className="app-search">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder={t("product.minPrice")}
                                                        value={filter.minPrice ?? ""}
                                                        onChange={e =>
                                                            updateFilter("minPrice", e.target.value ? Number(e.target.value) : undefined)
                                                        }
                                                    />
                                                    <i className="ti ti-arrow-down app-search-icon text-muted"></i>
                                                </div>
                                                <span className="fw-semibold text-muted">to</span>
                                                <div className="app-search">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder={t("product.maxPrice")}
                                                        value={filter.maxPrice ?? ""}
                                                        onChange={e =>
                                                            updateFilter("maxPrice", e.target.value ? Number(e.target.value) : undefined)}
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
                        {
                            productState.loading ? (<Loading isLoading={productState.loading} />) :
                                (<div className="col-xl-9">
                                    <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-col-1 g-2">
                                        {productState.items.map(e => (
                                            <div className="col">
                                                <article className="card h-100 mb-2">
                                                    {/* <!-- Badge --> */}
                                                    <div className="badge text-bg-success badge-label fs-base rounded position-absolute top-0 start-0 m-3">{isProductNew(e.createdDate)}</div>

                                                    {/* <!-- Card Body --> */}
                                                    <Link to={`/products-details/${e.publicId}`} className="card-body pb-0">
                                                        <div className="p-3">
                                                            <img src={e.image} alt="modern-sofa" className="img-fluid" />
                                                        </div>
                                                        {/* <!-- Title --> */}
                                                        <h6 className="card-title fs-sm lh-base mb-2">
                                                            <div  className="link-reset">{e.name}</div>
                                                        </h6>

                                                        <div>
                                                            <span className="ms-1">
                                                                <div className="link-reset fw-semibold">{e.size}</div>
                                                            </span>
                                                        </div>
                                                    </Link>

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
                                </div>)
                        }
                        <div className="card-footer border-0 m-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <nav>
                                    <ul className="pagination pagination-boxed pagination-secondary mb-0">

                                        {/* PREVIOUS */}
                                        <li className={`page-item ${filter.page === 0 ? "disabled" : ""}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => updateFilter("page", filter.page - 1)}
                                                disabled={filter.page === 0}
                                            >
                                                <i className="ti ti-arrow-left"></i>
                                            </button>
                                        </li>

                                        {/* PAGE NUMBERS */}
                                        {[...Array(productState.totalPages)].map((_, i) => (
                                            <li key={i} className={`page-item ${filter.page === i ? "active" : ""}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => updateFilter("page", i)}
                                                >
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}

                                        {/* NEXT */}
                                        <li className={`page-item ${filter.page + 1 === productState.totalPages ? "disabled" : ""}`}>
                                            <button
                                                className="page-link"
                                                onClick={() => updateFilter("page", filter.page + 1)}
                                                disabled={filter.page + 1 === productState.totalPages}
                                            >
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
