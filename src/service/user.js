import api from "../config/api";

const UserService = {
  getUsers: () => api.get("/usuarios"),
  addUser: (data) => api.post("/usuarios", data),
};

export default UserService;
