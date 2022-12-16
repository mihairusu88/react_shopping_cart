import apiConstants from '@utils/constants/api';
import { fetchAPI } from '@utils/api';

const defaultParams = { id: null, limit: 20, sort: 'desc' };

let api = {
  getCancelRequest: fetchAPI.getCancelRequest,
  get: ({ id, limit } = defaultParams) => {
    const url = id ? `${apiConstants.BASE_URL}/products/${id}` : `${apiConstants.BASE_URL}/products`;
    const params = id
      ? null
      : {
          limit,
        };

    return fetchAPI.get(url, params);
  },
};

export default api;
