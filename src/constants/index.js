import ColorPicker from '@components/ColorPicker';
import Select from '@components/Select';
import Input from '@components/Input';
import Upload from '@components/Upload';
import alipay from '@assets/ali-pay.svg'
import vxSmall from '@assets/vx-small.svg'
import vx from '@assets/vx.svg'
import vxPay from '@assets/vx-pay.svg'
export const iconSource = {
    '0': '',
    '1': 'none',
    '2': vxSmall,
    '3': vx,
    '4': vxPay,
    '5': alipay
}
export const levelOption = [
    { value: 'L', text: '7%', key: 'level0' },
    { value: 'M', text: '15%', key: 'level1' },
    { value: 'Q', text: '25%', key: 'level2' },
    { value: 'H', text: '30%', key: 'level3' }
]
export const iconTypeOption = [
    { value: '0', text: 'None', key: 'icon0' },
    { value: '1', text: 'Custom', key: 'icon1' },
    { value: '2', text: 'WeChat-Small', key: 'icon2' },
    { value: '3', text: 'WeChat', key: 'icon3' },
    { value: '4', text: 'WeChat-Pay', key: 'icon4' },
    { value: '5', text: 'Ali-Pay', key: 'icon5' }
]
export const typeOption = [
    { value: 'rect', text: 'Rectangle', key: 'type0' },
    { value: 'round', text: 'Round', key: 'type1' }
]
export const posTypeOption = [
    { value: 'rect', text: 'Rectangle', key: 'posType0' },
    { value: 'round', text: 'Round', key: 'posType1' },
    { value: 'planet', text: 'Star', key: 'posType2' }
]
export const parameterList = [
    {
        label: 'Fix Rate', props: {
            value: 'level', options: levelOption
        }
    },
    {
        label: 'Icon Type', props: {
            value: 'iconType', options: iconTypeOption
        }
    },
    {
        label: 'Icon Source', props: {
            value: 'icon', id: 'icon-source', label: 'upload'
        }
    },
    {
        label: 'Icon Zoom', props: {
            value: 'iconScale', type: 'number'
        }
    },
    {
        label: 'Background', props: {
            value: 'image', id: 'background', label: 'upload'
        }
    },
    {
        label: 'Information Style', props: {
            value: 'type', options: typeOption
        }
    },
    {
        label: 'Information Zoom', props: {
            value: 'size', type: 'number'
        }
    },
    {
        label: 'Information Opactiy', props: {
            value: 'opacity', type: 'number'
        }
    },
    {
        label: 'Information Dark', props: {
            value: 'darkColor'
        }
    },
    {
        label: 'Information Light', props: {
            value: 'lightColor'
        }
    },
    {
        label: 'Anchor Style', props: {
            value: 'posType', options: posTypeOption
        }
    },
    {
        label: 'Anchor Color', props: {
            value: 'posColor'
        }
    }
]
export const COMPONENT_BY_NAME = {
    'Fix Rate': Select,
    'Icon Type': Select,
    'Icon Source': Upload,
    'Icon Zoom': Input,
    'Background': Upload,
    'Information Style': Select,
    'Information Zoom': Input,
    'Information Opactiy': Input,
    'Information Dark': ColorPicker,
    'Information Light': ColorPicker,
    'Anchor Style': Select,
    'Anchor Color': ColorPicker
}