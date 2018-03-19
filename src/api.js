import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'
let baseUrl = 'api'
if(debug){
  baseUrl = 'vueApi'
}

//获取主题列表
export function GetTopics(params) {
  return axios.get(`${baseUrl}/topics`,{params}).then(res => res.status === 200?Promise.resolve(res.data):{code:500,msg:'网络出错了'})
}

//获取主题详情
export function GetTopicsDetal(id) {
  let isHtml = true
  return axios.get(`${baseUrl}/topic/${id}?mdrender=${isHtml}`).then(res => res.status === 200?Promise.resolve(res.data):{code:500,msg:'网络出错了'})
}
