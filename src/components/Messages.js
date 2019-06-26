import React from 'react'

class Messages extends React.Component {
  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";

  }
  render() {
    const {messages} = this.props;
    return (
      <ul className = "Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;
