
var ul = document.getElementById('list')
var li;
// console.log(ul);
var count = 0
// let count = Window.localStorage.setItem("count","0");
if(!count){
    window.localStorage.setItem("count","0");
}

var addButon = document.getElementById('add')
addButon.addEventListener('click', addItem)

var removeButon = document.getElementById('remove')
removeButon.addEventListener('click', removeItem)

var removeallbutton = document.getElementById('removeall')
removeallbutton.addEventListener('click', removeallitems)


function addItem( ) {
    var input = document.getElementById('input');
    var item = input.value;

    // ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

        if (item === '') {
        // var tag = document.createElement('p');
        // tag = document.createTextNode('Enter a Todo')
        // var element =document.getElementById('ptag')
        // element.appendChild(tag)
        // console.log('working'); 
        }else{
            ///create li
            li=document.createElement('li')
            //create checkbox
            var checkbox = document.createElement('input')
            checkbox.type = 'checkbox';
            checkbox.setAttribute('id','check');
            //create label
            var label = document.createElement('label')
            //add these elememts on to web page
        
            ul.appendChild(label);
            li.appendChild(checkbox);
            label.appendChild(textnode);
            li.appendChild(label);

            ul.insertBefore(li,ul.childNodes[0]);
            setTimeout(()=>{
                li.classname = 'visual';
            },2);

            input.value = '';
            window.localStorage.setItem(item,item);
            count += 1;
            window.localStorage.setItem("count",count);
            
        }  
}

    

function removeItem( ) {
    li = ul.children    
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }   
    }     
}

function removeallitems( ){
    li = ul.children    
    for (let index = 0; index < li.length; index++) {
       console.log( ul.remove(li[index]))           
    }  
}

