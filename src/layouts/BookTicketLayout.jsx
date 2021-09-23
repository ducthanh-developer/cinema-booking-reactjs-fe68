import withLayout from 'hocs/withLayout';
import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router';
import { USER_LOGIN } from 'settings/apiConfig';

function BookTicketLayout(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />;
    }
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
}

export default withLayout(BookTicketLayout);
