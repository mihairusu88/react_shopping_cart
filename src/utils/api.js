import fetch from '@utils/fetch';

const HTTP_STATUS_SUCCESS = [200, 201];

function isSuccessStatus(status) {
  return HTTP_STATUS_SUCCESS.includes(status);
}

export function normalizeSuccess({ data }) {
  return {
    success: true,
    data,
  };
}

export function normalizeError({ title, detail, data, status, cancel = false, code = null }) {
  return {
    success: false,
    title: title,
    message: detail,
    detail: data,
    status: status,
    code: code,
    cancel,
  };
}

export function checkStatus(response) {
  let data = response.data;
  return isSuccessStatus(response.status) ? normalizeSuccess({ data }) : normalizeError(data);
}

export function checkError(error) {
  if (fetch.isRequestCancel(error)) {
    return normalizeError({ cancel: true });
  }

  return normalizeError(error.response && error.response.data ? error.response.data : error);
}

export const fetchAPI = {
  get: (url, params = {}, headers = {}, { cancelToken, paramsSerializer } = {}) => {
    return fetch
      .get(url, { headers: { ...headers }, params, cancelToken, paramsSerializer })
      .then(checkStatus)
      .catch(checkError);
  },
  post: (url, data, headers, { cancelToken } = {}) => {
    return fetch
      .post(url, data, { headers: Object.assign({}, headers), cancelToken })
      .then(checkStatus)
      .catch(checkError);
  },
  put: (url, data, headers, { cancelToken } = {}) => {
    return fetch
      .put(url, data, { headers: Object.assign({}, headers), cancelToken })
      .then(checkStatus)
      .catch(checkError);
  },
  patch: (url, data, headers, { cancelToken } = {}) => {
    return fetch
      .patch(url, data, { headers: Object.assign({}, headers), cancelToken })
      .then(checkStatus)
      .catch(checkError);
  },
  delete: (url, data, headers, { cancelToken } = {}) => {
    return fetch
      .delete(url, data, { headers: Object.assign({}, headers) }, cancelToken)
      .then(checkStatus)
      .catch(checkError);
  },

  getCancelRequest: fetch.getCancelRequest,
};
