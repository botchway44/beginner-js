
const images = [
  'https://images.unsplash.com/photo-1627483298089-52a5c0eb7258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
  'https://plus.unsplash.com/premium_photo-1678935939851-6d05f677b21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://plus.unsplash.com/premium_photo-1675270312837-933f396260a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80'
]

let selectedImage = 0;
const previewer = document.querySelector("#previewer");

//clicking on the previewer should remove the popup
previewer.addEventListener("click", hidePreviewer)

const container = document.querySelector('.images-container');
console.log(container);

for(let i=0; i<images.length; i++) {
   
    //create an image and set the source of the image to the current image in the array
    const img = document.createElement('img');
    img.src = images[i];
    img.dataset.index = i;

    console.log(img.dataset)
    container.appendChild(img)

    //set click event to open model / previewer 
    img.addEventListener('click', previewImage)
}


function previewImage(event){
  console.log(event.target)
  console.log(window.scrollY)
  
  //set the previewetr to flex to make it visible in the window
  previewer.style.display = 'flex';

  //moves the previewer to start from the top of the window
  previewer.style.top = window.scrollY+"px";

  //prevents the body of the page from scrolling
  document.body.style.overflowY = "hidden";

  //picks the image that was clicked and set the src of the clicked image to the previewer's image
  const imageSelected = event.target;
  previewer.querySelector('img').src= imageSelected.src;


  let currentIndex = parseInt(imageSelected.dataset.index) || 0;
  //event listener to move keyboard left and right
  document.addEventListener('keydown', (event)=>{
    console.log(currentIndex % images.length)

    if(event.code === "ArrowLeft"){
            //TODO : Prevent image from wrapping
      changePreviewedImage((--currentIndex) % images.length, images)
    }
    else if(event.code === "ArrowRight"){
      //TODO : Prevent image from wrapping
      changePreviewedImage((++currentIndex % images.length), images)
    }else if(event.code === "Escape"){
        hidePreviewer()
    }
  })

  // document.addEventListener('keyup', (event)=>{
  //   console.log("KEYUP :::",event)
  // })


  // document.addEventListener('keypress', (event)=>{
    
  //     console.log("PRESS :::",event)
  // })

}


function changePreviewedImage(index = 0, images = []) {
   previewer.querySelector('img').src= images[index];
}

function hidePreviewer() {
    previewer.style.display = 'none';
      //prevents the body of the page from scrolling
  document.body.style.overflowY = "scroll";
}