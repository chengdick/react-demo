import React from 'react';
import { Button} from 'antd';

export default class Operation extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="header" > 
                <Button className="btn-icon-color" icon="filter">筛选器</Button>
                <Button className="ml15" type="primary" icon="plus">新建</Button>
            </div>
        )
    }
}