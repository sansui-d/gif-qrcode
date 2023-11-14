import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import GIF from "gif.js";
import domtoimage from 'dom-to-image';
import { worker } from "@utils/gif-worker";
import { addImg, resetImg, setParameter, setGifUrl, setGifName, setLoading } from '@store/actions'
import './index.less';

const Build = (props) => {
  const dispatch = useDispatch();
  const imgs = useSelector(state => state.imgs)
  const gif = useRef(null);
  const timeout = useRef(null);

  const initGif = () => {
    gif.current = new GIF({
      workers: 2,
      quality: 10,
      workerScript: worker,
    });
  };

  const handleBuild = async () => {
    gif.current?.abort();
    gif.current.frames = [];
    dispatch(setLoading(2))
    for (let img of imgs) {
      dispatch(setParameter('image', img))
      await makeQRCodePromise()
    }
    try {
      gif.current.on("progress", function (progress) {
        console.log(progress)
      });
      gif.current.on("finished", function (blob) {
        const gif = URL.createObjectURL(blob);
        dispatch(setGifUrl(gif))
        dispatch(setLoading(0))
      });
      gif.current?.render();
    } catch (err) {
      console.log(err);
      dispatch(setLoading(0))
    }
  }

  const makeQRCodePromise = () => {
    return new Promise((resolve, reject) => {
      timeout.current = setTimeout((() => {
        imgRender()
        resolve()
      }), 100)
    })
  }

  const imgRender = () => {
    const svg = document.getElementById("gif-qrcode-content-sketch");
    domtoimage.toSvg(svg, { bgcolor: '#fff' })
      .then(function (dataUrl) {
        let img = document.createElement('img');
        img.src = dataUrl
        img.onload = () => {
          gif.current?.addFrame(img, {
            delay: 100,
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

  return <div className='gif-qrcode-content-build' onClick={handleBuild}>Build</div>
}

export default Build;
