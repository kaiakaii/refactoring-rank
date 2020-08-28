const employeeTest = require('ava')
const {Employee} = require('../src/employee')

employeeTest('employeeTest case1. should not throw exception when new a Employee given name and right type', t => {
    t.notThrows(() => new Employee('tom', 'engineer'))
})
employeeTest('employeeTest case2. should throw exception when new a Employee given name and wrong type', t => {
    t.throws(() => new Employee('Kitty', 'test'))
})
