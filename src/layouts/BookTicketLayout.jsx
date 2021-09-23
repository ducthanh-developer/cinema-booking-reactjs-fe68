import Loading from 'components/Loading/Loading';
import withLayout from 'hocs/withLayout';
import React, { Fragment } from 'react';
import { Redirect } from 'react-router';
import { USER_LOGIN } from 'settings/apiConfig';

function BookTicketLayout(props) {
    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to="/login" />;
    // }
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
}

export default withLayout(BookTicketLayout);
