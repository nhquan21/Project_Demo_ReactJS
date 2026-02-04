import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import type { CategoryRequest, CategoryResponse } from "../category";
import { apiCategory } from "../../../../api/category.api";

export type CategoryFilter = {
    keyword?: string;
    status?: string;
    page: number;
    size: number;
}
export const Category = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CategoryRequest>();

    const filteredCategories = categories.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.trim().toLowerCase())
    );


    const onSubmit = async (data: CategoryRequest) => {
        if (data != null) {
            const formData = new FormData();

            formData.append("name", data.name);
            formData.append("status", data.status.toString());
            if (data.photo && data.photo.length > 0) {
                formData.append("photo", data.photo[0]);
            }
            const res = await apiCategory.created(formData);
            if (res.code === 201 || res.code === 200) {
                reset(),
                    await fetchCategories();
            }
        }
    }

    const onDelete = async () => {
        if (!confirm("Bạn có chắc muốn xóa các mục đã chọn?")) return;

        for (const id of selectedIds) {
            await apiCategory.deleted(id);
        }
        setSelectedIds([])
        fetchCategories();
    }

    const delCateByPublicId = async (publicId: string) => {
        const isConfirm = window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?");

        if (!isConfirm) return;

        try {
            const res = await apiCategory.deleted(publicId);
            if (res) {
                fetchCategories();
            }
        } catch (error) {
            console.error(error);
            alert("Xóa danh mục thất bại");
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await apiCategory.getAll();
            setCategories(res.data ?? []);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className="content-page">
            <div className="container-fluid">
                <div className="page-title-head d-flex align-items-center">
                    <div className="flex-grow-1">
                        <h4 className="page-main-title m-0">Categories</h4>
                    </div>

                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                            <li className="breadcrumb-item active">Categories</li>
                        </ol>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div data-table data-table-rows-per-page="8" className="card">
                            <div className="card-header border-light justify-content-between">
                                <div className="d-flex gap-2">
                                    <div className="app-search">
                                        <input
                                            data-table-search
                                            type="search"
                                            className="form-control"
                                            placeholder="Search category..."
                                            value={searchKeyword}
                                            onChange={(e) => setSearchKeyword(e.target.value)}
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

                                <div className="d-flex align-items-center gap-1">
                                    {/* <!-- Records Per Page --> */}
                                    <div>
                                        <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                    {/* <!-- Status Filter --> */}
                                    <div className="app-search">
                                        <select data-table-filter="status" className="form-select form-control my-1 my-md-0">
                                            <option value="">All</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                        <i className="ti ti-circle app-search-icon text-muted"></i>
                                    </div>

                                    <a href="#!" className="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#addCategoryModal"> <i className="ti ti-plus fs-sm me-2"></i> Add Category </a>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-custom table-centered table-select table-hover w-100 mb-0">
                                    <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                        <tr className="text-uppercase fs-xxs">
                                            <th className="ps-3" style={{ width: "1%" }}>
                                                <input data-table-select-all className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" value="option" />
                                            </th>
                                            <th data-table-sort="product">Category Name</th>
                                            <th data-table-sort>Products</th>
                                            <th data-table-sort>Orders</th>
                                            <th data-table-sort>Earnings</th>
                                            <th data-table-sort data-column="status">Status</th>
                                            <th className="text-center" style={{ width: "1%" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCategories?.map(item => (
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
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md me-3">
                                                            <img src={item.logo} alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="#!" className="link-reset">{item.name}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-base mb-0 fw-medium">5248</h5>
                                                </td>
                                                <td>95.6k</td>
                                                <td>$40.5M</td>
                                                <td><span className={item.status ? "badge badge-soft-success fs-xxs" : "badge badge-soft-danger fs-xxs"}>{item.status ? "Active" : "Inactive"}</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm" onClick={() => delCateByPublicId(item.publicId)}><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* <div className="card-footer border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <nav>
                                        <ul className="pagination pagination-boxed pagination-secondary mb-0">
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);" aria-label="Previous">
                                                    <i className="ti ti-arrow-left align-middle fs-lg"></i>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);">1</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);">2</a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="javascript: void(0);">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);">4</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);">5</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="javascript: void(0);" aria-label="Next">
                                                    <i className="ti ti-arrow-right align-middle fs-lg"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}

                {/* <!-- Add New Category Modal --> */}
                <div className="modal fade" id="addCategoryModal" tabIndex={-1} aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addCategoryModalLabel">Add New Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <form id="addCategoryForm" onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        {/* <!-- Category Name --> */}
                                        <div className="col-md-6">
                                            <label htmlFor="categoryName" className="form-label">Category Name</label>
                                            <input type="text" className="form-control" id="categoryName" placeholder="e.g. Electronics" required
                                                {...register("name", { required: "Name bat buoc phai nhap" })}
                                            />
                                            {errors.name && (
                                                <small className="text-danger">
                                                    {errors.name.message}
                                                </small>
                                            )}
                                        </div>

                                        {/* <!-- Image Upload --> */}
                                        <div className="col-md-12">
                                            <label htmlFor="categoryImage" className="form-label">Category Image</label>
                                            <input type="file" className="form-control" id="categoryImage" accept="image/*"
                                                {...register("photo", { required: "Logo bat buoc phai chon" })}
                                            />
                                        </div>

                                        {/* <!-- Status --> */}
                                        <div className="col-md-6">
                                            <label htmlFor="categoryStatus" className="form-label">Status</label>
                                            <select id="categoryStatus" className="form-select"
                                                {...register("status", { required: "Status bat buoc phai chon" })}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="true">Active</option>
                                                <option value="false">Inactive</option>
                                            </select>
                                            {errors.status && (
                                                <small className="text-danger">
                                                    {errors.status.message}
                                                </small>
                                            )}
                                        </div>

                                        {/* <!-- Optional: Description --> */}
                                        {/* <div className="col-md-12">
                                            <label htmlFor="categoryDescription" className="form-label">Description (Optional)</label>
                                            <textarea id="categoryDescription" className="form-control" rows={3} placeholder="Brief description of the category..."></textarea>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Add Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal--> */}
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
    )
}
