import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import GIF from 'gif.js';
import domtoimage from '@utils/dom-to-image';
import { worker } from '@utils/gif-worker';
import { setParameter, setGifUrl, setLoading } from '@store/actions'
import Button from '@components/Button';
import './index.less';

const Build = () => {
    const dispatch = useDispatch();
    const imgs = useSelector(state => state.imgs)
    const gif = useRef(null);
    const timeout = useRef(null);

    const initGif = () => {
        gif.current = new GIF({
            workers: 2,
            quality: 1,
            workerScript: worker
        });
    };

    const handleBuild = async () => {
        gif.current?.abort();
        gif.current.frames = [];
        dispatch(setLoading(2))
        console.log('GIF二维码合成中...')
        for (let img of imgs) {
            dispatch(setParameter('image', img))
            await makeQRCodePromise()
        }
        try {
            gif.current.on('progress', function (progress) {
                console.log('GIF二维码合成进度:', progress)
            });
            gif.current.on('finished', function (blob) {
                const gif = URL.createObjectURL(blob);
                dispatch(setGifUrl(gif))
                dispatch(setLoading(0))
                console.log('GIF二维码合成成功')
            });
            gif.current?.render();
        } catch (err) {
            console.error('oops, something went wrong!', err);
            dispatch(setLoading(0))
        }
    }

    const makeQRCodePromise = () => {
        return new Promise((resolve) => {
            timeout.current = setTimeout((() => {
                imgRender()
                resolve()
            }), 100)
        })
    }

    const imgRender = () => {
        const svg = document.getElementById('gif-qrcode-content-sketch');
        domtoimage.toSvg(svg, { bgcolor: '#fff', scale: 100 })
            .then(function (dataUrl) {
                let img = document.createElement('img');
                img.src = dataUrl
                img.onload = () => {
                    gif.current?.addFrame(img, {
                        delay: 100
                    });
                }
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    };

    useEffect(() => {
        initGif()
    }, [])

    return <Button className='gif-qrcode-content-build' text='Build' onClick={handleBuild} />
}

export default Build;
