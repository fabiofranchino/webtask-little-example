# Simple WebTask.io example for fun

WebTask.io is both great and simple to use lambda-based service.
Need some server-side task without even thinking about a server?
This sample is for you :)

To deploy a function is simple as write: `wt create index.js`

To debug a function, add --watch parameter to get live updates and real-time log:
`wt create index.js --watch`

Basically, I wanted to keep track of a counter, every time you call this service, the counter gets updated.

To check the response:

Read the current value:

  https://wt-22ff33159e39bef33dfaf2157e9be49e-0.run.webtask.io/webtask-little-example

Increment or decrement the counter:

  https://wt-22ff33159e39bef33dfaf2157e9be49e-0.run.webtask.io/webtask-little-example?dir=v

where `v` is a number

Few words about it [https://fabiofranchino.com/blog/webtask-little-example](here)