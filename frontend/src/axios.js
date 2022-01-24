import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

// Exporting instance object.Making it available
export default instance;
