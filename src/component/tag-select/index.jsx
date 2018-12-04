import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Tag, Icon, Row, Col ,Input} from 'antd';
import CspModal from '../csp-modal';
import './index.scss';
const CheckboxGroup = Checkbox.Group;
export default class TagSelect extends React.Component {
  state={
    selectList: this.props.value,
    visible: false,
    actionSelect: []
  }
  /**
   * tag关闭回调
   */
  onTagClose=(id) => {
    const selectList = this.state.selectList.filter(tag => tag !== id);
    this.setState({ selectList });
    this.props.onCallBack(selectList);
  }

  /**
   * 弹窗显示
   */
  showModal=() => {

    this.setState({
      visible: true,
      actionSelect: this.state.selectList
    });
  }

  /**
   * 弹窗确定
   */
  handleOk=() => {
    this.setState({
      visible: false,
      selectList: this.state.actionSelect
    });
    
    this.props.onCallBack(this.state.actionSelect);
  }

  /**
   * 弹窗取消
   */
  handleCancel=() => {
    this.setState({
      visible: false
    });
  }
  /**
   * checkbox回调
   */
  onCheckboxChange = (actionSelect) => {
    //通知父组件更新
    //封装数据传参
    //...
    this.props.onChange(actionSelect)
    this.setState({
      actionSelect
    });
  }
  render() {
    console.log(this.props,'----------------')
    return (
            <React.Fragment>
          
              <Tag style={{ background: '#fff', borderStyle: 'dashed' }} onClick={this.showModal}><Icon type="plus" /> {'添加'}</Tag>
              {
                this.props.fieldsList.length > 0 && this.props.fieldsList.map((item, index) => {
                  return this.state.selectList.indexOf(item.id) >= 0 ? (
                    <Tag
                      closable
                      color="geekblue"
                      key={index}
                      onClose={_ => { this.onTagClose(item.id); }}
                    >{item.fieldName}</Tag>
                  ) : null;
                })
              }
              <CspModal
                title={'添加'}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              
                width='50%'
              >
                <CheckboxGroup style={{width:'100%'}} onChange={this.onCheckboxChange} defaultValue={this.state.actionSelect}>
                  <Row>
                    {
                      this.props.fieldsList.length > 0 && this.props.fieldsList.map((item, index) => (

                        <Col span={8} style={{ paddingBottom: '10px' }} key={index}>
                          <Checkbox value={item.id}>{item.fieldName}</Checkbox>
                        </Col>

                      ))
                    }
                  </Row>
                </CheckboxGroup>
              </CspModal>
            </React.Fragment>
    );
  }
}

TagSelect.propTypes = {
  onCallBack: PropTypes.func,
  fieldsList: PropTypes.array,
  selectList: PropTypes.array
};

TagSelect.defaultProps = {
  onCallBack: _ => {},
  fieldsList: [],
  selectList: []
}