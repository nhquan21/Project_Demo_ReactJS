import { useForm, type SubmitHandler } from 'react-hook-form';
import { NavLink } from 'react-router-dom'

type FormData = {
    password: string,
    email: string,
}

type FormLoginProps = {
    onSubmit: SubmitHandler<FormData>;
}

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();
    return (
        <div className="col-xxl-5 col-md-6 col-sm-8">
            <div className="card p-4">
                <div className="auth-brand text-center mb-2">
                    <a href="index.html" className="logo-dark">
                        <img src="/src/assets/images/logo-black.png" alt="dark logo" />
                    </a>
                    <a href="index.html" className="logo-light">
                        <img src="/src/assets/images/logo.png" alt="logo" />
                    </a>
                    <h4 className="fw-bold text-dark mt-3">Great to see you here 👋</h4>
                    <p className="text-muted w-lg-75 mx-auto">Let’s get you signed in. Enter your email and password to continue.</p>
                </div>
                <p className="text-center text-muted my-3 auth-line">
                    <span> Continue with Email </span>
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">
                            Email address
                            <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <input type="email" className="form-control" id="userEmail" placeholder="you@example.com" required
                                {...register("email", { required: "Email bat buoc phai nhap" })}
                            />
                            {errors.email && (
                                <small className="text-danger">
                                    {errors.email.message}
                                </small>
                            )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">
                            Password
                            <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <input type="password" className="form-control" id="userPassword" placeholder="••••••••" required
                                {...register("password", { required: "Pass bat buoc phai nhat" })}
                            />
                            {errors.password && (
                                <small className="text-danger">
                                    {errors.password.message}
                                </small>
                            )}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input className="form-check-input form-check-input-light fs-14" type="checkbox" checked id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
                        </div>
                        <a href="auth-reset-pass.html" className="text-decoration-underline link-offset-3 text-muted">Forgot Password?</a>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary fw-semibold py-2">Sign In</button>
                    </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                    New here?
                    <NavLink to="/sigUp" className="text-decoration-underline link-offset-3 fw-semibold">Create an account</NavLink>
                </p>
            </div>

            <p className="text-center text-muted mt-4 mb-0">
                ©
                <script>
                    document.write(new Date().getFullYear())
                </script>
                Paces — by
                <span className="fw-semibold">Coderthemes</span>
            </p>
        </div>
    )
}
