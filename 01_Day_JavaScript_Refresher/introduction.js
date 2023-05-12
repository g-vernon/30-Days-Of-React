console.log('Welcome to 30DaysofJavascript!');
const rectangle = {
    width: 20,
    height: 10,
  }
  
  let { width, height, perimeter = 200 } = rectangle
  console.log(width, height, perimeter) // 20, 10, undefined