import api from "../config/api";

const CopyService = {
  getCopys: () => api.get("/copias"),
  //   addBook: (data) => api.post("/libros", data),
  //   addBookAuthor: (data) => api.post("/libroAutor", data),
};

export default CopyService;
