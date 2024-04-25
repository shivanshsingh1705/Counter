const countValue=document.querySelector('#counter');
const increment =()=>{
    //get the value from UI
    let value= parseInt(countValue.innerText);

    //update value
    value++;

    //set the value onti UI
    countValue.innerText=value;
}
const decrement =()=>{
    //get the value from UI
    let value= parseInt(countValue.innerText);

    //update value
    value--;

    //set the value onti UI
    countValue.innerText=value;
}