
const images = [
  'https://images.unsplash.com/photo-1627483298089-52a5c0eb7258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
  'https://plus.unsplash.com/premium_photo-1678935939851-6d05f677b21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://plus.unsplash.com/premium_photo-1675270312837-933f396260a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80'
]

const previewr = document.querySelector("#previewer");
previewr.addEventListener("click", () =>{
  previewr.style.display = 'none';

})

const container = document.querySelector('.images-container');
console.log(container);

for(let image of images) {
    const img = document.createElement('img');
    img.src = image
    container.appendChild(img)

    img.addEventListener('click', previewImage)
}


function previewImage(event){
  console.log(event.target)
  
  
  previewr.style.display = 'flex';
  previewr.querySelector('img').src= event.target.src

}