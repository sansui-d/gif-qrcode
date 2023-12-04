import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setParameter } from '@store/actions'
import { parameterList, COMPONENT_BY_NAME } from '@constants';
import './index.less';

const Parameter = () => {
    const dispatch = useDispatch();
    const parameter = useSelector(state => state.parameter)

    return <div className='gif-qrcode-parameter'>
        {parameterList.map(item => {
            if (((item.label === 'Icon Source' && parameter.iconType !== '1') ||
                (item.label === 'Icon Zoom' && parameter.iconType === '0') ||
                (item.label === 'Text Value' && parameter.iconType !== '2') ||
                (item.label === 'Font Size' && parameter.iconType !== '2') ||
                (item.label === 'Text Color' && parameter.iconType !== '2')
            )) return null;
            let Component = COMPONENT_BY_NAME[item.label];
            return (<div className='gif-qrcode-parameter-item' key={item.props.value} >
                <div className='gif-qrcode-parameter-label'>{item.label}</div>
                <div className='gif-qrcode-parameter-value'>
                    <Component {...item.props} value={parameter[item.props.value]} onChange={(value) => { dispatch(setParameter(item.props.value, value)) }} />
                </div>
            </div>)
        })}
    </div>
}

export default Parameter;
