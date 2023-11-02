import React from 'react';
import './index.less';

function Button(props) {
    const { text, onClick, btnRef } = props
    return (
        <button ref={btnRef} className='gif-qrcode-button' onClick={onClick}>
            {text}
        </button>)
}

export default Button
