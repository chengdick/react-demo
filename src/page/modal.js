import React from 'react';
import { Modal, Button ,Form,Input} from 'antd';
const FormItem = Form.Item;


export default  Form.create()(class Modals extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
        }
      });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
     
            >
            {/* <Form onSubmit={this.handleSubmit} style={{backgroundColor:'#FFF',paddingTop: 30,minHeight:620}}> */}
            
            <FormItem label="邮箱">
            {getFieldDecorator('email', {
                initialValue: this.props.email,
                rules: [{
                type: 'email', message: '邮箱格式不正确',
                }, {
                required: true, message: '邮箱不能为空',
                }],
            })(
                <Input placeholder="请输入" />
            )}
            </FormItem>
            {/* </Form> */}
        </Modal>
      </div>
    );
  }
})
