username=localStorage.getItem('USERNAME')

function storerecord(){
    car={
        id:brand.value,
        name:price.value,
        key:key.value,
      
    }
    if(car.brand==""|| car.price==""||car.key==""){
        alert("fill input fields")
    }
    else{

    if(car.brand in localStorage){
    alert("alredy exist")

    }else{
        localStorage.setItem(car.brand,JSON.stringify(car))
        alert("employee added successfully")
    }
}
}
// retrive 
function Retriverecord(){
  
    let key1=key.value
    let car=JSON.parse(localStorage.getItem(key1))
    result.innerHTML=`<div class="card" style="width:18rem; height:5rem">
    <div class="card-body">
     <h5 class="card-title">Retrive record</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employe id:${car.id}</li>
      <li class="list-group-item">employe name:${car.name}</li>
    </ul>
  </div>`
  }
 
  
  document.getElementById('deleteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const key = document.getElementById('deleteKey').value;
    localStorage.removeItem(key);
    alert(`Data with key '${key}' deleted successfully!`);
    this.reset();
  });
  
  document.getElementById('clearAll').addEventListener('click', function () {
    localStorage.clear();
    alert('All records cleared!');
  });
