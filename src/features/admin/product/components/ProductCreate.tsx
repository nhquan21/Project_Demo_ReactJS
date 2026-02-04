import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { CategoryResponse } from "../../category/category";
import { SizeType, type SavedProduct } from "../product";
import { apiCategory } from "../../../../api/category.api";
import { apiProduct } from "../../../../api/product.api";
import { AppAlert } from "../../../../components/ui/AppAlert";


export const ProductCreate = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const sizeValues = Object.values(SizeType);
    const { publicId } = useParams<{ publicId: string }>();
    const [preview, setPreview] = useState<string | null>(null);
    const [oldImage, setOldImage] = useState<string | null>(null);
    const [alert, setAlert] = useState<{ type: "success"| "danger"; message: string } | null>(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SavedProduct>();
    const pubIdCate = () => {
        apiCategory.getAll().then(i => {
            const data = i.data ?? [];
            setCategories(data);
        });
    }
    const fetchEdit = async () => {
        try {
            if (!publicId) return;

            const res = await apiProduct.findById(publicId);
            const data = res.data;
            if (!data) return;
            setPreview(data.image);
            setOldImage(data.image);
            reset({
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                productType: data.productType,
                size: data.size,
                material: data.material,
                power: data.power,
                warranty: data.warranty,
                categoryId: data.category.publicId
            });
            setAlert({type: "success",message: res.message})
            setPreview(data.image)
        } catch (error) {
            console.error("Fetch product failed", error);
            setAlert({type: "danger",message: "Fetch product failed"})
        }
    }
    const handlePreviewImage = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
    };

    const onSubmit = async (data: SavedProduct) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (key !== "image") {
                formData.append(key, String(value));
            }
        });

        // LOGIC QUAN TRỌNG
        if (data.image?.length) {
            // Có ảnh mới
            formData.append("photo", data.image[0]);
        } else if (oldImage) {
            // Không chọn ảnh mới → gửi ảnh cũ
            formData.append("oldImage", oldImage);
        }

        const res = publicId
            ? await apiProduct.updated(formData, publicId)
            : await apiProduct.created(formData);

        if (res.code === 200 || res.code === 201) {
            reset();
            setAlert({type: "success",message: res.message});
            navigate("/admin/products");
        }
    };


    useEffect(() => {
        fetchEdit();
    }, [publicId])
    useEffect(() => {
        pubIdCate();
    }, [])
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
                            <h4 className="page-main-title m-0">Add Product</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Add Product</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="row">

                                <div className="col-xxl-8">
                                    <div className="card">
                                        <div className="card-header d-block p-3">
                                            <h4 className="card-title mb-1">Product Information</h4>
                                            <p className="text-muted mb-0">To add a new product, please provide the necessary details in the fields below.</p>
                                        </div>
                                        {/* <!-- end card-header --> */}

                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Product Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="productName" placeholder="Enter product name"
                                                            {...register("name", { required: "Name bat buoc phai nhap" })}
                                                        />
                                                        {errors.name && (
                                                            <small className="text-danger">
                                                                {errors.name.message}
                                                            </small>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Quantity <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="skuId" placeholder="0"
                                                            {...register("quantity", { required: "Quantity bat buoc phai nhap" })}
                                                        />
                                                        {errors.quantity && (
                                                            <small className="text-danger">
                                                                {errors.quantity.message}
                                                            </small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Warranty<span className="text-danger">*</span></label>
                                                        <input type="number" className="form-control" id="stockNumber" placeholder="0"
                                                            {...register("warranty", { required: "Quantity bat buoc phai nhap" })}
                                                        />
                                                        {errors.warranty && (
                                                            <small className="text-danger">
                                                                {errors.warranty.message}
                                                            </small>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body--> */}
                                    </div>
                                    {/* <!-- end card--> */}

                                    <div className="card">
                                        <div className="card-header d-block p-3">
                                            <h4 className="card-title mb-1">Product Image</h4>
                                            <p className="text-muted mb-0">To upload a product image, please use the option below to select and upload the relevant file.</p>
                                        </div>
                                        {/* <!-- end card-header --> */}

                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                                        <div className="fallback">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                {...register("image", {
                                                                    onChange: (e) => {
                                                                        const file = e.target.files?.[0];
                                                                        if (file) handlePreviewImage(file);
                                                                    }
                                                                })}
                                                            />
                                                            {preview && (
                                                                <div className="mt-3">
                                                                    <img src={preview} style={{ width: "250px" }} alt="Product" className="img-fluid rounded" />
                                                                </div>
                                                            )}


                                                        </div>
                                                    </div>

                                                    {/* <!-- Preview --> */}
                                                    <div className="dropzone-previews mt-3" id="file-previews"></div>

                                                    {/* <!-- file preview template --> */}
                                                    <div className="d-none" id="uploadPreviewTemplate">
                                                        <div className="card mt-1 mb-0 border-dashed border">
                                                            <div className="p-2">
                                                                <div className="row align-items-center">
                                                                    <div className="col-auto">
                                                                        <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt="" />
                                                                    </div>
                                                                    <div className="col ps-0">
                                                                        <a href="javascript:void(0);" className="fw-semibold" data-dz-name></a>
                                                                        <p className="mb-0 text-muted" data-dz-size></p>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        {/* <!-- Button --> */}
                                                                        <a href="#" className="btn btn-link btn-lg text-danger" data-dz-remove>
                                                                            <span className="dropzone-close"></span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end file preview template --> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body--> */}
                                    </div>
                                    {/* <!-- end card--> */}
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-xxl-4">
                                    <div className="card">
                                        {/* <!-- end card-header --> */}
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <label className="form-label">Price <span className="text-danger">*</span></label>
                                                <div className="app-search">
                                                    <input type="number" className="form-control" id="basePrice" placeholder="0"
                                                        {...register("price", { required: "Name bat buoc phai nhap" })}
                                                    />
                                                    {errors.price && (
                                                        <small className="text-danger">
                                                            {errors.price.message}
                                                        </small>
                                                    )}
                                                    <i className="ti ti-currency-dollar app-search-icon text-muted"></i>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Size<span className="text-muted">(Optional)</span></label>
                                                <div className="app-search">
                                                    <select className="form-select form-control my-1 my-md-0" id="discount" {...register("size")}>
                                                        <option selected>Choose Size</option>
                                                        {sizeValues.map(item => (
                                                            <option value={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                    <i className="ti ti-discount app-search-icon text-muted"></i>
                                                </div>
                                            </div>

                                            <div className="mb-0">
                                                <label className="form-label">Product Type <span className="text-muted">(Optional)</span></label>
                                                <div className="app-search">
                                                    <input type="text" className="form-control" id="discountValue" placeholder="Laptop"
                                                        {...register("productType", { required: "Name bat buoc phai nhap" })}
                                                    />
                                                    {errors.productType && (
                                                        <small className="text-danger">
                                                            {errors.productType.message}
                                                        </small>
                                                    )}
                                                    <i className="ti ti-tag app-search-icon text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header d-block p-3">
                                            <h4 className="card-title mb-1">Organize</h4>
                                            <p className="text-muted mb-0">Organize your product by selecting the appropriate brand, category, sub-category, status, and tags.</p>
                                        </div>
                                        {/* <!-- end card-header --> */}

                                        <div className="card-body">
                                            <div className="mb-3">
                                                <label className="form-label">Material</label>
                                                <div className="app-search">
                                                    <input type="text" className="form-control" id="brand" placeholder="Nhôm, nhựa"
                                                        {...register("material", { required: "Name bat buoc phai nhap" })}
                                                    />
                                                    {errors.material && (
                                                        <small className="text-danger">
                                                            {errors.material.message}
                                                        </small>
                                                    )}
                                                    <i className="ti ti-stack-2 app-search-icon text-muted"></i>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Sub Category <span className="text-danger">*</span>
                                                </label>

                                                <div className="app-search">
                                                    <select
                                                        className="form-select form-control my-1 my-md-0"
                                                        id="subCategory"
                                                        {...register("categoryId", { required: "Category is required" })}
                                                    >
                                                        <option value="">Choose Sub Category</option>

                                                        {categories.map((item) => (
                                                            <option key={item.publicId} value={item.publicId}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <i className="ti ti-list-check app-search-icon text-muted"></i>
                                                </div>
                                            </div>

                                            <div className="mb-0">
                                                <label className="form-label">Power</label>
                                                <div className="app-search">
                                                    <input type="text" className="form-control" id="tags" placeholder="0"
                                                        {...register("power", { required: "Name bat buoc phai nhap" })}
                                                    />
                                                    {errors.power && (
                                                        <small className="text-danger">
                                                            {errors.power.message}
                                                        </small>
                                                    )}
                                                    <i className="ti ti-tag app-search-icon text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-4 d-flex gap-2 justify-content-center">
                                    <a href="#!" className="btn btn-danger fw-semibold"> Discard </a>
                                    <button type="submit" className="btn btn-success"> Publish </button>
                                </div>
                            </form>
                            {/* <!-- end row--> */}
                        </div>
                        {/* <!-- end col--> */}
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
                                Paces By
                                <span className="fw-semibold">Coderthemes</span>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end d-none d-md-block">
                                    10GB of
                                    <span className="fw-bold">250GB</span>
                                    Free.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}

            </div>
        </>
    );
}
