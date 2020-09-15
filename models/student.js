const Sequelize = require('sequelize')
const mysql = require('mysql')
const dbConfig = require('../config/config')

var student = dbConfig.define('student', {
    roll_number: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    result_status: {
        type: Sequelize.STRING
    }
},
    {
        tableName: 'student'
    })
student.removeAttribute('id')
student.removeAttribute('createdAt')
student.removeAttribute('updatedAt')

module.exports = student