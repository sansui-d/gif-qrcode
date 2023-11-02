import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addImg, resetImg } from '@store/actions'
import SuperGif from '@utils/libgif';
import './index.less';

const Upload = () => {
  const dispatch = useDispatch();
  const imgs = useSelector(state => state.imgs)
  const [loading, setLoading] = useState(0)

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
            }
            console.log(imgs, 'imgs')
            setLoading(0)
          });
        }
      };
    }
  };

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
