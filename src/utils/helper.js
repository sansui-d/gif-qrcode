let seed = Math.random() * 233280;
export function rand(min, max) {
    seed = (seed * 9301 + 49297) % 233280;
    return min + (seed / 233280.0) * (max - min);
}

export function defaultViewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';

    const nCount = qrcode.getModuleCount();
    return String(-nCount / 5) + ' ' + String(-nCount / 5) + ' ' + String(nCount + nCount / 5 * 2) + ' ' + String(nCount + nCount / 5 * 2);
}

export function gamma(r, g, b) {
    return Math.pow((Math.pow(r, 2.2) + Math.pow(1.5 * g, 2.2) + Math.pow(0.6 * b, 2.2)) / (1 + Math.pow(1.5, 2.2) + Math.pow(0.6, 2.2)), 1 / 2.2)
}

const fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

export function isPicture(file) {
    return fileTypes.includes(file.type);
}

export const getScale = (iconScale) => {
    if (iconScale > 33 || iconScale < 0) {
        return '0.33'
    }
    if (iconScale > 0 && iconScale < 1) {
        return '0.01'
    }
    if (iconScale >= 1 && iconScale < 10) {
        return '0.0' + Math.round(iconScale)
    }
    return '0.' + Math.round(iconScale)
}
