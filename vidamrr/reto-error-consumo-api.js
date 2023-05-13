async function request() {
  try {
    const response = await fetch("http://api.com");
    const json = await response.json();
    // si json = {message: 'exito'}
    return json;
  } catch (error) {
    return { message: "error" };
  }
}

function process() {
  const data = request();
  console.log(data.message);
}

process();
