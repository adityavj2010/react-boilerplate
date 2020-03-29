class ApiService {
  static instance = null;
  constructor() {
    if (!ApiService.instance) {
      ApiService.instance = this;
    }
    return ApiService.instance;
  }

  getUserData() {
    return fetch('/data.json').then(res => res.json());
  }
}

export default ApiService;
