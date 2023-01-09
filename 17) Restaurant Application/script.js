let id = 'no'


//DOM SELECTOR'S
let name = document.getElementById('name-el')
let date = document.getElementById('date-el')
let time = document.getElementById('time-el')
let count = document.getElementById('count-el')
let email = document.getElementById('email-el')
let booking = document.getElementById('btn-book')

let output = document.getElementById('output-container')
selectNotes()

//FUNCTION

booking.onclick = function(){
    let object = {
        'name': name.value,
        'date': date.value,
        'time': time.value,
        'count': count.value,
        'email': email.value
    }

    if(name.value == '' && email.value == ''&& date.value == '' && time.value == '' && count.value == ''){
        alert('Complete the field')
    }else{
        if(id == 'no'){
            let array = getJsonData() //Json parse to array
            if(array == null){ // First array creat
                let field = [object]
                setJsonData(field) 
            }else{ //From 2nd push into the array
                array.push(object)
                setJsonData(array)
            }
        }
        //selectNotes()
    }
}

function selectNotes(){
    let array = getJsonData()
    if(array!=null){ //Checking the array is > 0
        let html = ''
        for(let i=0; i<array.length; i++){ 
            html += `<div class= "card">
                        <div class="output-el">
                        <h2>Email:  ${array[i].email}</h2>
                        <h2>Name: ${array[i].name}</h2>
                        <h3>Date: ${array[i].date}</h3>
                        <h3>Time: ${array[i].time}</h3>
                        <h3>No of Guest: ${array[i].count}</h3>
                        </div>
                    </div>`
        }
        output.innerHTML = html // Display the result in inner html 
    }
}

function getJsonData(){ // function for localStorage get Item
	let value = JSON.parse(localStorage.getItem('Reservation-List'))
	return value //Returning the get Item
}

function setJsonData(value){ // Function for localStorage srt item parameter is value to store in ls
	localStorage.setItem('Reservation-List', JSON.stringify(value))
}