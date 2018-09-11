import React from 'react';
import './index.css';
import Operation from './comment/screen'
import Tablelist from './comment/tablelist'
import Forms from './comment/form'
import { Row, Col ,Input,Form,Button,Select} from 'antd';
const FormItem = Form.Item;
const { Option } = Select;

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };
    }

    fetch = (params = {}) => {
        this.setState({ loading: true });
        window.Axios.ajax({
            url: 'https://randomuser.me/api',
            method: 'get',
            params: {
            results: 10,
            ...params,
            },
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            pagination.total = 200;
            this.setState({
            loading: false,
            data: data.results,
            pagination,
            });
        });
    }
    
    componentDidMount() {
        this.fetch();
    }
    //查询
    handleSearch = e => {
       console.log(e)
       this.fetch();
    };

    handleTableChange = (pagination, filters, sorter) =>{
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
    }

    render() {
        return (
            <div>
                <Forms handleSearch={this.handleSearch}></Forms>
                <Operation></Operation>
                <Tablelist {...this.state} handleTableChange={this.handleTableChange}></Tablelist>
            </div>
        )
    }   
}

  