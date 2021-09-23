import withLayout from 'hocs/withLayout';
import React, { useEffect } from 'react';

function UserLayout(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <main className="login-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 login-section-wrapper">
                            {/* <div className="brand-wrapper">
                                <img src="../img/web-logo.png" alt="logo" className="logo" />
                            </div> */}
                            {props.children}
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src="../img/login.jpg"
                                alt="login image"
                                className="login-img"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withLayout(UserLayout);
