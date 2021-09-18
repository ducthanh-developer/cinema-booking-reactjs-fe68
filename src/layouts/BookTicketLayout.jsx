import withLayout from 'hocs/withLayout';
import React from 'react';
import { Redirect } from 'react-router';
import { USER_LOGIN } from 'settings/apiConfig';

function BookTicketLayout(props) {
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />;
    }
    return <>{props.children}</>;
}

export default withLayout(BookTicketLayout);
