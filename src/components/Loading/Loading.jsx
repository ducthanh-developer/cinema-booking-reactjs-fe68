import React, { Component } from 'react';
import './Loading.scss';

export default class Loading extends Component {
    render() {
        return (
            <div className="screen">
                <div class="loading">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        );
    }
}
