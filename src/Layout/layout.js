import React from 'react';
import { Layout, Menu, Icon ,Breadcrumb} from 'antd';
import JSONS from "./json"
import  './layout.css'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


export default class SiderDemo  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            current:"",
            arr:[]
        };
    }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){
    // console.log()
    window.Axios.get("/json.json").then((data)=>{
        console.log(data)
    })
  
    let url=this.props.location.pathname.replace("/","")
    let sub="";
    let arr=[];
    JSONS.forEach(element => {
      element.children.forEach(item => {
        if(url===item.url){
          sub=element.key 
          arr.push(element.name)
          arr.push(item.name)
          return;
        }
      });
    });
    this.setState({
      current: url,
      sub:sub,
      arr:arr
    });
  }

  handleClick = (e) => {
    let url=this.props.location.pathname.replace("/","")
    console.log(this.props.location.pathname,'--',e.key)
    if(url===e.key){
      return
    }

    const path = `/#/${e.key}`
    window.location.href=path  //为什么用window跳转，react的路由重复点击有bug。
    let arr=[];
    JSONS.forEach(element => {
      element.children.forEach(item => {
        if(e.key===item.url){
          arr.push(element.name)
          arr.push(item.name)
          return;
        }
      });
    });
    this.setState({
      current: e.key,
      arr:arr
    });
  }

  render() {
    const item=JSONS.map((item,index) =>
     <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
     {item.children.map((el,index) =>
        <Menu.Item key={el.url} >
           <span>{el.name}</span>
          </Menu.Item>
      )}
      </SubMenu>
    )
    
   
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number,index) =>
        <Breadcrumb.Item  key={index}>{number}</Breadcrumb.Item>
      );
      return (
        <Breadcrumb style={{ margin: '16px 0px  0px 15px' }}>
        {listItems}
        </Breadcrumb>
      );
    }
    return (
      <Layout id="components-layout-demo-custom-trigger" style={{  background: '#fff' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{  background: '#fff' }}
        >
          <div className="logo">
            <img src="https://antd-admin.zuiidea.com/public/logo.svg"/>
            {this.state.collapsed?(null ):(<span>AntD Admin</span>)}
          </div>
          <Menu theme="light" mode="inline" 
          selectedKeys={[this.state.current]}  
          onClick={this.handleClick}
          defaultOpenKeys={[this.state.sub]}
          >
            {item}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <NumberList numbers={this.state.arr} />
          <Content style={{ margin: '13px 16px 24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

