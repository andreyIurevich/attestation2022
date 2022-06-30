(async () => {
  const module = await import('./utils.js');
  console.log(module.default(5, 4));
})()
