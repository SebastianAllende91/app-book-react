import api from "../config/api";

const RentalService = {
  getRentals: () => api.get("/prestamos"),
  addRental: (data) => api.post("/prestamos", data),
};

export default RentalService;
