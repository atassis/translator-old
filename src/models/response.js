class Response {
  constructor(answer) {
    this.data = {
      response: answer,
    }
  }

  addError(error) {
    if (!this.data.errors) {
      this.data.errors = [];
    }
    this.data.errors = [...this.data.errors, error];
  }
  hasErrors() {
    return Array.isArray(this.data.errors) && this.data.errors.length > 0;
  }

  setExtraProperty(propName, data) {
    this.data[propName] = data;
  }
  getResponse() {
    if (this.hasErrors()) {
      return {
        errors: this.data.errors,
      };
    }
    return this.data;
  }
}

module.exports = Response;
