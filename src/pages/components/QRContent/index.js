import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import domtoimage from 'dom-to-image';
import { getScale } from '@utils/helper';
import QRImage from '@components/QRCode/QRImage';
import Input from '@components/Input';
import './index.less';

function QRContent(props) {
    const parameter = useSelector((state) => state.parameter);
    const gifUrl = useSelector((state) => state.gifUrl);
    const loading = useSelector((state) => state.loading);
    const [qr, setQr] = useState('');
    const [val, setVal] = useState('https://sansui-d.github.io/gif-qrcode');

    useEffect(() => {
        const svg = document.getElementById('gif-qrcode-content-sketch');
        const cloneSvg = svg.cloneNode(true);
        cloneSvg
            .getElementsByTagName('svg')[0]
            .removeChild(cloneSvg.getElementsByTagName('image')[0]);
        domtoimage
            .toSvg(cloneSvg, { bgcolor: '#fff' })
            .then(function (dataUrl) {
                setQr(dataUrl);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, [parameter, val]);

    return (
        <div className="gif-qrcode-content-qrcontent">
            <div className="gif-qrcode-content-qrcontent-container">
                <div id="gif-qrcode-content-sketch">
                    <QRImage
                        value={val}
                        {...parameter}
                        iconScale={getScale(parameter?.iconScale)}
                        className="gif-qrcode-content-qrcontent-qr"
                    />
                </div>
                {qr && <img className="gif-qrcode-content-clone-img" src={qr} />}
            </div>
            <Input
                value={val}
                onChange={setVal}
                placeholder="https://sansui-d.github.io/gif-qrcode"
            />
        </div>
    );
}

export default QRContent;
