import React from 'react';
import Comment from './comment'
export default class Dome extends React.Component {

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