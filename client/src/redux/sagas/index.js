import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        const posts = yield call(api.createPosts, action.payload);
        yield put(actions.createPosts.createPostsSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.createPosts.createPostsFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const posts = yield call(api.updatePosts, action.payload);
        console.log(posts);
        yield put(actions.updatePosts.updatePostsSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.updatePosts.updatePostsFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
    yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga);
}

export default mySaga;