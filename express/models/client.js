class Client {
  id = '';
  res = '';

  constructor(id, res) {
    this.id = id;
    this.res = res;
  }

  set id(id) {
    return this.id = id;
  }

  get id() {
    return this.id;
  }

  set res(res) {
    this.res = res;
  }

  get res() {
    return this.res;
  }
}

module.exports = Client;