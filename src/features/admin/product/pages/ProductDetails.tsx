import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DisplayListingProduct } from "../product";
import { apiProduct } from "../../../../api/product.api";
import { AppAlert } from "../../../../components/ui/AppAlert";


export const ProductDetails = () => {
    const { publicId } = useParams<{ publicId: string }>();
    const [product, setProduct] = useState<DisplayListingProduct | null>(null);
    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!publicId) return;
                const res = await apiProduct.findById(publicId);
                setAlert({ type: "success", message: res.message });
                setProduct(res.data ?? null);
            } catch (error) {
                console.error("Fetch product failed", error);
                setAlert({ type: "danger", message: "Fetch product failed" });
            }
        }
        fetchProduct();
    }, [publicId])

    return (
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
                        <h4 className="page-main-title m-0">Product Details</h4>
                    </div>

                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                            <li className="breadcrumb-item active">Product Details</li>
                        </ol>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card card-top-sticky border-0">
                                            <div className="card-body p-0">
                                                {/* <!-- Crossfade --> */}
                                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                    <div className="carousel-inner" role="listbox">
                                                        <div className="carousel-item text-center active">
                                                            <img src={product?.image} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="carousel-item text-center">
                                                            <img src="/src/assets/images/products/single-2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="carousel-item text-center">
                                                            <img src="/src/assets/images/products/single-3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="carousel-item text-center">
                                                            <img src="/src/assets/images/products/single-4.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="carousel-indicators m-0 mt-3 d-lg-flex d-none position-static h-100 rounded gap-2">
                                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" className="h-auto rounded bg-light-subtle border active" style={{ width: "auto !important" }}>
                                                            <img src={product?.image} className="d-block avatar-xl" alt="indicator-img" />
                                                        </button>
                                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2" className="h-auto rounded bg-light-subtle border" style={{ width: "auto !important" }}>
                                                            <img src="/src/assets/images/products/single-2.png" className="d-block avatar-xl" alt="indicator-img" />
                                                        </button>
                                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3" className="h-auto rounded bg-light-subtle border" style={{ width: "auto !important" }}>
                                                            <img src="/src/assets/images/products/single-3.png" className="d-block avatar-xl" alt="indicator-img" />
                                                        </button>
                                                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4" className="h-auto rounded bg-light-subtle border" style={{ width: "auto !important" }}>
                                                            <img src="/src/assets/images/products/single-4.png" className="d-block avatar-xl" alt="indicator-img" />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <!-- end carousel--> */}

                                                <div className="text-center my-3">
                                                    <a href="apps-ecommerce-product-add.html" className="btn btn-light me-1">
                                                        <i className="ti ti-pencil fs-lg me-1"></i>
                                                        Edit
                                                    </a>
                                                    <a href="apps-ecommerce-product-add.html" className="btn btn-danger">
                                                        <i className="ti ti-circle-dashed-plus fs-lg me-1"></i>
                                                        Delisting
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- end card-body--> */}
                                        </div>
                                        {/* <!-- end card--> */}
                                    </div>
                                    {/* <!-- end col--> */}

                                    <div className="col-xl-8">
                                        <div className="p-4">
                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <span className="badge bg-success-subtle text-success px-2 py-1 fs-base rounded-pill">In Stock</span>
                                                </div>
                                                <div className="flex-grow-1 d-inline-flex align-items-center justify-content-end fs-lg">
                                                    <i className="ti ti-star-filled text-warning"></i>
                                                    <i className="ti ti-star-filled text-warning"></i>
                                                    <i className="ti ti-star-filled text-warning"></i>
                                                    <i className="ti ti-star-filled text-warning"></i>
                                                    <i className="ti ti-star-filled text-warning"></i>
                                                    <span className="ms-1 fs-base">
                                                        <a href="apps-ecommerce-reviews.html" className="link-reset fw-medium">(859 Reviews)</a>
                                                    </span>
                                                </div>
                                            </div> */}
                                            <div className="mt-3 mb-4">
                                                <h4 className="fs-xl">{product?.name}</h4>
                                            </div>

                                            <div className="row mb-4">
                                                {/* <!-- Updated product details --> */}
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">Quantity:</h6>
                                                    <p className="fw-medium mb-0">{product?.quantity}</p>
                                                </div>
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">Material:</h6>
                                                    <p className="fw-medium mb-0">{product?.material}</p>
                                                </div>
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">Power:</h6>
                                                    <p className="fw-medium mb-0">{product?.power}</p>
                                                </div>
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">Ram:</h6>
                                                    <p className="fw-medium mb-0">{product?.size}</p>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                {/* <!-- Orders and revenue --> */}
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">ProductType:</h6>
                                                    <p className="fw-medium mb-0">{product?.productType}</p>
                                                </div>
                                                <div className="col-md-4 col-xl-3">
                                                    <h6 className="mb-1 text-muted text-uppercase">Warranty:</h6>
                                                    <p className="fw-medium mb-0">{product?.warranty}</p>
                                                </div>
                                            </div>

                                            <h3 className="text-muted d-flex align-items-center gap-2 mb-4">
                                                <span className="fw-bold text-danger">${product?.price?.toLocaleString('vi-VN')}</span>
                                            </h3>

                                            <h5 className="text-uppercase text-muted fs-xs mb-2">Product Info:</h5>

                                            <p>
                                                The Apple iMac 24” with the M3 chip redefines performance and design. Featuring a stunning 4.5K Retina display, ultra-fast processing, and a sleek aluminum chassis in multiple colors, it’s perfect for creatives and professionals
                                                alike.
                                            </p>
                                            <p>Enjoy seamless performance with macOS, optimized apps, and powerful memory — all in an all-in-one setup that fits any workspace.</p>

                                            <h6 className="mt-3 fs-base">Details :</h6>
                                            <ul className="d-flex flex-column gap-1 mb-3">
                                                <li>24” 4.5K Retina Display with True Tone.</li>
                                                <li>Apple M3 chip with 8-core CPU and 10-core GPU.</li>
                                                <li>8GB unified memory (configurable to 24GB).</li>
                                                <li>512GB SSD storage (configurable up to 2TB).</li>
                                                <li>Color-matched Magic Keyboard and Mouse.</li>
                                            </ul>

                                            <a href="#!" className="link-primary fw-semibold">Read More...</a>
                                        </div>
                                    </div>
                                    {/* <!-- end col--> */}
                                </div>
                                {/* <!-- end row--> */}
                            </div>
                            {/* <!-- end card-body--> */}
                        </div>
                        {/* <!-- end card--> */}
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
    )
}
