/**
 * This file declares the basic axios stuff for use by everyone else
 * as a global import.
 * @author npcompletenate
 */
import axios from 'axios';

// this gets changed for production, but this works for local dev
const serverURL = 'http://localhost:1337';
axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN"
axios.defaults.xsrfCookieName = "csrf-token"

// create the axios object used to interact with the API
const api = axios.create({
  baseURL: serverURL,
  // withCredentials: true,
  // headers: {
  //   //'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
  // }
});

export default api;