require('../src/db/mongoose')
const Task = require('../src/models/task.js')

// Task.findByIdAndDelete('5eaa08cd1df2972e16c0cb68').then((task) => {
//     console.log(task)
//     return Task.countDocuments({"completed" : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({"completed" : false})
    return count
}

deleteAndCount('5eaac1f5f08a3a4e1fa41624').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})