import React from 'react';
import { Row, Col ,Input,Form,Button,Select} from 'antd';
import TagSelect from '../../../component/tag-select';

import { connect} from 'react-redux'
const FormItem = Form.Item;
const { Option } = Select;


class Forms extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            tagAllList:[]
        }
    }
    
    //查询
    handleSearch = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          console.log(fieldsValue,"----")
          this.props.handleSearch(fieldsValue);
        });
    };
    
    //重置
    handleFormReset = () => {
     const { form } = this.props;
     form.resetFields();
    };
    showModal =() =>{
         /** 模拟数据 begin */
        

        // this.setState({
        //     tagAllList:tagAllList
        // })
    }
    
    render() {
     const { getFieldDecorator } = this.props.form;
      
    // const { tagAllList } =this.state
    let tagAllList = [];
        // let tagSelect = [];
        for (let i = 1; i <= 12; i++) {
            tagAllList.push({
                id: i,
                fieldName: '货物及服务名称' + i
            });
            // if (i % 2 === 0) {
            //     tagSelect.push(i);
            // }
        }
    /** 模拟数据 end */

      return (
        <div className="search">
        <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={5} sm={24}>
                    <FormItem label="规则名称">
                         {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                    </FormItem>
                </Col>
            <Col md={5} sm={24}>
                <FormItem label="使用状态"  >
                {getFieldDecorator('status')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                        <Option value="0">关闭</Option>
                        <Option value="1">运行中</Option>
                    </Select>
                )}
                </FormItem>
            </Col>
            <Col md={7} sm={24}>
                <FormItem label="使用状态"  >
                {getFieldDecorator('modal', {
                    initialValue:[1]
                })(
                    <TagSelect
                        fieldsList = {tagAllList}
                        showModal={this.showModal}
                    ></TagSelect>
                )}
                </FormItem>
            </Col>
            <Col md={5} sm={24}>
                <div style={{ float: 'right' }}>
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
}
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Form.create()(Forms))  
