import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { TwitterPicker } from 'react-color';
import Button from '../Button'
import './index.less';

function ColorPicker(props) {
    const { value, onChange } = props;
    const pickerRef = useRef(null)
    const btnRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);
    useClickAway(pickerRef, (e) => {
        if (showPicker && e.target !== btnRef.current) {
            setShowPicker(false);
        }
    });
    const handleClick = () => {
        setShowPicker(!showPicker)
    }
    return <>
        {showPicker && <div className='gif-qrcode-color-picker' ref={pickerRef}>
            <TwitterPicker color={value} onChangeComplete={(color) => { onChange && onChange(color.hex) }} />
        </div>}
        <Button btnRef={btnRef} text={value} onClick={handleClick} className='gif-qrcode-color-picker-button' />
    </>;
}

export default ColorPicker