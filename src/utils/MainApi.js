export default class MainApi {
  constructor(options) {
    this._baseAuthUrl = options.baseAuthUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  signup(email, name, password) {
    return fetch(`${this._baseAuthUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ email: email, name: name, password: password }),
    }).then((res) => this._getResponseData(res));
  }

  signin(email, password) {
    return fetch(`${this._baseAuthUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => this._getResponseData(res));
  }

  getTokenContent = (token) => {
    return fetch(`${this._baseAuthUrl}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  };

  updateUserInfo(userInfo, token) {
    return fetch(`${this._baseAuthUrl}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PATCH',
      body: JSON.stringify(userInfo),
    }).then((res) => this._getResponseData(res));
  }
}

export const mainApi = new MainApi({
  baseAuthUrl: 'https://api.irinawork.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});
