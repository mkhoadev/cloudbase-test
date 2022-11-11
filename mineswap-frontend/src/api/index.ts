import axios from 'axios';
import { requireSignMessage } from 'state/auth/actions';
import { sssas } from '../state';

export const request = axios.create({
  baseURL: 'https://bionswap-796dw.ondigitalocean.app',
});

export const authRequest = axios.create({
  baseURL: 'https://bionswap-796dw.ondigitalocean.app',
});

authRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && originalRequest.url !== '/auth/connect-sign') {
      sssas.dispatch(requireSignMessage());
    }

    return Promise.reject(err);
  },
);
