var Queue = require('queue-that-callback')
var Symbol = require('symbol-key')

var privateQueues = Symbol('falcor-array-queue')

module.exports = function getModelPrefixQueue (model, prefix) {
  var queues = model[privateQueues] = model[privateQueues] || {}

  var key = prefix.join('.')
  if (!(key in queues)) {
    queues[key] = Queue()
  }

  return queues[key]
}
