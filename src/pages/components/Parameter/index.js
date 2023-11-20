import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setParameter } from '@store/actions'
import { parameterList, COMPONENT_BY_NAME } from '@constants';
import './index.less';

const Parameter = (props) => {
    const dispatch = useDispatch();
    const parameter = useSelector(state => state.parameter)

    return <div className='gif-qrcode-parameter'>
        <div className='gif-qrcode-parameter-title'>Parameter</div>
        {parameterList.map(item => {
            if (((item.label === 'Icon Source' && parameter.iconType !== '1') || (item.label === 'Icon Zoom' && parameter.iconType === '0'))) return null;
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
