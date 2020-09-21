/*
 * @Author: zi.yang
 * @Date: 2020-07-02 21:11:25
 * @LastEditTime: 2020-07-07 10:15:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\utils\api\index.js
 */
import { FetchX } from "src/utils";
import navLink from "./data/navlink.json";

const baseUrl = "http://127.0.0.1:8899/api/v1";
const fetchX = new FetchX(baseUrl);

export const fetchMenuInfo = () => fetchX.get("/menu/info");

export const fetchAticleList = () => fetchX.get("/article/info");

export const fetchAticleInfoById = (action) =>
  fetchX.get("/article/find", { article_id: action.article_id });

export const fetchFilingList = () => fetchX.get("/article/findFiling");

export const fetchTagList = () => fetchX.get("/article/findTagList");

export const fetchHotArticle = () => fetchX.get("/article/findHotArticle");

export const fetchFindArticleList = (action) =>
  fetchX.get("/article/findArticelList", {
    typename: action.typename,
    typeValue: action.typeValue,
  });

// const staicFetch = new FetchX();
export const fetchNavLinkList = () => navLink//staicFetch.get(navLink);
