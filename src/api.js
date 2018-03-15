import axios from 'axios'

export function GetTopics(params) {
  return axios.get(`vueApi/topics`,{params}).then(res => res.status === 200?Promise.resolve(res.data):{code:500,msg:'网络出错了'})
}
