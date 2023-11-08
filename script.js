// 1. Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }

// 2. You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

function otherAngle(a, b) {
    return 180-(a+b);
  }

// 3. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    var result = "";
    for (var i = 1; i <= num; i++) {
        result += i + " sheep...";
    }
    return result;
  }

//4. Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
    if (employed && !vacation){ 
    return true;
    } else {
        return false;
    }};

    //5.  There is a bus moving in the city which takes and drops some people at each bus stop.

    // You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
    
    // Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
    
    // Take a look on the test cases.
    
    // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
    
    // The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
    
    // var number = function(busStops){
    //     return busStops[0][0] + busStops[0][1];
    //   }

    var number = function(busStops){
        var number = 0;
        for (var i = 0; i < busStops.length; i++) {
            number += busStops[i][0] - busStops[i][1];     
          }
           return number;};



