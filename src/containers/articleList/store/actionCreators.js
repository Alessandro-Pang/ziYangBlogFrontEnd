/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-01 23:53:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\actionCreators.js
 */

import {
  GET_ARTICLE_INFO,
  ARTICLE_INFO,
  PAGE_NUMBER,
  SET_PAGE_SIZE_NUM,
  ARTICLE_LIMIT_LIST
} from "./constants";

export const get_article_info = (page, pageSize) => ({
  type: GET_ARTICLE_INFO,
  page,
  pageSize,
});

export const article_info = (articleList) => ({
  type: ARTICLE_INFO,
  articleList,
});


export const set_page = (page) => ({
  type: PAGE_NUMBER,
  page,
});

export const set_page_size = (pagesize) => ({
  type: SET_PAGE_SIZE_NUM,
  pagesize,
});

export const article_limit_list = (articleLimit) =>({
 type: ARTICLE_LIMIT_LIST,
 articleLimit
})