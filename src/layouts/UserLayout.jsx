import Login from 'containers/client/User/Login/Login';
import withLayout from 'hocs/withLayout';
import React from 'react';

function UserLayout(props) {
    return (
        <>
            <main className="login-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 login-section-wrapper">
                            <div className="brand-wrapper">
                                <img src="../img/web-logo.png" alt="logo" className="logo" />
                            </div>
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
