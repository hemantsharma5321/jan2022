// var outer=[
//     [1,2,3,4],
//     [4,6,9,2],
//     [3,5,8,5],
//     [7,4,5,3]
// ]
// function matrixsum(outer){
// var sum=0;

// for(let i=0;i<outer.length;i++){
//     inner=outer[i];
//     for(let j=0;j<inner.length;j++){
//         if(i==j){
//             sum=sum+inner[i][j];
//         }
//     }
// }
// return sum;
// }


function manipulateArray(arr, fun){
    var result=[];
    for(i=0;i<arr.length;i++){
        result.push(fun(arr[i]));
    }
    return result;
}

function mulBY4(num){
return num*4;
}
function add9(num){
    return num+9;
}

var arr=[1,2,3,4,5];
console.log(manipulateArray(arr,mulBY4));
console.log(manipulateArray(arr,add9));