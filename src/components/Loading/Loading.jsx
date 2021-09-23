import React, { Fragment } from 'react';
import './Loading.scss';
import { useSelector } from 'react-redux';

export default function Loading(props) {
    const { isLoading } = useSelector((state) => state.loadingReducer);
    return (
        <Fragment>
            {isLoading ? (
                <div className="screen">
                    <div className="loading">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>
                </div>
            ) : (
                ''
            )}
        </Fragment>
    );
}
