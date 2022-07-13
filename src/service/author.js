import api from "../config/api";

const AuthorService = {
  getAuthors: () => api.get("/autores"),
};

export default AuthorService;
