import { ADDIMG, RESETIMG, SETPARAMETER, SETGIFURL } from '../types/index';

export function addImg(img) {
  return {
    type: ADDIMG,
    img
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
export function setGifUrl(url) {
  return {
    type: SETGIFURL,
    url
  }
}
