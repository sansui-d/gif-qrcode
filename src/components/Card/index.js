import React from 'react';
import './index.less';

function Card(props) {
    const { children, title } = props

    return (
        <div className="gif-qrcode-card">
            <div className="gif-qrcode-card-details">
                {children}
            </div>
            <button className="gif-qrcode-card-button">{title}</button>
        </div>
    )
}

export default Card
