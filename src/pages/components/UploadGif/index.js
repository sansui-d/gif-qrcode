import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addImg,
    resetImg,
    setGifName,
    setLoading
} from '@store/actions';
import SuperGif from '@utils/libgif';
import Loading from '@components/Loading';
import gif1 from '@assets/gif1.gif'
import './index.less';

const Upload = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const [img, setImg] = useState(() => gif1);

    const loadImg = (img) => {
        return new Promise((resolve, reject) => {
            const docImg = document.createElement('img');
            docImg.src = img
            docImg.onload = function () {
                const superGif = new SuperGif({ gif: docImg });
                superGif.onError(function (e) {
                    reject()
                    console.error('oops, something went wrong!', e);
                });
                superGif.load(function () {
                    dispatch(resetImg());
                    for (let i = 0; i < superGif.get_length(); i++) {
                        superGif.move_to(i);
                        const sImg = superGif.get_canvas().toDataURL('image/png');
                        dispatch(addImg(sImg));
                    }
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
                console.log('GIF解析中...')
                loadImg(e.target.result).finally(() => {
                    dispatch(setLoading(0))
                    console.log('GIF解析完成')
                })
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
