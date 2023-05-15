function paint(color) {
  const circle = document.getElementById("circleID");
  circle.style = `
        background-color:${color}; 
        border: 1px solid ${color};`;
}
