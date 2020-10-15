import React from "react";
import { Comment, Avatar } from 'antd';
import './Comments.css';


class Comments extends React.Component {
  render() {
    const ExampleComment = ({ children }) => (
      <Comment
         actions={[<span key="comment-nested-reply-to">Reply to</span>]}
         author={this.props.author}
         avatar={
       <Avatar
         src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
         alt="Milo Avatar"
       />
     }
     content={
       <p>
         We supply a series of design principles, practical patterns and high quality design
         resources (Sketch and Axure).
       </p>
     }
   >
     {children}
   </Comment>
 );
    return (
      <>
      <div className="container_comentarios">
    <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
      </div>
      </>
    );
  }
}

export default Comments;
