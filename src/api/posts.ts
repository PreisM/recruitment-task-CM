import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_SERVER

export class ApiPosts {
  public getPosts (limit: number, skip: number) {
    return axios.get(`posts?limit=${limit}&skip=${skip}`)
  }

  public getPostsByPhrase (phrase: string) {
    return axios.get(`posts/search?q=${phrase}`)
  }
  
  public deletePost (id: number) {
    return axios.delete(`posts/${id}`)
  }
}

const apiPosts = new ApiPosts()
export default apiPosts