import React from 'react';
import './style.css';
import axios from 'axios';
import BlogPost from './BlogPost.js';

export default function App() {
  const userList = users.map((user) => <li>{user}</li>);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {getUsers()}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1>React Blog</h1>
            <form>
              <div className="mb-2">
                <select className="form-select" aria-label="User select">
                  <option selected>Select the user</option>
                  <option value="1">1 - Leanne Graham</option>
                  <option value="2">2 - Ervin Howell</option>
                  <option value="3">3 - Clementine Bauch</option>
                </select>
              </div>
              <div className="mb-2">
                <label for="postTitle" className="form-label">
                  Blog Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postTitle"
                  aria-describedby="Help"
                />
              </div>
              <div className="mb-3">
                <label for="contentInput" className="form-label">
                  Blog Post
                </label>
                <textarea
                  className="form-control"
                  id="contentInput"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={postBlogPost}
                >
                  New Post
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 p-2">
            <div className="row mb-3">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={getBlogPosts}
                >
                  Get All Posts
                </button>
              </div>
            </div>

            <BlogPost text={result} />

            <BlogPost text="Third boyyyy" />

            <BlogPost text="Third ong frfr" />
          </div>
        </div>
      </div>
    </div>
  );
}

const getUsers = async () => {
  try {
    const response = await axios.get(
      'https://my-json-server.typicode.com/keschae/blog/users'
    );
    setUsers(response.data);
    // console.log(response.data);
    console.log('Sucessful Get');
    console.log('users: ', users);
    // return response.data;
  } catch (error) {
    console.error(error);
  }
};

function getBlogPosts() {
  //Populates Blog Posts
}

function postBlogPost() {
  //Posts a blog post
}

fetch('https://my-json-server.typicode.com/keschae/blog/db')
  .then((response) => response.json())
  .then((result) => {
    var result = document.userId;
  });

//get authors

//get request when button is pushed to retruieve blog posts

//post for new blog posts

//delete for deleted blog posts
