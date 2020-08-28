const employeeTest = require('ava')
const {Employee} = require('../src/employee')

employeeTest('employeeTest case1. Should not throw exception when new a Employee given name and right type', t => {
    t.notThrows(() => new Employee('tom', 'engineer'))
})
