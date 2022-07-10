import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../redux/actions";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  console.log("posts:", posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts?.map((post, index) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} key={index} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostList;
