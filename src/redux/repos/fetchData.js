import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export const fetchRepos = createAsyncThunk(
  "repos/fetch",
  async ({q, page, per_page}, thunkApi) => {
    const response = await octokit.request(`GET /search/repositories{?q,sort,order,per_page,page}`, {
      q, page, per_page
    })

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to fetch toreposdos."
      });
    }

    return response.data;
  }
);