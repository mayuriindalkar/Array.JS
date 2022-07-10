// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements = []
// for(var i of list1)
    // for (var b of list2){
    // if (!list2.includes(i)){
        // if (!list1.includes(b)){
            // elements.push(i)
            // elements.push(b)
        // }
    // }
// }
// console.log(elements)


// var list1=[1,2,3,4,5,6];
// var list2=[1,2,3,0,7,8];
// elements=[];
// for (var i of list1){
//     if (!list2.includes(i)){
//         elements.push(list1[i],list2[i])
//     }
// }
// console.log(elements)


// var a=Number('
// console.log(a)


// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list2){
//     if (!list1.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);

// console.log(4 || 5)
// console.log(3 && 4)


// var list1=[1,2,3,4,5,8];
// var list2=[1,2,3,0,7,8,9];
// var k=[];
// for (i=0; i<list1.length; i++){
//     if (!list2.includes(list1[i]) && (!list1.includes(list2[i]))){
//         k.push(list1[i],list2[i])  
//     }
// }
// console.log(k)

// var list1=[1,2,3,9,7,8,6,5];
// var list2=[1,2,3,4,5,7];
// var element=[]
// for (var i of list1){
//     for (var j of list2)
//     if (!list2.includes(i) && !list1.includes(j)){
//         element.push(i,j)
//     }
// }
// console.log(element)


var list1=[1,2,3,5,7,8]
var list2=[1,2,5,6,9,12,10,45]
var list=(list1,list2)=>{
    var res=[];
    for (let i=0; i<list1.length; i++){
        if (list2.indexOf(list1[i])=== -1){
            res.push(list1[i]);
        }
    };
    for (let j=0; j<list2.length; j++){
        if (list1.indexOf(list2[j])=== -1){
            res.push(list2[j]);
        }
    }
    return res;
}
console.log(list(list1,list2))