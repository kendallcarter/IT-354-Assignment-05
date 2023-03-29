import React from 'react';

const BlogPost = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-4">
        <h4>{props.text}</h4>
      </div>
      <div className="col-8">
        <button
          type="button"
          className="float-end btn btn-secondary"
          onClick={deletePost}
        >
          Delete Post
        </button>
      </div>
      <div className="col-12">
        <p>{props.userID}</p>
        <p>Lorem {props.body}</p>
      </div>
    </div>
  );
};
function deletePost() {
  //deletes a blog post
}

export default BlogPost;
