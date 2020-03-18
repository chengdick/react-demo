import React from 'react';
import './index.css';
import Operation from './comment/screen'
import Tablelist from './comment/tablelist'
import Forms from './comment/form'
import ulits from '../../component'
 


export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            height:ulits.srcoll(),
            flag:false
        };

        this.textInput = React.createRef();
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
        window.onresize= () =>{
            this.setState({
                height: ulits.srcoll()
            });
        }
        this.fetch();
       
    }

    componentDidUpdate(prevProps, prevState) {  //数据跟新执行
      
    }

    //查询
    handleSearch = e => {
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

    onFilter=()=>{
        // this.setState({
        //     flag: !this.state.flag,
        // });
      console.log(this.textInput)
    }

    render() {

        return (
            <div className='relative'>
                <Forms handleSearch={this.handleSearch}></Forms>
                <Operation  onFilter={this.onFilter}></Operation>
                <Tablelist {...this.state} handleTableChange={this.handleTableChange}></Tablelist>
                <div  style={{'height':this.state.height+140}} className={`listActive ${this.state.flag?'active':''}`}></div>
            </div>
        )
    }   
}

  