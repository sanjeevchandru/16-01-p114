document.write("78.to test whether an array of integers of length 2 does not contain 1 or 3"+"<br>");
function test78(arr){
    if(arr[0]==1 || arr[1]==1 || arr[0]==3 ||arr[1]==3){
        return false;
    }
    return true;
}
document.write("The array : [1,3], ans:"+test78([1,3])+"<br>");
document.write("The array : [2,4], ans:"+test78([2,4])+"<br><br>");