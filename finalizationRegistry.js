/*
const registry = new FinalizationRegistry((value) => {
  console.log('-> print value: ', value);
});

(function () {
  const obj = {};

  registry.register(obj, "Object deleted");
})();

(async () => {
  try {
    await Promise.any([Promise.reject("Error 1")]);
  } catch (e) {
    console.log('-> print error ', e.errors);
  }
})()
*/

console.log('-> finalizationRegistry.js module');


