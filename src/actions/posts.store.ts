import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostObject {
  id: string,
  username: string,
  title: string,
  content: string,
  timestamp: Date
}

interface PostState {
  value: Array<PostObject>
}

interface EditedPostObject {
  id: string,
  title: string,
  content: string
}

// Define the initial state using that type
const initialState: PostState = {
  value: []
}

const postsSlice = createSlice({
  name: 'posts',

  initialState,

  reducers: {
    submitPost: (state, action: PayloadAction<PostObject>) => {
      const posts = state.value
      posts.unshift(action.payload) 
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const posts = state.value
      const postIndex = posts.findIndex(post => post.id === action.payload)

      posts.splice(postIndex, 1)
    },
    editPost: (state, action: PayloadAction<EditedPostObject>) => {
      const posts = state.value
      const postIndex = posts.findIndex(post => post.id === action.payload.id)

      posts[postIndex].title = action.payload.title
      posts[postIndex].content = action.payload.content
    }
  }
})

export const { submitPost, deletePost, editPost } = postsSlice.actions

export default postsSlice.reducer