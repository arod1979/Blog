import { baseApi } from "./base";

export function getPosts(options, query) {
  console.log("options", options);
  const params = { ...options.params };

  if (query) {
    params.q = query;
  }

  return baseApi.get("posts", { ...options, params }).then((res) => res.data);
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}

export function createPost(data, options) {
  return baseApi.post("posts", data, options).then((res) => res.data);
}

export function updatePost(postId, data, options) {
  return baseApi.put(`posts/${postId}`, data, options).then((res) => res.data);
}

export function deletePost(postId, options) {
  return baseApi.delete(`posts/${postId}`, options).then((res) => res.data);
}
