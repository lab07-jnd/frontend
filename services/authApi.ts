import axios from "axios";
import {AxiosError, AxiosResponse} from "axios";


export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class AuthApi{
  url: string;

  constructor(url: string) {
    this.url = url;
    
    authApi.interceptors.request.use((config) => {
      const token = localStorage.getItem("TOKEN_APLICACAO_FRONTEND");
      const authRequestToken = token ? `Bearer ${token}` : "";
      config.headers['Authorization'] = authRequestToken;
      return config;
    },
    (error) => Promise.reject(error)
    );

    authApi.interceptors.response.use((response) => {
      return response;
    },async (error) => {
      const originalRequest = error.config;
      console.log(error.response.status);
      if(error.response?.status == 401 && !error.config.url.includes("/login")){
        localStorage.removeItem("TOKEN_APLICACAO_FRONTEND");
        window.location.reload();
      }
      return Promise.reject(error);
    }
    );
  }

async login(email: string, password: string) {
  const { data } = await authApi.post("/login", { email, password }); 
  localStorage.setItem("TOKEN_APLICACAO_FRONTEND", data.token);      
  document.cookie = `TOKEN_APLICACAO_FRONTEND=${data.token}; path=/; max-age=3600; SameSite=Lax`;
  return data;
}
}