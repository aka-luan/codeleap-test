import { combineReducers } from "redux"
import usernameReducer from "../actions/username.store"
import postsReducer from "../actions/posts.store"


const rootReducer = combineReducers({
  username: usernameReducer,
  posts: postsReducer
})

export default rootReducer