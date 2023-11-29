import React, { useEffect, useState } from 'react';
import './index.less';

function Select(props) {
    const { value, options, onChange } = props
    const [labelValue, setLabelValue] = useState(()=>{
        let text = ''
        options.forEach(option => {
            if (option.value == value) {
                text =  option.text
            }
        });
        return text
    });
    const handleChange = (e) => {
        options.forEach(option => {
            if (option.value == e.target.value) {
                setLabelValue(option.text)
            }
        });
        onChange && onChange(e.target.value)
    }
    useEffect(() => {

    })
    return (
        <div className='gif-qrcode-relative'>
            <label className='gif-qrcode-label'>{labelValue}</label>
            <select className="gif-qrcode-select" defaultValue={value} onChange={e => handleChange(e)}>
                {options?.map((option) => (
                    <option value={option.value} key={option.key}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select
