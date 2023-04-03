const presentClosedUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
const presentOpenedUrl = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'

//get the image element on the screen
const image = document.createElement('img');
image.src = presentClosedUrl;

//append this to the dom

//select the title
const title = document.querySelector('h1');

document.body.appendChild(image);

document.body.appendChild(createImage('https://cdn.britannica.com/78/43678-131-84DFF99B/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'))

// add event listener to listen to mouse enter events
image.addEventListener('click',  (event) => {
 

  image.src = presentOpenedUrl;

  title.classList.add("active")
  title.classList.remove("inactive")

} )



// add event listener to listen to mouse leave events
image.addEventListener('mouseleave',  (event) => {
 
  console.log(event)
  console.log("I am clicked, clickced !!")
  image.src = presentClosedUrl
  
  title.classList.remove("active")
  title.classList.add("inactive")
} )

document.addEventListener("keydown", (event) => {
  console.log("Event", event)
})
document.addEventListener("click", (event) => {
  console.log("Document Event", event)
})



let opened = false;
setInterval(() => {
  if(opened){
    image.src = presentClosedUrl;
  }else{
    image.src = presentOpenedUrl;
  }

  opened = !opened;

  console.log("opening", opened);

}, 5000)


function createImage(url){
  const imgElem =  document.createElement('img')
  imgElem.src(url)

  return imgElem;
}

