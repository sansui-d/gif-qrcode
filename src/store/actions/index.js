import { ADDIMG, RESETIMG } from '../types/index';

export function addImg(imgs) {
  return {
    type: ADDIMG,
    imgs
  }
}
export function resetImg() {
    return {
      type: RESETIMG,
    }
  }
