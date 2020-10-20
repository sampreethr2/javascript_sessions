/*console.log("Hello")
alert('I am loaded now...')*/
if(confirm("Do you want to proceed?")==true){
    document.getElementById('proceed').innerHTML = 'go forward';
} else {
    document.getElementById('proceed').innerHTML = 'go back';
}

var age = prompt('Please Enter your Age: ');
if (age>=18){
    //document.write('you are valid to vote');
    document.getElementById('voteStatus').innerHTML='you are valid to vote';
} else {
   // document.write('Cannot vote');
    document.getElementById('voteStatus').innerHTML='you are not valid to vote';
}

