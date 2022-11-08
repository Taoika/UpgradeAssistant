import {
    Input,
    Button,
    Form,
    Select,
    Upload,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React,{ useState } from 'react';

// 表单设置 表单提交相关函数
const { Option } = Select;

// 表单设置
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

// 软件上传事件触发
const normFile = (e: any) => {
  console.log('上传事件:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const App: React.FC = () => {

    // 表单提交
  const onFinish = (values: any) => {
    console.log('表单的所有值: ', values);
  };

  // -图片文件列表
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 图片组件的改变函数
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // 预览处理函数
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
    
  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item
        name="SWImg"
        label="软件图片"
        rules={[{ required: true, message: '请上传软件图片' }]}
      >
        {/* <ImgCrop rotate> */}
            <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                beforeUpload={()=>{return false}}
            >
                {fileList.length < 1 && '+ 图片上传'}
            </Upload>
        {/* </ImgCrop> */}
      </Form.Item>

      <Form.Item
        name="SWName"
        label="软件名"
        rules={[{ required: true, message: '请填写软件名' }]}
      >
        <Input placeholder="软件名" />
      </Form.Item>
      <Form.Item
        name="SWType"
        label="软件种类"
        hasFeedback
        rules={[{ required: true, message: '请确认软件的种类' }]}
      >
        <Select placeholder="请确认软件的种类">
          <Option value="InfoMgmt">信息管理</Option>
          <Option value="R&DDesign">研发设计</Option>
          <Option value="ProdCtrl">生产控制</Option>
          <Option value="ESW">嵌入式软件</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="SWIntro"
        label="简介"
        rules={[{ required: true, message: '请输入软件的简介' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="SWVersion"
        label="版本号"
        rules={[{ required: true, message: '请填写软件的版本号' }]}
      >
        <Input placeholder="版本号" />
      </Form.Item>

      <Form.Item
        name="SWVInfo"
        label="版本信息"
        rules={[{ required: true, message: '请填写软件的版本信息' }]}
      >
        <Input placeholder="版本信息" />
      </Form.Item>


      <Form.Item
        name="SW&Sql"
        label="软件上传"
        valuePropName="fileList"
        // getValueFromEvent={normFile}
        extra="请上传软件安装包和数据库更新脚本"
      >
        <Upload
          name="SW&SqlUpload" 
          listType="picture" 
          beforeUpload={()=>{return false}}
        >
          <Button type="primary">点击上传</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="SWVDesc"
        label="版本描述"
        rules={[{ required: true, message: '请输入该软件的版本描述' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          确认发布
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;