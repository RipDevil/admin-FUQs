import axios from 'axios';
import { preparePostParams } from './post-params';

type methodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * Makes a call
 * @param url
 * @param method accepts `GET | POST | PUT | DELETE` methods
 * @param params
 * @type RType takes an interface which should be returned from the server
 */
export function call<RType>(url: string, method: methodTypes, params?: object, token?: string) {
  let config: object = {
    url,
    method,
  };

  if (params) {
    config = {
      ...config,
      ...(method === 'GET' ? { params } : { data: preparePostParams(params) }),
    };
  }

  if (token) {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return axios.request<RType>(config);
}

/**
 * Logs all fetches if it's a dev env and if there is an `api-debug` field in the localStorage
 * @param url
 * @param method
 * @param config
 * @param data
 */
function logCall(url: string, method: methodTypes, config: object, data: object) {
  if (localStorage.getItem('api-debug')) {
    console.groupCollapsed(`API CALL >> ${method} ${url}`);
    console.log('request:', config);
    console.log('data:', data);
    console.groupEnd();
  }
}
