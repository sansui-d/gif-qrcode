import React from 'react';
import { isPicture } from '@utils/helper';
import './index.less';

function Upload(props) {
    const { id, label, onChange } = props
    const handleChange = async (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            if (isPicture(file)) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    onChange(e.target.result)
                };
            }
        }
    }
    return (
        <div className="gif-qrcode-upload">
            <label htmlFor={id} className='gif-qrcode-label'>{label}</label>
            <input
                type="file"
                id={id}
                hidden={true}
                accept=".jpg, .jpeg, .png"
                onClick={(e) => e.target.value = null}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Upload
