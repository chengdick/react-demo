import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

export default class XfModal extends React.Component {
  render() {
    const info = Object.assign({}, {
      width: '50%',
      destroyOnClose: true, // 关闭时销毁 Modal 里的子元素
      maskClosable: false, // 点击蒙层是否允许关闭
      centered: true // 垂直居中展示 Modal
      // footer: null // 去掉底部按钮
    }, this.props);
    return (
      <Modal
        {...info}
      >
        {this.props.children}
      </Modal>
    );
  }
}

XfModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool
};

