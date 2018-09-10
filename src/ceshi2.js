import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function formatDate(date) {
  return date.toLocaleDateString();
}

class Comment extends React.Component {
    render() {
      return (
       <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
                src={this.props.author.avatarUrl}
                alt={this.props.author.name} />
            <div className="UserInfo-name">
            {this.props.author.name}
            </div>
        </div>
        <div className="Comment-text">
            {this.props.text}
        </div>
        <div className="Comment-date">
            {formatDate(thisprops.date)}
        </div>
        </div>
      );
    }
  }



const comment = [{
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
}];
 
const c=comment.map((item) =>
    <Comment date={item.date}
    text={item.text}
    author={item.author}></Comment>
 )
ReactDOM.render(
  c,
  document.getElementById('root')
);