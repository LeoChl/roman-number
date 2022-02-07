class Response {
  number = '';
  error = '';

  constructor() {}

  set number(number) {
    return this.number = number;
  }

  get number() {
    return this.number;
  }

  set error(error) {
    this.error = error;
  }

  get error() {
    return this.error;
  }
}

module.exports = Response;