// Variable and Keyword (var , let , const)

// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c = “School”
  var userName1 = "Build"
  console.log(userName1)

  let userName2 = "Madara"
  console.log(userName2)
  
  const userName3 = "Script"
  console.log(userName3)

// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
  userName1 = "Script"
  console.log(userName1);
  
  userName2 = "Build" // 
  console.log(userName2);
  
  // userName3 = "Nothing" // const never change
  console.log(userName3);
  
// 3. Create a variable inside curly braces using let and log it outside.
  {
    var age = 18
    console.log(age)
  }
  console.log(age);
  
  {
    let place = "US"
    console.log(place)
  }
  // console.log(place); //Cann't call outside the curly bracket.
  
// 4. Predict output before running.

// Write 3 examples where const is useful (like PI, baseURL, etc.)