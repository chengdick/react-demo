import React from 'react';
import { Checkbox  } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';
const CheckboxGroup = Checkbox.Group;

export default class  XfCheckboxgroup extends React.Component {

      state = {
        checkedList: this.props.defaultCheckedList,
        indeterminate: (this.props.defaultCheckedList.length>0)&&(Number(this.props.defaultCheckedList.length)!==this.props.allcheckbox.length),
        checkAll:  (Number(this.props.defaultCheckedList.length)!==0)&&(this.props.defaultCheckedList.length===this.props.allcheckbox.length),
        options:this.props.allcheckbox
      };
      onChange = (checkedList) => {
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && (checkedList.length < this.state.options.length),
          checkAll: checkedList.length === this.state.options.length,
        });
        this.props.onChange(checkedList)
      }
    
      onCheckAllChange = (e) => {
        let checked=[]
        if(e.target.checked){
            for(let i=0; i<this.state.options.length;i++){
                checked.push(this.state.options[i].value)
            }
        }else{
            checked=[]
        }
        this.setState({
          checkedList: checked,
          indeterminate: false,
          checkAll: e.target.checked,
        });
        this.props.onChange(checked)
      }
  render() {
    return (
       <div>
        <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全部
          </Checkbox>
        <CheckboxGroup className="inline" options={this.state.options} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }
}

XfCheckboxgroup.propTypes = {
    defaultCheckedList: PropTypes.array,
    allcheckbox: PropTypes.array
}

XfCheckboxgroup.defaultProps = {
    defaultCheckedList: [],
    allcheckbox: []
}