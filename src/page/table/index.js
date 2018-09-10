import React from 'react';
import './index.css'
import { Row, Col ,Input,Form,Button,Select} from 'antd';
const FormItem = Form.Item;
const { Option } = Select;

export default Form.create()(class Table extends React.Component {

    constructor(props) {
        super(props)
    }
    
    //查询
    handleSearch = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          console.log(fieldsValue)
        });
      };
    
    //重置
    handleFormReset = () => {
    const { form } = this.props;
     form.resetFields();
    };
    
    render() {
     const { getFieldDecorator } = this.props.form;
      return (
        <div className="search">
        <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={7} sm={24}>
                    <FormItem label="规则名称">
                         {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                    </FormItem>
                </Col>
            <Col md={7} sm={24}>
                <FormItem label="使用状态"  >
                {getFieldDecorator('status')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                        <Option value="0">关闭</Option>
                        <Option value="1">运行中</Option>
                    </Select>
                )}
                </FormItem>
            </Col>
            <Col md={10} sm={24}>
                <div style={{ float: 'right', marginBottom: 24 }}>
                    <Button type="primary" htmlType="submit">
                    查询
                    </Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                    重置
                    </Button>
                </div>
            </Col>
            </Row>
        </Form>
        </div>
      );
    }
})


// const WrappedNormalLoginForm = Form.create()(Table);  
  