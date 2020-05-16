// Get input elements
let filterInput = document.getElementById('filterInput');

//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //Get values of input
    let filterValue = filterInput.value.toUpperCase();
    
    // Get names ul
    let ul = document.getElementById('names');

    // Get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item lis
    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}