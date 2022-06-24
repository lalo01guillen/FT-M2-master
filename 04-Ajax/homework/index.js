//let searchInput = document.getElementById("input");

const peticion = async() =>{   //id = 1
  
    const url = `http://localhost:5000/amigos/`;   //${id}
    const resp = await fetch(url);   //{ method: 'DELETE' }
    const data = await resp.json();
   
    showItems(data);
   
} 
const searchById = async (id) =>{
    const url = `http://localhost:5000/amigos/${id}`;   //
    const resp = await fetch(url);   //{ method: 'DELETE' }
    const data = await resp.json();

        searchItem(data);
}

const deleteById = async (id) =>{
    const url = `http://localhost:5000/amigos/${id}`;   //
    const resp = await fetch(url, { method: 'DELETE' });   
    //const data = await resp.json();

        deleteItem();
}

const searchItem = (data) =>{
    console.log(data.name)
    let nameSpan = document.getElementById("amigo");
    nameSpan.innerHTML = data.name;
    
}
const deleteItem = () =>{
    
    let nameSpan = document.getElementById("success");
    nameSpan.innerHTML = "el usuario fué eiminado";
    
}
const showItems = (data)=>{
    $("#lista").empty();
   // if(Object.entries($("#lista")[0].children).length === 0  ){
        data.map((item) => {
            let newLi = document.createElement("li");
            newLi.textContent = item.name;
            $('#lista').append(newLi);
        })
   // }
}
//lista

document.getElementById("boton").addEventListener("click", ()=> peticion(), false);
document.getElementById("search").addEventListener("click", ()=> searchById(document.getElementById("input").value), false);
document.getElementById("delete").addEventListener("click", ()=> deleteById(document.getElementById("inputDelete").value), false);







