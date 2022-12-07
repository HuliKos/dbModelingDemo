// Lan created:

let createPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function phoneNumber (arr) {
    let areaCode = []
    let middlePart = []
    let lastDigits = []
    
    for(i=0; i<3; i++){
        areaCode.push(arr[i])
    }
    for(i=3; i<6; i++){
        middlePart.push(arr[i])
    }
    for(i=7; i<arr.length; i++){
        lastDigits.push(arr[i])
    }
    
    let finalAreaCode = "(" + areaCode.join("") + ")"
    let finalmiddlePart = middlePart.join("")
    let finalLastDigits = lastDigits.join("")
    let phoneNumber = finalAreaCode + finalmiddlePart + "-" + finalLastDigits
    return phoneNumber
}

console.log(phoneNumber(createPhoneNumber))

// Solution 1:

function createPhoneNumber1(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

console.log(createPhoneNumber1(createPhoneNumber))
  
  // Solution 2:
  //brute force below
  function createPhoneNumber2(numbers){
  return"(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
  }
  
console.log(createPhoneNumber2(createPhoneNumber))