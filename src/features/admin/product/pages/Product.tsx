import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import type { DisplayCardProduct } from '../product';
import type { CategoryResponse } from '../../category/category';
import { apiCategory } from '../../../../api/category.api';
import { apiProduct } from '../../../../api/product.api';
import { AppAlert } from '../../../../components/ui/AppAlert';
import { Loading } from '../../../../components/ui/Loading';

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


export const Product = () => {
    const [products, setProducts] = useState<DisplayCardProduct[]>([]);
    const [count, setCount] = useState<number>(0);
    const [activePr, setActivePr] = useState<number>(0);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    // const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>()
    const [isloading, setIsLoading] = useState<boolean>(false);

    const fetchCategories = async () => {
        const res = await apiCategory.getAll();
        setCategories(res.data ?? []);
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

    const onDelete = async () => {
        if (!window.confirm("Are you sure you want to delete the selected items?")) return;
        await Promise.allSettled(selectedIds.map(id => apiProduct.deleted(id)));
        setAlert({ type: "success", message: "The selected items have been successfully deleted!" })
        setSelectedIds([]);
        handleSearch();
    };
    const handleSearch = async (signal?: AbortSignal) => {
        try {
            setIsLoading(true)
            const res = await apiProduct.search(filter, signal);
            const pageData = res.data!;

            setProducts(pageData.content);
            setCount(pageData.totalElements);
            setTotalPages(pageData.totalPages);
            setActivePr(pageData.content.filter(p => p.quantity > 0).length);

        } catch (error: any) {
            if (error.name === "CanceledError" || error.name === "AbortError") return;
            setProducts([]);
        } finally {
            setIsLoading(false)
        }
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
        const controller = new AbortController();

        const delay = setTimeout(() => {
            handleSearch(controller.signal);
        }, 400);

        return () => {
            controller.abort();
            clearTimeout(delay);
        };
    }, [filter]);

    const delProPublicId = async (publicId: string) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        setAlert({ type: "success", message: "Delete is Product successfuly!" })
        await apiProduct.deleted(publicId);
        handleSearch();
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <>
            <div className="content-page">
                {alert && (
                    <AppAlert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert(null)}
                    />
                )}
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Products</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Products</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center g-1">
                        <div className="col">
                            <div className="card mb-1">
                                <div className="card-body">
                                    <a href="#!" className="text-muted float-end mt-n1 fs-xl">
                                        <i className="ti ti-external-link"></i>
                                    </a>
                                    <h5 title="Total Products">Products</h5>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <div className="avatar-md flex-shrink-0">
                                            <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                                                <i className="ti ti-package"></i>
                                            </span>
                                        </div>
                                        <h3 className="mb-0"><span data-target="2,240">{count}</span></h3>
                                        <span className="badge badge-soft-success fw-medium fs-xs ms-auto">+24 New</span>
                                    </div>
                                    <p className="mb-0">
                                        <span className="text-primary">
                                            <i className="ti ti-circle-filled align-middle"></i>
                                        </span>
                                        <span className="text-nowrap text-muted">Active Listings</span>
                                        <span className="float-end"><b>{activePr}</b></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-1">
                                <div className="card-body">
                                    <a href="#!" className="text-muted float-end mt-n1 fs-xl">
                                        <i className="ti ti-external-link"></i>
                                    </a>
                                    <h5 title="Customer Orders">Orders</h5>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <div className="avatar-md flex-shrink-0">
                                            <span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
                                                <i className="ti ti-shopping-cart"></i>
                                            </span>
                                        </div>
                                        <h3 className="mb-0"><span data-target="8,014">0</span></h3>
                                        <span className="badge badge-soft-success fw-medium fs-xs ms-auto">+120 New</span>
                                    </div>
                                    <p className="mb-0">
                                        <span className="text-secondary">
                                            <i className="ti ti-circle-filled align-middle"></i>
                                        </span>
                                        <span className="text-nowrap text-muted">Total Orders</span>
                                        <span className="float-end"><b>105K</b></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-1">
                                <div className="card-body">
                                    <a href="#!" className="text-muted float-end mt-n1 fs-xl">
                                        <i className="ti ti-external-link"></i>
                                    </a>
                                    <h5 title="Customer Count">Customers</h5>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <div className="avatar-md flex-shrink-0">
                                            <span className="avatar-title bg-info-subtle text-info rounded-circle fs-22">
                                                <i className="ti ti-users"></i>
                                            </span>
                                        </div>
                                        <h3 className="mb-0"><span data-target="3,209">0</span></h3>
                                        <span className="badge badge-soft-success fw-medium fs-xs ms-auto">+36 New</span>
                                    </div>
                                    <p className="mb-0">
                                        <span className="text-info">
                                            <i className="ti ti-circle-filled align-middle"></i>
                                        </span>
                                        <span className="text-nowrap text-muted">Total Customers</span>
                                        <span className="float-end"><b>58,320</b></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-1">
                                <div className="card-body">
                                    <a href="#!" className="text-muted float-end mt-n1 fs-xl">
                                        <i className="ti ti-external-link"></i>
                                    </a>
                                    <h5 title="Total Revenue">Revenue</h5>
                                    <div className="d-flex align-items-center gap-2 my-3">
                                        <div className="avatar-md flex-shrink-0">
                                            <span className="avatar-title bg-warning-subtle text-warning rounded-circle fs-22">
                                                <i className="ti ti-chart-bar"></i>
                                            </span>
                                        </div>
                                        <h3 className="mb-0">$<span data-target="3.5">0</span>M</h3>
                                        <span className="badge badge-soft-danger fw-medium fs-xs ms-auto">-4.5%</span>
                                    </div>
                                    <p className="mb-0">
                                        <span className="text-warning">
                                            <i className="ti ti-circle-filled align-middle"></i>
                                        </span>
                                        <span className="text-nowrap text-muted">Total Revenue</span>
                                        <span className="float-end"><b>$12.8M</b></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}

                    <div className="row">
                        <div className="col-12">
                            <div data-table data-table-rows-per-page="8" className="card">
                                <div className="card-header border-light justify-content-between">
                                    <div className="d-flex gap-2">
                                        <div className="app-search">
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search product name..."
                                                value={filter.keyword ?? ""}
                                                onChange={e => updateFilter("keyword", e.target.value || undefined)}
                                            />

                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>
                                        {selectedIds.length > 0 && (
                                            <button
                                                data-table-delete-selected
                                                className="btn btn-danger"
                                                onClick={onDelete}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="me-2 fw-semibold">Filter By:</span>

                                        {/* <!-- Category Filter --> */}
                                        <div className="app-search">
                                            <select
                                                data-table-filter="category"
                                                className="form-select form-control my-1 my-md-0"
                                                value={filter.categoryId ?? "All"}
                                                onChange={e =>
                                                    updateFilter("categoryId", e.target.value === "All" ? undefined : e.target.value)
                                                }
                                            >
                                                <option value="All">All</option>
                                                {categories.map((item) => (
                                                    <option value={item.publicId}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>

                                            <i className="ti ti-tag app-search-icon text-muted"></i>
                                        </div>

                                        {/* <!-- Price Range Filter --> */}
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="app-search">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Min price"
                                                    value={filter.minPrice ?? ""}
                                                    onChange={e =>
                                                        updateFilter("minPrice", e.target.value ? Number(e.target.value) : undefined)
                                                    }
                                                />
                                                <i className="ti ti-arrow-down app-search-icon text-muted"></i>
                                            </div>

                                            <div className="app-search">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Max price"
                                                    value={filter.maxPrice ?? ""}
                                                    onChange={e =>
                                                        updateFilter("maxPrice", e.target.value ? Number(e.target.value) : undefined)
                                                    }
                                                />
                                                <i className="ti ti-arrow-up app-search-icon text-muted"></i>
                                            </div>
                                        </div>


                                        {/* <!-- Records Per Page --> */}
                                        <div>
                                            <select
                                                value={filter.size}
                                                onChange={e => updateFilter("size", Number(e.target.value))}
                                                className="form-select"
                                            >
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={15}>15</option>
                                                <option value={20}>20</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div className="d-flex gap-1">
                                        <NavLink to="/admin/products-add" className="btn btn-danger ms-1">
                                            <i className="ti ti-plus fs-sm me-2"></i>
                                            Add Product
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-centered table-select table-hover w-100 mb-0">
                                        <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                            <tr className="text-uppercase fs-xxs">
                                                <th className="ps-3" style={{ width: "1%" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            products.length > 0 &&
                                                            products.every(p => selectedIds.includes(p.publicId))
                                                        }
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setSelectedIds(products.map(p => p.publicId));
                                                            } else {
                                                                setSelectedIds([]);
                                                            }
                                                        }}
                                                    />
                                                </th>
                                                <th data-table-sort="product">Product</th>
                                                <th>Quantity</th>
                                                <th data-table-sort>Material</th>
                                                <th data-table-sort data-column="price">Price</th>
                                                <th data-table-sort>Orders</th>
                                                <th data-table-sort="rating">Sise</th>
                                                <th data-table-sort data-column="status">Power</th>
                                                <th data-table-sort>Warranty</th>
                                                <th className="text-center" style={{ width: "1%" }}>Actions</th>
                                            </tr>
                                        </thead>
                                        {isloading ? <Loading isLoading={isloading} /> : <tbody>
                                            {/* <!-- Product Row --> */}
                                            {products.map((item) => (
                                                <tr>
                                                    <td className="ps-3">
                                                        <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" checked={selectedIds.includes(item.publicId)}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setSelectedIds([...selectedIds, item.publicId])
                                                                } else {
                                                                    setSelectedIds(
                                                                        selectedIds.filter((e) => e !== item.publicId)
                                                                    )
                                                                }
                                                            }
                                                            } type="checkbox" value="option" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <div className="avatar-md me-3">
                                                                <img src={item.image} alt="Product" className="img-fluid rounded" />
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-1">
                                                                    <Link to={`/admin/products-details/${item.publicId}`} data-sort="product" className="link-reset">{item.name}</Link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <h5 className="fs-base mb-0 fw-medium">{item.material}</h5>
                                                    </td>
                                                    <td>${item.price?.toLocaleString('vi-VN')}</td>
                                                    <td>124</td>
                                                    <td>
                                                        {/* <span className="text-warning">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                    </span> */}
                                                        <span className="ms-1">
                                                            <a data-sort="rating" href="apps-ecommerce-reviews.html" className="link-reset fw-semibold">{item.size}</a>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-soft-success fs-xxs">{item.power}</span>
                                                    </td>
                                                    <td>{item.warranty}</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-1">
                                                            <Link
                                                                to={`/admin/products-details/${item.publicId}`}
                                                                className="btn btn-default btn-icon btn-sm"
                                                            >
                                                                <i className="ti ti-eye fs-lg"></i>
                                                            </Link>
                                                            <Link to={`/admin/products-edit/${item.publicId}`} className="btn btn-default btn-icon btn-sm">
                                                                <i className="ti ti-edit fs-lg"></i>
                                                            </Link>
                                                            <button
                                                                type="button"
                                                                onClick={() => delProPublicId(item.publicId)}
                                                                className="btn btn-default btn-icon btn-sm"
                                                            >
                                                                <i className="ti ti-trash fs-lg"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>}

                                    </table>
                                </div>
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
                                                {[...Array(totalPages)].map((_, i) => (
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
                                                <li className={`page-item ${filter.page + 1 === totalPages ? "disabled" : ""}`}>
                                                    <button
                                                        className="page-link"
                                                        onClick={() => updateFilter("page", filter.page + 1)}
                                                        disabled={filter.page + 1 === totalPages}
                                                    >
                                                        <i className="ti ti-arrow-right"></i>
                                                    </button>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
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
