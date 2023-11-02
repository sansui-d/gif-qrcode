import React from 'react';
import './index.less';

function Input(props) {
    const { placeholder, value, type = 'text', onChange } = props;
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    const handleKeyUp = (e) => {
        if (e.keyCode !== 13) {
            return
        }
        onChange(e.target.value)
    }
    return (
        <input type={type} className="gif-qrcode-input" onChange={handleChange}
            placeholder={placeholder} value={value} onKeyUp={handleKeyUp} onBlur={handleChange} />
    );
}

export default Input
