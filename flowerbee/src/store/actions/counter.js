import { INDEX_DATA , INDEX_DETAIL , LOAD_MORE} from '../types/counter'
import { createAction } from 'redux-actions'


export const get_index_data = createAction(INDEX_DATA, () => {
  return new Promise(resolve => {
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
        // console.log(res)
        resolve({
          banner: res.data.top_stories,
          list: [{ header: '今日热闻' }].concat(res.data.stories)
        })
      }
    })
  })
})

export const get_index_detail = createAction(INDEX_DETAIL, (id) => {
  return new Promise(resolve => {
    wx.request({
      url:'http://news-at.zhihu.com/api/4/news/' + id,
      headers : {
        'Content-Type': 'application/json'
      },
      success(res){
        // console.log(res)
        resolve({
          text : res.data.body,
          img : res.data.image,
          title : res.data.title,
          pictures: res.data.pictures
        })
      }
    })
  })
})

export const load_data_more = createAction(LOAD_MORE, (data) => {
  // console.log(data)
  return new Promise(resolve => {
    wx.request({
      url:'http://news.at.zhihu.com/api/4/news/before/' + data,
      headers : {
        'Content-Type': 'application/json'
      },
      success(res){
        console.log(res)
        let date = res.data.date
        let year = date.substr(0,4)
        let month = date.substr(4,2)
        let day = date.substr(6,2)
        let Date = year + '-' + month + '-' + day
        resolve({
          list: [{ header: Date }].concat(res.data.stories)
        })
      }
    })
  })
})