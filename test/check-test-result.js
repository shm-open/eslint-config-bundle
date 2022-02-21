var expectedErrors = 27;
var expectedWarnings = 3;

// read from stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');

var outputs = '';
process.stdin.on('data', function (chunk) {
    outputs += chunk;
});

process.stdin.on('end', function () {
    // (xx errors, xx warnings)
    var result = /\((\d+)\serrors,\s(\d+)\swarnings\)/.exec(outputs);
    if (!result) {
        process.exit(1);
    }
    if (Number(result[1]) !== expectedErrors || Number(result[2]) !== expectedWarnings) {
        console.log('expected (' + expectedErrors + ' errors, ' + expectedWarnings + ' warnings)');
        console.log('actual ' + result[0]);
        process.exit(1);
    }
    console.log('PASS');
    process.exit(0);
});
