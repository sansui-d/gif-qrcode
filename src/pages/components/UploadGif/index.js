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
import Loading from '@components/Loading';
import gif1 from '@assets/gif1.gif'
import './index.less';

const Upload = (props) => {
    const { uploadRef } = props;
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const gif = useRef(null);
    const timeout = useRef(null);
    const [img, setImg] = useState(() => gif1);

    const loadImg = (img) => {
        return new Promise((resolve, reject) => {
            const docImg = document.createElement('img');
            docImg.src = img
            docImg.onload = function () {
                const superGif = new SuperGif({ gif: docImg });
                superGif.onError(function (e) {
                    reject()
                    console.log(e);
                });
                superGif.load(function () {
                    dispatch(resetImg());
                    for (let i = 0; i < superGif.get_length(); i++) {
                        superGif.move_to(i);
                        const sImg = superGif.get_canvas().toDataURL('image/png');
                        dispatch(addImg(sImg));
                        console.log(1)
                    }
                    console.log(2)
                    resolve()
                });
            };
        })
    }

    const handleUpload = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            dispatch(setGifName(file?.name.substring(0, file?.name.length - 4)));
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                dispatch(setLoading(1));
                setImg(e.target.result);
                loadImg(e.target.result).finally(()=>{ dispatch(setLoading(0)) })
            };
        }
    };

    useEffect(() => {
        loadImg(img)
    }, [])

    return (
        <div className="gif-qrcode-content-upload">
            <div className="gif-qrcode-content-upload-gif">{loading === 1 ? <Loading text={'gif in parsing...'} /> : <img src={img} />}</div>
            <label htmlFor="input" className="gif-qrcode-label">
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
