import { ADDIMG, RESETIMG, SETPARAMETER, SETGIFURL, SETGIFNAME, SETLOADING } from '../types/index';

export function addImg(img) {
    return {
        type: ADDIMG,
        img
    }
}
export function resetImg() {
    return {
        type: RESETIMG
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
export function setGifName(name) {
    return {
        type: SETGIFNAME,
        name
    }
}
export function setLoading(loading) {
    return {
        type: SETLOADING,
        loading
    }
}
