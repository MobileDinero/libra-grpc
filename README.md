[![npm](https://img.shields.io/npm/v/libra-grpc.svg)](https://www.npmjs.com/package/libra-grpc)
[![Join the chat](https://img.shields.io/discord/590507340399116288.svg)](https://discord.gg/XyS25F6)

# Libra gRPC

A lightweight JavaScript library for Libra

#### Node.js
To install Libra gRPC on Node.js, open your terminal and run:
```
npm install libra-grpc --save
```

### Usage
```js
var libra = require('libra-grpc');

// Init gRPC client
var client = new libra.Client('ac.testnet.libra.org:8000');

// Get account state
var address = '435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4';
var params = { address: Buffer.from(address, 'hex') };
client.request('get_account_state', params, function(err, result) {
  console.log(err, result);
});
```
[See more examples](/test/test.js)

### Promises

You can also use Libra gRPC with promises by promisifying Libra gRPC with
[bluebird](https://github.com/petkaantonov/bluebird) as in:

```js
var libra = require('libra-grpc');
bluebird.promisifyAll(libra.Client.prototype);
```

It'll add a *Async* to all libra functions (e.g. return client.requestAsync().then())
client.request('get_account_state', params, function(err, result) {
  console.log(err, result);
});
```js
// So instead of writing client.request('get_peers', null, cb); you have to write:
return client.requestAsync('get_account_state', params).then(function(result) {
  console.log(result);
});
```

### Getting help

If you believe you're experiencing a bug with or want to report incorrect documentation, open an issue on our issue tracker. For a more real-time avenue of communication, check out the Discord or Telegram servers. There you'll find community members who can help answer questions about development questions.

* [Join us on Telegram](https://t.me/joinchat/DAQb4RSNpqEok3p-QdmaKQ)
* [Join us on Discord](https://discord.gg/XyS25F6)

## License

[MIT](LICENSE).
