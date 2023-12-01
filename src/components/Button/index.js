import React from 'react';
import './index.less';

function Button(props) {
    const { text, onClick, btnRef, className } = props
    return (
        <button ref={btnRef} className={`gif-qrcode-button ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
