import axios from "axios";

/**
 * Configuração do Axios para comunicação com o Backend.
 * Utilizamos import.meta.env.VITE_API_URL para pegar a URL
 * definida no arquivo .env (ex: http://localhost:3000).
 * Isso facilita a troca de ambiente (local vs produção).
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
