export default class MainApi {
  constructor(options) {
    this._baseAuthUrl = options.baseAuthUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      return Promise.reject(data.message);
    });
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

  getSavesMovies = (token) => {
    return fetch(`${this._baseAuthUrl}/movies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  };

  addMovie(movie, token) {
    return fetch(`${this._baseAuthUrl}/movies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify(movie),
    }).then((res) => this._getResponseData(res));
  }

  removeMovie(id, token) {
    return fetch(`${this._baseAuthUrl}/movies/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    }).then((res) => this._getResponseData(res));
  }

  updateUserInfo(userInfo, token) {
    return fetch(`${this._baseAuthUrl}/users/me`, {
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
