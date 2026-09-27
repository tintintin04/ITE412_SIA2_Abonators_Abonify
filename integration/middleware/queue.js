let messageQueue = [];

function enqueue(message) {
  messageQueue.push(message);
}

function dequeue() {
  return messageQueue.shift();
}

function isEmpty() {
  return messageQueue.length === 0;
}

module.exports = {
  enqueue,
  dequeue,
  isEmpty
};