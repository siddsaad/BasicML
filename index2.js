const brain = require('brain.js');

const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category

}));

network.train(trainingData, {
    iterations: 20
});

const output = network.run('I fixed the powersupply');

console.log(`Category: ${output}`);