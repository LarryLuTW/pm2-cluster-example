const express = require('express')
const app = express()

function doSomething() {
  Array.from({ length: 100000 }).forEach(value => {
    return value * value * value
  })
}

app.get('/', (req, res) => {
  setTimeout(() => {
    doSomething()
    res.send('Hello World')
  }, 300)
})

app.listen(3000)

// Larry-MacBook-Pro ~/Desktop > loadtest -n 10000 -c 300 http://localhost:3000/
// [Fri Nov 10 2017 15:43:13 GMT+0800 (CST)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
// [Fri Nov 10 2017 15:43:18 GMT+0800 (CST)] INFO Requests: 3991 (40%), requests per second: 798, mean latency: 369.6 ms
// [Fri Nov 10 2017 15:43:23 GMT+0800 (CST)] INFO Requests: 5998 (60%), requests per second: 401, mean latency: 319.5 ms
// [Fri Nov 10 2017 15:43:28 GMT+0800 (CST)] INFO Requests: 6636 (66%), requests per second: 128, mean latency: 3430.1 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Target URL:          http://localhost:3000/
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Max requests:        10000
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Concurrency level:   300
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Agent:               none
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Completed requests:  10000
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Total errors:        0
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Total time:          19.655003921 s
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Requests per second: 509
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Mean latency:        587.2 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO Percentage of the requests served within a certain time
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO   50%      353 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO   90%      509 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO   95%      581 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO   99%      7350 ms
// [Fri Nov 10 2017 15:43:32 GMT+0800 (CST)] INFO  100%      7657 ms (longest request)

// loadtest -n 10000 -c 300 http://localhost:3000/
// [Fri Nov 10 2017 15:44:39 GMT+0800 (CST)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
// [Fri Nov 10 2017 15:44:44 GMT+0800 (CST)] INFO Requests: 3300 (33%), requests per second: 660, mean latency: 442.5 ms
// [Fri Nov 10 2017 15:44:49 GMT+0800 (CST)] INFO Requests: 7200 (72%), requests per second: 780, mean latency: 377.8 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Target URL:          http://localhost:3000/
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Max requests:        10000
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Concurrency level:   300
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Agent:               none
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Completed requests:  10000
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Total errors:        0
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Total time:          13.521391693 s
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Requests per second: 740
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Mean latency:        397.5 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO Percentage of the requests served within a certain time
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO   50%      380 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO   90%      452 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO   95%      501 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO   99%      530 ms
// [Fri Nov 10 2017 15:44:52 GMT+0800 (CST)] INFO  100%      554 ms (longest request)
