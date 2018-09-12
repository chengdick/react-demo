import React from 'react';
import { Button } from 'antd';
import { connect} from 'react-redux'
import { addTodo } from '../actions'

class Redux extends React.Component {
    constructor(props) {
     super(props)
    }

    componentDidMount() {
        console.log(this.props.store)
    }

    btn =() =>{
      this.props.dispatch(addTodo()) 
    }

    render() {
      return (
        <div className="redux">
            <Button type="primary" onClick={this.btn}>Primary{this.props.num.list.demo}</Button>
        </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        num: state
    }
}


export default connect(mapStateToProps)(Redux)
