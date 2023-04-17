const { EventEmitter } = require('events');
const ev = new EventEmitter();


ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message);
})
ev.emit('saySomething', "Churupita");
ev.emit('saySomething', "Maycon");
ev.emit('saySomething', "Camila");
