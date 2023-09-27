const EventEmitter = require('events');

// Создание экземпляра EventEmitter
const myEmitter = new EventEmitter();

// // Регистрация слушателя события
// myEmitter.on('sayHello', () => {
//   console.log('Hello, world!');
// });

// // Генерация события
// myEmitter.emit('sayHello');

// // // Регистрация слушателя события с параметрами
// myEmitter.on('greet', name => {
//   console.log(`Hello, ${name}!`);
// });

// // // Генерация события с параметром
// myEmitter.emit('greet', 'Alice');

// myEmitter.on('multipleListeners', () => {
//   console.log('Listener 1');
// });

// myEmitter.on('multipleListeners', () => {
//   console.log('Listener 2');
// });

// // // Генерация события
// myEmitter.emit('multipleListeners');

module.exports = { myEmitter };
