import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMwZTlkYTQzZjcwYjJhNjkzOTE1MzkyOTlhYmFkMCIsInN1YiI6IjY0MWMwNDZkZDc1YmQ2MjRhNTgxMThhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qVDrztOto5LXai9zbiaOUReT_fE0d4_3N_Q0b-RdZLY";
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
