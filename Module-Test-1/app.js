function message(){
    let fName = document.getElementById('first-name').value
    let lName = document.getElementById('last-name').value
    let email = document.getElementById('email-address').value
    let response = document.getElementById('reason').value

    console.log(fName, lName, email, response)

    if(fName!="" && lName!="" && email!=""){
        alert('Success!!');
    }
    e.preventDefault()
}