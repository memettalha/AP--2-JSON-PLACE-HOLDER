cards = document.getElementById("cards");

async function info(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data)
  const yaz = data.map(function (info) {
    newCard(info)
  });
}


function newCard(user){
  cards.innerHTML +=`
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.id}</h5>
    <p class="card-name">Name: ${user.name}</p>
    <p class="card-name">Username: ${user.username}</p>
    <p class="card-name">Email: ${user.email}</p>
    <p class="card-name">Telephone: ${user.phone}</p>
    <p class="card-name">Address: ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}${user.address.geo.lat}${user.address.geo.lng}</p>
    <p class="card-name">website: ${user.website}</p>
    <p class="card-name">Company: ${user.company.name} ${user.company.catchPrase}${user.company.bs}</p>
    <a href="post.html?posts=${user.id}">Gönderileri görüntüle</a>
  </div>
</div>` 

}
info()