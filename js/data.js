var myArray = [
    {'name':'Mila', 'age':'32', 'recruited':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'recruited':'10/14/1990'},
    {'name':'Tawanda', 'age':'25', 'recruited':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'recruited':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'recruited':'10/31/1995'},
    {'name':'John', 'age':'30', 'recruited':'11/10/1989'},
    {'name':'Joe', 'age':'32', 'recruited':'10/1/1989'},
    {'name':'Madaliso', 'age':'29', 'recruited':'10/14/1990'},
    {'name':'Patric', 'age':'25', 'recruited':'11/29/1993'},
    {'name':'Tinashe', 'age':'27', 'recruited':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'recruited':'10/31/1995'},
    {'name':'Dennis', 'age':'25', 'recruited':'11/29/1993'},
    {'name':'Matthew', 'age':'24', 'recruited':'10/31/1995'},
    {'name':'Shaws', 'age':'25', 'recruited':'11/29/1993'},
]


const addPlayer = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let player = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        recruited: document.getElementById('recruited').value
    }
    myArray.push(player);
    //document.forms[0].reset(); // to clear the form for the next entries
    document.querySelector('form').reset();

    alert('Added Player')

    //saving to localStorage
    localStorage.setItem('PlayerList', JSON.stringify(myArray));
    location.reload();
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addPlayer);
});

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].recruited}</td>
                  </tr>`
        table.innerHTML += row


    }
}


