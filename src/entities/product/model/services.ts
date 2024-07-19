import axios from "axios";
import qs from "query-string";

import { API_URL, mockApi } from "../api";
import { queryParams, tItem } from "./types";

export const getItems = async (params?: queryParams) => {
  const data = await mockApi
    .get<tItem[]>("/products", { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
  return data;
};

export const getItemById = async (id: string) => {
  const data = await mockApi
    .get(`/products/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {};
    });
  return data;
};

export const getItemByArticle = async (articles: string) => {
  const data = await mockApi
    .get("/products", { params: { articles } })
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      return {};
    });
  return data;
};
