const cardContainer = document.querySelector(".card-container");


for(let i=0; i<20; i++){
 const card =  generateCard(i+1);
 cardContainer.appendChild(card);
 card.addEventListener('click', removeCard)

}
function removeCard(event) {
  // event.target.remove();
  //this removes the element from the HTML
  event.target.style.display = 'none';
}

function generateCard(number){
  //   <div class="card-item">
  //   1
  // </div>

  const card = document.createElement("div");
  card.classList.add("card-item");
  card.innerHTML = number;
  
  return card
}

