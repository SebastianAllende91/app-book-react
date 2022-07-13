import api from "../config/api";

const BookService = {
  getBooks: () => api.get("/libros"),
  addBook: (data) => api.post("/libros", data),
  addBookAuthor: (data) => api.post("/libroAutor", data),
};
export default BookService;
