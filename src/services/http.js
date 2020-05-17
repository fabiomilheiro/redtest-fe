import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status >= 500) {
    console.error("An error occurred.", error);
  } else if (!error.response) {
    console.error(
      `Could not reach the server on the address ${error.config.url}.`
    );
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
};
