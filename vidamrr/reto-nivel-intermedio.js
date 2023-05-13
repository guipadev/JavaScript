function getData() {
  return new Promise((resolve, _) => {
    resolve("hola");
  });
}

function initializeData() {
  return function () {
    return getData().then((data) => "datos inicializados");
  };
}

async function init() {
  console.log(await initializeData());
}

init(); // [Function (anonymous)]
