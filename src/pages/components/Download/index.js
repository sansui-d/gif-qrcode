import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './index.less';

const Download = (props) => {
    const gifUrl = useSelector(state => state.gifUrl)
    const gifName = useSelector(state => state.gifName)
    const loading = useSelector(state => state.loading)
    const handleDownload = () => {
        let a = document.createElement('a');
        a.setAttribute('href', gifUrl);
        a.setAttribute('target', 'download');
        a.setAttribute('download', gifName + '.gif');
        a.click();
    };

    return <div className='gif-qrcode-content-download'>
        <img className='gif-qrcode-content-download-img' src={gifUrl} />
        <div className='gif-qrcode-content-download-button' onClick={handleDownload}>Download</div>
    </div>
}

export default Download;
