import React from 'react';
import { Modal, Button ,Form} from 'antd';
import  Checkboxgroup from '../component/csp-checkboxgroup'
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
   
    const allcheckbox =[
      { label: '税控设备类型', value: '税控设备类型' },
      { label: '开票限额', value: '开票限额' },
      { label: '明细顺序', value: '明细顺序' },
      { label: '单价数量选项', value: '单价数量选项' },
      { label: '销货清单选项', value: '销货清单选项' },
      { label: '拆分金额规则', value: '拆分金额规则' },
      { label: '票面最大行数', value: '票面最大行数' },
      { label: '按字段拆分', value: '按字段拆分' },
      { label: '开票备注', value: '开票备注' }
    ]
    const defaultCheckedList=[]
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
            
            <FormItem label="全选">
            {getFieldDecorator('email', {
            })(
              <Checkboxgroup
              allcheckbox={allcheckbox}
              defaultCheckedList={defaultCheckedList}
              ></Checkboxgroup>
            )}
            </FormItem>
            
            {/* </Form> */}
        </Modal>
      </div>
    );
  }
})
