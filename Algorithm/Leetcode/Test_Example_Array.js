var player = { score: 1, name: 'Jeff' };

var newPlayer = Object.assign({}, player, { score: 2 }); //修改score为 2
console.log(player); //{ score: 1, name: 'Jeff' }
console.log(newPlayer); //{ score: 2, name: 'Jeff' }

var newplay = {...player, score: 2 };
console.log(newplay); //{ score: 2, name: 'Jeff' }