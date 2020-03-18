import React from 'react';
function formatDate(date) {
    return date.toLocaleDateString();
}
export default class Comment extends React.Component {
    render() {

        return (
             <div className="Comment"  >
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
                    {formatDate(this.props.date)}
                </div>
                <button onClick={this.props.upDate}>修改</button>
                <button onClick={this.props.onClose}>删除</button>
                </div>
        )
    }

}