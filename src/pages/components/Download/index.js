import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@components/Button'
import Loading from '@components/Loading'
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
        {loading === 2 ? <Loading text={'gif in progress...'} /> : <img className='gif-qrcode-content-download-img' src={gifUrl} /> }
        <Button className='gif-qrcode-content-download-button' onClick={handleDownload} text='Download' />
    </div>
}

export default Download;
