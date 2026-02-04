import React from 'react'

type Props = {
    children: React.ReactNode
}
export const Background = ({ children }: Props) => {
    return (
        <>
            <div className="position-absolute top-0 end-0">
                <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
            </div>

            <div className="position-absolute bottom-0 start-0" style={{ transform: "rotate(180deg)" }}>
                <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
            </div>

            <div className="auth-box overflow-hidden align-items-center d-flex">
                <div className="container">
                    <div className="row justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
