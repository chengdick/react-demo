import React from 'react';
import {Table} from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }];
  

export default class Tablelist extends React.Component {

    handleTableChange = (pagination, filters, sorter) => {
        this.props.handleTableChange(pagination, filters, sorter);
    }

     rowSelection = {

        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
        //     checked	: record.title === 'Disabled User', // Column configuration not to be checked
        //     name: record.name,
        }),
    };


    render() {
        return (
            <div> 
            <Table
                rowSelection={this.rowSelection}
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.props.data}
                pagination={this.props.pagination}
                loading={this.props.loading}
                onChange={this.handleTableChange}
                scroll={{y:this.props.height}}
                expandedRowRender={record => <p style={{ margin: 0 }}>12222222222222</p>}
                expandRowByClick={this.expandRowByClick}
                expandIconAsCell={false}
                onExpand={this.onRowExpand}
               
            />
            </div>
        )
    }
}