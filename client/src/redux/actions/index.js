import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});

export const createPosts = createActions({
    createPostsRequest: (payload) => payload,
    createPostsSuccess: (payload) => payload,
    createPostsFailure: (err) => err,
});

export const updatePosts = createActions({
    updatePostsRequest: (payload) => payload,
    updatePostsSuccess: (payload) => payload,
    updatePostsFailure: (err) => err,
});

export const showModal = createAction("SHOW_MODAL");
export const hidenModal = createAction("HIDDEN_MODAL");