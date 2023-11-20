import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GIF from 'gif.js';
import domtoimage from 'dom-to-image';
import { worker } from '@utils/gif-worker';
import {
    addImg,
    resetImg,
    setParameter,
    setGifUrl,
    setGifName,
    setLoading
} from '@store/actions';
import SuperGif from '@utils/libgif';
import defaultGif from '@assets/default-gif.gif'
import './index.less';

const Upload = (props) => {
    const { uploadRef } = props;
    const dispatch = useDispatch();
    const imgs = useSelector((state) => state.imgs);
    const gif = useRef(null);
    const timeout = useRef(null);
    const [img, setImg] = useState(() => defaultGif);

    const handleUpload = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            dispatch(setGifName(file?.name.substring(0, file?.name.length - 4)));
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                setImg(e.target.result);
                const docImg = document.createElement('img');
                docImg.src = e.target.result;
                docImg.onload = function () {
                    dispatch(setLoading(1));
                    const superGif = new SuperGif({ gif: docImg });
                    superGif.onError(function (e) {
                        console.log(e);
                        dispatch(setLoading(0));
                    });
                    superGif.load(function () {
                        dispatch(resetImg());
                        for (let i = 0; i < superGif.get_length(); i++) {
                            superGif.move_to(i);
                            const sImg = superGif.get_canvas().toDataURL('image/png');
                            dispatch(addImg(sImg));
                        }
                        console.log(123);
                    });
                };
            };
        }
    };

    return (
        <div className="gif-qrcode-content-upload">
            <div className="gif-qrcode-content-upload-gif"><img src={img} /></div>
            <label htmlFor="input" className="gif-qrcode-content-upload-label">
        Upload
            </label>
            <input
                type="file"
                id="input"
                hidden={true}
                accept=".gif"
                onClick={(e) => (e.target.value = null)}
                onChange={(e) => handleUpload(e)}
            />
        </div>
    );
};

export default Upload;
