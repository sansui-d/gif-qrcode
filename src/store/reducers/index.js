import { ADDIMG, RESETIMG, SETPARAMETER, SETGIFURL, SETGIFNAME, SETLOADING } from '../types/index'
import { iconSource } from '@constants'
import gif2 from '@assets/gif2.gif'

const rootState = {
    imgs: [],
    parameter: {
        level: 'H',
        iconType: '0',
        icon: '',
        iconScale: 22,
        title: 'hello',
        titleSize: 14,
        titleColor: '#000000',
        image: '',
        type: 'rect',
        size: 100,
        opacity: 100,
        darkColor: '#000000',
        lightColor: '#ffffff',
        posType: 'rect',
        posColor: '#000000'
    },
    gifUrl: gif2,
    gifName: 'gif-qrcode',
    loading: 0 // 0: done, 1: gif split, 2: gif merge
}
export default function reducers(state = rootState, actions) {
    switch (actions.type) {
        case ADDIMG: {
            const imgs = [...state.imgs, actions.img]
            return { ...state, imgs: imgs }
        }
        case RESETIMG: {
            return { ...state, imgs: [] }
        }
        case SETPARAMETER: {
            const parameter = { ...state.parameter }
            parameter[actions.key] = actions.value
            actions.key === 'iconType' && (parameter.icon = iconSource[parameter.iconType])
            return { ...state, parameter }
        }
        case SETGIFURL: {
            return { ...state, gifUrl: actions.url }
        }
        case SETGIFNAME: {
            return { ...state, gifName: actions.name }
        }
        case SETLOADING: {
            return { ...state, loading: actions.loading }
        }
        default:
            return state
    }
}