let container = document.getElementById("container");
let postlar = document.getElementById("Postlar");

const turnUsers = document.createElement("a");
//turnUsers.classList.add("btn")
turnUsers.textContent = "Kullanıcılara dön";
turnUsers.setAttribute("href", "index.html");
document.querySelector(".divButton").appendChild(turnUsers);





async function fetchPostDetails() {
    let userId = "";
  const params = new URLSearchParams(window.location.search);
  let postCode = params.get("posts");
  if(postCode===null || postCode === ""){
    userId = +prompt("1-10 arasında bir sayı seçiniz");
    postCode = userId
  }
  try {
    const response3 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${postCode}`
    );
    const data = await response3.json();
    data.map((element)=>{
        const commentsDiv = document.createElement("div");
        commentsDiv.innerHTML = `<div class="card" style="width: 18rem;">
             <div class="card-body">
             <ul class="list-group list-group-flush">
             <li class="list-group-item"><i class="fa-solid fa-user"></i>${element.userId}</li>
             <li class="list-group-item">${element.id}</li>
             <li class="list-group-item"><i class="fa-solid fa-house"></i>${element.title}</li>
             <li class="list-group-item">${element.body}</li>
         </ul>
             </div>
           </div>`;
           container.appendChild(commentsDiv);

    })
  } catch (error) {
    console.log(error);
  }
}
fetchPostDetails()



