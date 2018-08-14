import { handleActions } from 'redux-actions'
import { INDEX_DATA , INDEX_DETAIL , LOAD_MORE} from '../types/counter'

export default handleActions({
  [INDEX_DATA] (state,action) {
    // console.log(action.payload.list)
    return {
      ...state,
      index_data: {
        banner:action.payload.banner,
        list:action.payload.list
      }
    }
  },
  [INDEX_DETAIL] (state,action) {
    // console.log(action)
    return {
      ...state,
      index_detail:action.payload
    }
  },
  [LOAD_MORE] (state,action) {
    state.index_data.list.push(...action.payload.list)
    // console.log(state.index_data.list)
    return {
      ...state,
      ended:false
    }
  }
},
{
  index_data: [],
  index_detail: [],
  ended: true
})