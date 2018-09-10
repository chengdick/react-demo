import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment"  >
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
      <button onClick={props.upDate}>修改</button>
      <button onClick={props.onClose}>删除</button>
    </div>
  );
}

  class Dome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [{
                date: new Date(),
                text: 'I hope you enjoy learning React!',
                author: {
                    name: 'Hello Kitty',
                    avatarUrl: 'http://placekitten.com/g/64/64'
                }
                },{
                date: new Date(),
                text: 'I hope you enjoy learning React1111!',
                author: {
                    name: 'Hello Kitty',
                    avatarUrl: 'http://placekitten.com/g/64/64'
                }
                }]
        };
    }

    handleClick(t,i){
        let list=this.state.list;
        t.text=1
        list[i]=t;
        this.setState({list:list});
    }

    closeClick(t,i){
      this.state.list.splice(i,1)
      this.setState({
        list: this.state.list
      });
    }

    addClick(){
      this.state.list.push({
        date: new Date(),
        text: new Date().getTime(),
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
        })
        this.setState({
          list: this.state.list
        });
    }

    render() {
      const list= this.state.list.map((item,index) =>
          <Comment date={item.date}  key={item.text}
          text={item.text}
          author={item.author}  
          upDate={()=>this.handleClick(item,index)}
          onClose={()=>this.closeClick(item,index)}
          ></Comment>
      )
        return (
            <div>
                <button onClick={()=>this.addClick()}>新增</button>
                <div>{list}</div>
            </div>
        )
    }
  }
 
// const c=
ReactDOM.render(
    <Dome/>,
  document.getElementById('root')
);