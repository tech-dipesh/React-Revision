The difference is in how you're handing Promises.

If you're using await to handle the Promise then you wrap it in a try/catch. Think of await as a way to make asynchronous operations semantically similar to synchronous operations (at least within the context of the function in which it's being awaited, consuming code notwithstanding).

But if you're not using await and are instead handling the Promise by appending .then() to it then you'd append a .catch() to that chain to catch failures from within the asynchronous operation.

Because a try/catch isn't going to catch an exception that happens from within the asynchronous operation if that operation isn't awaited.