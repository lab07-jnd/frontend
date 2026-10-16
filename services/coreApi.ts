
import axios from "axios";
import {AxiosError, AxiosResponse} from "axios";

export const coreApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class CoreApi{
  url: string;

  constructor(url: string) {
    this.url = url;
    
    coreApi.interceptors.request.use((config) => {
      const token = localStorage.getItem("TOKEN_APLICACAO_FRONTEND");
      const authRequestToken = token ? `Bearer ${token}` : "";
      config.headers['Authorization'] = authRequestToken;
      return config;
    },
    (error) => Promise.reject(error)
    );

    coreApi.interceptors.response.use((response) => {
      return response;
    },async (error) => {
      const originalRequest = error.config;
      console.log(error.response.status);
      if(error.response.status == 401){
        localStorage.removeItem("TOKEN_APLICACAO_FRONTEND");
        window.location.reload();
      }
      return Promise.reject(error);
    }
    );
  }
}