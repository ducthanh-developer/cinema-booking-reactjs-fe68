import React, { Component } from 'react';
import './Loading.scss';

export default class Loading extends Component {
    render() {
        return (
            <div className="screen">
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        );
    }
}
