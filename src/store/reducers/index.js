import { ADDIMG, RESETIMG, SETPARAMETER, SETGIFURL } from '../types/index'
import { iconSource } from '@constants'
import { getScale } from '@utils/helper';

const rootState = {
  imgs: [],
  parameter: {
    level: 'H',
    iconType: '0',
    icon: '',
    iconScale: 22,
    image: '',
    type: 'rect',
    size: 100,
    opacity: 100,
    darkColor: '#000000',
    lightColor: '#ffffff',
    posType: 'rect',
    posColor: '#000000'
  },
  gifUrl: ''
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
      actions.key === 'iconScale' && (parameter.iconScale = getScale(actions.value))
      return { ...state, parameter }
    }
    case SETGIFURL: {
      return { ...state, gifUrl: actions.url }
    }
    default:
      return state
  }
}