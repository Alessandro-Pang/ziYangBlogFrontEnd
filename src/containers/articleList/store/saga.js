/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-09-21 23:52:32
 * @LastEditors: zi.yang
 * @Description: In User Settings Edit
 * @FilePath: \ziYangBlogFrontEnd\src\containers\articleList\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";
import { api } from "src/utils";

function* get_articleList(action) {
  try {
    const res = yield call(api.fetchAticleList, action);
    yield put(article_info(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* articleListSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleList);
}

export default articleListSaga;
