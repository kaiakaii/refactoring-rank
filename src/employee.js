class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (!this.getOccupation(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  getOccupation(type) {
    return [
      'engineer',
      'manager',
      'salesman',
    ].includes(type);
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}
module.exports = {
  Employee
};
