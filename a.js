let prevArray = [12,45,65,15,85,12];
let sortedArray =[];
let count = 0;
for(let i=0; i<prevArray.length; i++){
    count++;

    let a = prevArray[i];
    let b = prevArray[count];
    let greater = 0;
    if(i==0){
       if(a>b){
        greater = a;
        sortedArray.unshift(a);
       }
       else{
        greater = b;
        sortedArray.unshift(b);
       }
    }
    else{
        if(greater>b){
            greater = b;
            sortedArray.unshift(greater);
        }
        else {
            sortedArray.unshift(b);
        }
    }


}
console.log(sortedArray);