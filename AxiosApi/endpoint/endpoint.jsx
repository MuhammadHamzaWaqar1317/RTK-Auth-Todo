import api from "../../AxiosApi/baseUrl/api";

export const signIn = async (body) => api.post("/auth/login", body);
