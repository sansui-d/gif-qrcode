import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import QRImage from '@components/QRCode/QRImage';
import './index.less';

function QRContent(props) {
    const parameter = useSelector(state => state.parameter)
    const gifUrl = useSelector(state => state.gifUrl)
    const { } = props;

    return (<div className='gif-qrcode-content-qrcontent'>
        <div id='gif-qrcode-content-sketch'>
            <QRImage value={'https://sansui-d.github.io/QRCode'} {...parameter} className='gif-qrcode-content-qrcontent-qr' />
        </div>
        <canvas id="gif-qrcode-content-cvs"></canvas>
        <img src={gifUrl} />
    </div>);
}

export default QRContent
