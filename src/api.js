import axios from 'axios'

//获取主题列表
export function GetTopics(params) {
  return axios.get(`vueApi/topics`,{params}).then(res => res.status === 200?Promise.resolve(res.data):{code:500,msg:'网络出错了'})
}

//获取主题详情
export function GetTopicsDetal(id) {
  let isHtml = true 
  return axios.get(`vueApi/topic/${id}?mdrender=${isHtml}`).then(res => res.status === 200?Promise.resolve(res.data):{code:500,msg:'网络出错了'})
}
