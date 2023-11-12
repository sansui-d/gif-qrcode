import { useEffect, useState ,useRef} from 'react';
import { useDispatch, useSelector } from "react-redux"
import GIF from "gif.js";
import domtoimage from 'dom-to-image';
import { worker } from "@utils/gif-worker";
import { addImg, resetImg, setParameter, setGifUrl } from '@store/actions'
import SuperGif from '@utils/libgif';
import './index.less';

const Upload = () => {
  const dispatch = useDispatch();
  const imgs = useSelector(state => state.imgs)
  const [loading, setLoading] = useState(0)
  const gif = useRef(null);
  const timeout = useRef(null);
  
  const initGif = () => {
    gif.current = new GIF({
        workers: 2,
        quality: 10,
        workerScript: worker,
    });
  };

  const makeQRCode = async () => {
    for (let img of imgs) {
      console.log(0)
      dispatch(setParameter('image', img))
      console.log(1)
      await makeQRCodePromise()
      console.log(2)
    }
    try {
      gif.current.on("progress", function (progress) {
          console.log(progress)
      });
      gif.current.on("finished", function (blob) {
          const gif = URL.createObjectURL(blob);
          console.log(gif, 'gif')
          dispatch(setGifUrl(gif))
      });
      gif.current?.render();
    } catch (err) {
      console.log(err);
    }
  }

  const makeQRCodePromise = () => {
    return new Promise((resolve, reject) => {
      timeout.current = setTimeout((()=>{
        imgRender()
        resolve()
      }), 100)
    })
  }

  const imgRender = () => {
    // const svg = document.getElementById("gif-qrcode-content-sketch").outerHTML;
    // const wrap = document.createElement('div');
    // wrap.innerHTML = svg;
    // const $svg = wrap.firstChild
    // const $clone = $svg.cloneNode(true);
    // $clone.setAttribute('width', 200);
    // $clone.setAttribute('height', 200);
    // const svgData = new XMLSerializer().serializeToString($clone);
    // let canvas = document.createElement('canvas');
    // canvas.setAttribute('width', 200);
    // canvas.setAttribute('height', 200);
    // let ctx = canvas.getContext('2d');
    // let img = document.createElement('img');
    // img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
    // img.onload = () => {
    //     ctx.fillStyle = 'white';
    //     // if (type === 'jpg') ctx.fillRect(0, 0, width, height);
    //     ctx.drawImage(img, 0, 0, 200, 200);
    //     let data = canvas.toDataURL('image/png');
    //     console.log(img, '1213123213')
    //     gif.current?.addFrame(img, {
    //       delay: 100,
    //     });
    // };

    // const cvs = document.getElementById("gif-qrcode-content-cvs");
    // const video = document.getElementById("gif-qrcode-content-sketch");
    // console.log(video.outerHTML, 'video')
    // const ctx = cvs.getContext("2d");
    // cvs.width = 200;
    // cvs.height = 200;
    // ctx.clearRect(0, 0, cvs.width, cvs.height);
    // ctx.drawImage(video, 0, 0, cvs.width, cvs.height);
    // const img = document.createElement("img");
    // img.src = cvs.toDataURL("image/png");
    // img.onload = () => {
    //     gif.current?.addFrame(img, {
    //         delay: 100,
    //     });
    // };
    const svg = document.getElementById("gif-qrcode-content-sketch");
    domtoimage.toPng(svg, { bgcolor: '#fff'} )
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

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const docImg = document.createElement("img");
        docImg.src = e.target.result;
        docImg.onload = function () {
          setLoading(1)
          const superGif = new SuperGif({ gif: docImg });
          superGif.onError(function (e) {
            console.log(e)
            setLoading(0)
          });
          superGif.load(function () {
            dispatch(resetImg())
            for (let i = 0; i < superGif.get_length(); i++) {
              superGif.move_to(i)
              const sImg = superGif.get_canvas().toDataURL('image/png');
              dispatch(addImg(sImg))
              console.log(sImg, 'sImg')
            }
            console.log(imgs, 'imgs')
            setLoading(0)
            // makeQRCode()
          });
        }
      };
    }
  };

  useEffect(()=>{
    initGif()
  },[])

  useEffect(()=>{
    makeQRCode()
  },[imgs])

  return <>
    <label
      htmlFor="input"
      className='gif-qrcode-content-upload'
    >Upload</label>
    <input
      type="file"
      id="input"
      hidden={true}
      accept=".gif"
      onClick={(e) => (e.target.value = null)}
      onChange={(e) => handleUpload(e)}
    />
  </>
}

export default Upload;
