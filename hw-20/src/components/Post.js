import React from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../redux/actions';
import '../styles/style.css'

const Post = ({ post, updateLike }) => {
  const changeLike = () => {
    updateLike(post.id);
};

  return (
    <div className='post'>
      <div className='card'>
        <div className='heading'>
          <img className="pic" src={post.avatar}/>
          <div className='author-info'>
            <div className="name">{post.name}</div>
            <div className="nickname">{post.nickname}</div>
            <div className="data">{post.date}</div>
          </div>
        </div>
        <img className='post-img' src={post.imageLink}/>
        <p className='content'>{post.postText}</p>
        <button className='button' onClick={changeLike}>
          {post.liked ? '\u2665' : '\u2661'} {post.likes}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  updateLike,
};

export default connect(null, mapDispatchToProps)(Post);