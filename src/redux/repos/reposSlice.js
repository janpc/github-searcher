import { createSlice } from '@reduxjs/toolkit'
import { fetchRepos } from './fetchData';

const initialState = {
  data: {},
  isLoading: false,
  initialState: true,
  error: null,
  text: '',
  page: 0,
  per_page: 10
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setInitialState : (state, action) => {
      state.initialState = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setItemsPerPage : (state, action) => {
      state.page = 0;
      state.per_page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.initialState = false;
    });
    builder.addCase(fetchRepos.fulfilled,
      (state, { payload }) => {
      state.data = { ...payload };
      state.isLoading = false;
    });

    builder.addCase(fetchRepos.rejected,
      (state, { payload }) => {
      if (payload) {
        state.error = payload.message;
      }
      state.isLoading = false;
    });
  }
})

export const { setInitialState, setPage, setText, setItemsPerPage } = reposSlice.actions

export default reposSlice.reducer


