const Sum = (A,n) =>{
    let s = 0;

    if(n===1){
        return A[0]
    }else{
        s = Sum(A, n-1) // recurse on all but last
        s = s + A[n-1] //add last element

    }
    return s
}

let total = Sum([10,20,30,40],4)
console.log(total)