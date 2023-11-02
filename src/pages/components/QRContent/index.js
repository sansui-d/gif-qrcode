import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import QRImage from '@components/QRCode/QRImage';
import './index.less';

function QRContent(props) {
    const parameter = useSelector(state => state.parameter)
    const { } = props;

    return (<div className='gif-qrcode-content-qr'>
        <QRImage value={'https://sansui-d.github.io/QRCode'} {...parameter} className='gif-qrcode-QRContent' />
    </div>);
}

export default QRContent
