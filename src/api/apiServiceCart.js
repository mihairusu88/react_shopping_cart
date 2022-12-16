import apiConstants from '@utils/constants/api';
import { fetchAPI } from '@utils/api';

const defaultParams = { id: null };

let api = {
  getCancelRequest: fetchAPI.getCancelRequest,
  get: ({ id } = defaultParams) => {
    const url = id ? `${apiConstants.BASE_URL}/carts/${id}` : `${apiConstants.BASE_URL}/carts`;

    return fetchAPI.get(url);
  },
  update: (id, data) => {
    data = {
      merge: true,
      products: [...data],
    };
    data = JSON.stringify(data);
    return fetchAPI.put(`${apiConstants.BASE_URL}/carts/${id}`, data);
  },
  delete: (id) => {
    return fetchAPI.delete(`${apiConstants.BASE_URL}/carts/${id}`);
  },
};

export default api;
