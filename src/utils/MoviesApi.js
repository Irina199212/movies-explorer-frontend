export default class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
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

  getListMovies() {
    return fetch(`${this._baseUrl}/`, {
      headers: this._headers,
      method: 'GET',
    }).then((res) => this._getResponseData(res));
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
