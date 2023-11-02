import { ADDIMG, RESETIMG, SETPARAMETER } from '../types/index';

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
export function setParameter(key, value) {
  return {
    type: SETPARAMETER,
    key,
    value
  }
}
