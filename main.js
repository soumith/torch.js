var torch = require('./build/Release/torch');
var calculations = process.argv[2] || 100000000;

function runSync () {
    var start = Date.now();
    // Estimate() will execute in the current thread,
    // the next line won't return until it is finished
    var result = torch.hello(calculations);
    console.log('hello: ' + calculations + ' ' + result)
}

runSync()
