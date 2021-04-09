/**
 * This file declares the basic axios stuff for use by everyone else
 * as a global import.
 * @author npcompletenate
 */
import axios from 'axios';

// this gets changed for production, but this works for local dev
const serverURL = 'http://localhost:1337';

// create the axios object used to interact with the API
const api = axios.create({
  baseURL: serverURLs
});

export default api;