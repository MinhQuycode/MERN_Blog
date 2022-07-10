import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { Fab } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreateNewPost from "../components/CreateNewPost";

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const createNewPost = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreateNewPost />
      <Fab color="primary" className={classes.fab}>
        <AddCircleIcon onClick={createNewPost} />
      </Fab>
    </Container>
  );
};

export default HomePage;
