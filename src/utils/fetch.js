import axios from 'axios';

class Fetch {
  constructor() {
    let service = axios.create({});
    this.service = service;
  }

  get(url, cfg) {
    return this.service.get(
      url,
      Object.assign({}, cfg, {
        responseType: 'json',
      }),
    );
  }
  patch(url, payload, cfg) {
    return this.service.request(
      Object.assign({}, cfg, {
        method: 'PATCH',
        url: url,
        data: payload,
        responseType: 'json',
      }),
    );
  }

  post(url, payload, cfg) {
    return this.service.request(
      Object.assign({}, cfg, {
        method: 'POST',
        url: url,
        data: payload,
        responseType: 'json',
      }),
    );
  }

  put(url, payload, cfg) {
    return this.service.request(
      Object.assign({}, cfg, {
        method: 'PUT',
        url: url,
        data: payload,
        responseType: 'json',
      }),
    );
  }

  delete(url, payload, cfg) {
    return this.service.request(
      Object.assign({}, cfg, {
        method: 'DELETE',
        url: url,
        data: payload,
        responseType: 'json',
      }),
    );
  }

  request(url, cfg) {
    return this.service.request(Object.assign({}, cfg, { url: url }));
  }

  getCancelRequest() {
    return axios.CancelToken.source();
  }

  isRequestCancel(error) {
    return axios.isCancel(error);
  }
}

export default new Fetch();
