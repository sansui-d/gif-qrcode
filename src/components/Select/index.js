import React, { useEffect, useState } from 'react';
import './index.less';

function Select(props) {
    const { value, options, onChange } = props
    const [labelValue, setLabelValue] = useState('');
    const handleChange = (e) => {
        options.forEach(option => {
            if (option.value == e.target.value) {
                setLabelValue(option.text)
            }
        });
        onChange && onChange(e.target.value)
    }
    useEffect(() => {
        options.forEach(option => {
            if (option.value == value) {
                setLabelValue(option.text)
            }
        });
    })
    return (
        <div className='gif-qrcode-relative'>
            <label className='gif-qrcode-label'><span className='gif-qrcode-label-sp'>{labelValue}</span></label>
            <select className="gif-qrcode-select" defaultValue={value} onChange={e => handleChange(e)}>
                {options?.map((option) => (
                    <option value={option.value} key={option.key}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select
