import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/Store/Slices/PostsSlice";

const Posts = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h2>Post List</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {posts.postsList?.data.map((post) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      ;
    </>
  );
};

export default Posts;
