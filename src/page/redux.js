import React from 'react';
import { Button } from 'antd';
// import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import { actions } from '../actions'

class Redux extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    btn =() =>{
      this.props.addTodo(2) 
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

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(actions.addTodo(text))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Redux)
