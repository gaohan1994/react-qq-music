import { notification } from 'antd';
import axios, { Method } from 'axios';
import { API_URL } from 'constants/api';

interface IRequestParams<RequestPayload> {
  url: string;
  method: Method;
  data?: RequestPayload;
  headers?: Record<string, string>;
  errorAlert?: boolean;
}

class HttpClient {
  static Headers = {
    'Content-Type': 'application/json',
  };

  async open(key: string, input?: any, options?: Partial<IRequestParams<any>>) {
    const method = key.substr(0, key.indexOf('/')) as Method;
    const url = key.substr(method.length);
    return this.request({ method, url, data: input, ...options });
  }

  async request<T>(options: IRequestParams<T>) {
    let { url, method, data, headers, errorAlert = true } = options;
    headers = {
      ...HttpClient.Headers,
      ...headers,
    };

    if (!url.startsWith('http')) {
      url = API_URL + url;
    }

    return axios({ url, data, method, headers }).then(
      (response) => {
        if (response.status !== 200) {
          let message = '系统正忙，请稍后再试';

          if (errorAlert) {
            notification.error({ message });
          }
          throw response;
        }

        return response.data.response;
      },
      (error) => {
        throw error;
      },
    );
  }
}

export const http = new HttpClient();
