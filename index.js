/*
To deploy the task: `wt create index.js`
*/
module.exports = function (ctx, cb) {
  ctx.storage.get(function (error, data) {
    if (error) return cb(error)

    // check for the first call, if data is present
    data = data || {count: 0}

    var val = parseInt(ctx.query.dir)

    // increment or decrement the counter
    if (val && !isNaN(val)) {
      data.count = data.count + val

        // save the data
      ctx.storage.set(data, {force: 1}, function (error) {
        if (error) return cb(error)
        cb(null, {status: 200, data: data})
      })
    } else {
      // return the current stored data
      cb(null, {status: 200, data: data})
    }
  })
}
