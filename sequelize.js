var Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://qbunt:regnad@localhost:32771/sequelize', {})

sequelize
    .authenticate()
    .then(() => {
        // console.log('Connection has been established successfully.');
    })
    .catch(err => {
        // console.error('Unable to connect to the database:', err);
    });


// const User = sequelize.define('user', {
//     firstName: {
//         type: Sequelize.STRING
//     },
//     lastName: {
//         type: Sequelize.STRING
//     }
// });
//
// User.sync().then(() => {
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

const Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
})

// Task.sync().then(()=>{
//     return Task.create({
//         title:'test task',
//         description:'test description',
//         deadline: new Date()
//     })
// })

Task.findAll().then(tasks => {
    console.log(tasks)
})
