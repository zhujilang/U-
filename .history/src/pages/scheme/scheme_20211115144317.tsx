import React from 'react'
import { Button } from 'antd';
import { useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';

const Scheme = () => {
    let [sr,sett]== useState(0)
    return (
        <div className={'scheme'}>
            <div className={'scheme-all'}>
                <h2>装修方案</h2>
                <div className={'scheme-header'}>
                    <div className={'interval'}>首页</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div className={'interval'}>装修方案</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div>列表</div>
                </div>
                <div className={'scheme-state'}>
                    <div className={'sta'}>
                        <div className={'sf'}>状态：</div>
                        <div className={num==0?'state-check':'state-check'}>全部()</div>
                        <div className={'st'}>上架()</div>
                        <div className={'st'}>审核中()</div>
                        <div className={'st'}>已下架()</div>
                        <div className={'sr'}>审核未通过()</div>
                    </div>
                    <div>
                        <Button type="primary" icon={<PlusOutlined />}>
                            创建新的装修方案
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scheme