import { Button, Modal, TextareaAutosize, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";
import { createPosts, hidenModal } from "../redux/actions";

const CreateNewPost = () => {
  const { isShow } = useSelector((state) => state.modal);
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(hidenModal());
  }, [dispatch]);
  const onSubmit = useCallback(() => {
    dispatch(createPosts.createPostsRequest(data));
    onClose();
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [data, dispatch]);
  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal open={isShow} onClose={onClose}>
      {body}
    </Modal>
  );
};

export default CreateNewPost;
