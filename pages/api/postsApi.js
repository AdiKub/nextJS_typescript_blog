import { queryGet, queryPost } from './apiConfig'

export default {
  getPostById(userId) {
    return queryGet(`/posts/${userId}`)
  },
  getPosts() {
    return queryGet(`/posts`)
  },
  setPost(data) {
    return queryPost(`/posts`, data)
  }
}
