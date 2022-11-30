import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    postRemoved: {
      reducer(state, action) {
        const index = state.findIndex((p) => p.id == action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, postRemoved } = postsSlice.actions;

export default postsSlice.reducer;
