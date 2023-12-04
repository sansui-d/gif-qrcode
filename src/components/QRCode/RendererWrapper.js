import React from 'react';
import { encodeData } from '@utils/qrcodeHandler';

export const RendererWrapper = (renderer) => {
    const Renderer = (props) => {
        let newProps = Object.assign({}, props);
        newProps.value = newProps.value || 'https://sansui-d.github.io/gif-qrcode';
        newProps.qrcode = newProps.qrcode || encodeData({ text: newProps.value, correctLevel: newProps.level, typeNumber: -1 });
        newProps.styles = { ...renderer.defaultCSS, ...props.styles };

        return (
            React.createElement(renderer, newProps)
        );
    }
    return Renderer;
}

export function drawIcon({ qrcode, title, titleSize, titleColor, titleAlign, icon, iconScale = .33, styles }) {
    if (!qrcode) return []
    if (!title && !icon) return null;
    const nCount = qrcode.getModuleCount();
    const { fontSize, color, verticalAlign, ...titleStyle } = styles.title || {};
    const titleVerticalAlign = titleAlign || verticalAlign || (icon ? 'bottom' : 'middle');
    iconScale = iconScale > .33 ? .33 : iconScale;
    const iconSize = Number(nCount * iconScale);
    const iconXY = (nCount - iconSize) / 2;
    const pointList = [];
    if (icon !== '') {
        pointList.push(<rect key={1} width={iconSize} height={iconSize} rx="2" ry="2" fill="#FFFFFF" x={iconXY} y={iconXY} />);
    }

    if (icon && icon !== 'none' && icon !== 'text') {
        pointList.push(<image key={2} xlinkHref={icon} width={iconSize - 2} x={iconXY + 1} y={iconXY + 1} />);
    }

    if (icon === 'text' && title) {
        const svgWidth = styles.svg && styles.svg.width ? styles.svg.width.replace('px', '') : 300;
        const titleFontSize = Number(nCount + nCount / 5 * 2) * (titleSize || fontSize || 12) / svgWidth;
        const titleFontColor = titleColor || color || '#000000';

        const fontY = (nCount / 2 + titleFontSize * .5)

        pointList.push(<text key={3} x={nCount / 2} y={fontY} fill={titleFontColor} style={{ ...titleStyle, fontSize: titleFontSize }} textAnchor="middle">{title}</text>)
    }

    return pointList;
}
