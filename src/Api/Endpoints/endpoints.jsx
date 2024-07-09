import api from "../baseUrl/api";
const endpoint = "/todo";

export const addTodo = (body) => api.post(endpoint, body);

export const editTodo = (body) => api.patch(`${endpoint}/${body.id}`, body);

export const deleteTodo = (body) => api.delete(`${endpoint}/${body.id}`, body);

export const getTodo = () => api.get(endpoint);
