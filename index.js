/*
To deploy the task: `wt create index.js`
*/
module.exports = function (ctx, cb) {
  ctx.storage.get(function (error, data) {
    if (error) return cb(error)

    // check for the first call, if data is present
    data = data || {count: 0}

    // if I want to read only the value
    if (ctx.query.get) {
      cb(null, {status: 200, data: data})
      return
    }

    // increment the counter
    data.count++

    // save the data
    ctx.storage.set(data, {force: 1}, function (error) {
      if (error) return cb(error)
      cb(null, {status: 200, data: data})
    })
  })
}
