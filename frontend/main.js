window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();    
})

const functionapi='';

const getVisitCount = () => {
    let count = 1;
    fetch(functionapi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called FunctionAPI...!!");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}