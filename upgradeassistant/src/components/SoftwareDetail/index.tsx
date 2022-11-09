import React from 'react'
import './index.scss'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
const { Option, OptGroup } = Select;

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

type Props = { setShowdetail: Function }
export default function SoftwareDetail({ setShowdetail }: Props) {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='SoftwareDetail'>
            <div className='SoftwareDetail-mask' onClick={() => setShowdetail(0)}></div>
            <div className='SoftwareDetail-main'>
                <div className='SoftwareDetail-message'>
                    <img src="https://seopic.699pic.com/photo/50062/9677.jpg_wh1200.jpg" alt="" />
                    <div className='SoftwareDetail-message-middle'>
                        <div className='SoftwareDetail-message-title'>CATIA P3 V5R21</div>
                        <div className='SoftwareDetail-message-desc'>软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信信息软件信息软件信息件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信信息软件信息软件信息件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信息软件信信息软件信息软件信息件信息软件信息软件信息</div>
                    </div>
                    <div className='SoftwareDetail-message-right'>
                        <div className='SoftwareDetail-message-other'>
                            <div>
                                <Select defaultValue="lucy" style={{ width: 100, fontSize: '4px' }} onChange={handleChange}>
                                    <OptGroup style={{ width: 100, fontSize: '4px' }} label="下载客户端安装包">
                                        <Option style={{ width: 100, fontSize: '4px' }} value="1">下载安装包</Option>
                                    </OptGroup>

                                    <OptGroup style={{ width: 100, fontSize: '4px' }} label="获取数据库升级文件">
                                        <Option style={{ width: 100, fontSize: '4px' }} value="2">.sql类型</Option>
                                        <Option style={{ width: 100, fontSize: '4px' }} value="3">.sbl类型</Option>
                                    </OptGroup>
                                </Select>
                                <Button style={{ marginLeft: '20px' }} type="primary" shape="round" icon={<DownloadOutlined />}>
                                </Button>
                            </div>
                            <p>大小：3.12GB&nbsp;&nbsp;&nbsp;版本：xxxxxx</p>
                        </div>
                    </div>
                </div>
                <div className='SoftwareDetail-version'>历史版本
                    <ul className='SoftwareDetail-allversion'>
                        {data?.map((v, i) => {
                            return (<li key={i} className='SoftwareDetail-eachVersion'><div className='SoftwareDetail-eachVersion-number'>版本号：15.23,1</div><div className='SoftwareDetail-eachVersion-message'>版本信息版本信息版本信息版本信息版本信息版本信息版本信息版本信息版本信息信息版本信息版本信息信息版本信息版本信息信息版本信息版本信息</div><div className='SoftwareDetail-eachVersion-button'>  <Button type="primary" icon={<DownloadOutlined />} size='small'>
                                Download
                            </Button></div></li>)
                        })}

                    </ul>
                </div>

            </div>
        </div>
    )
}
