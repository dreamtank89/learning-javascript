// sum of array integer includding negative number

calculateTotal(a,b) {

    let arr = [a,b]
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
               
    console.log(arr.reduce(reducer));
}   
