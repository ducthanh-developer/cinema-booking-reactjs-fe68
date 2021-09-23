import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import withLayout from 'hocs/withLayout';
import React, { useEffect } from 'react';

function ClientLayout(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default withLayout(ClientLayout);
