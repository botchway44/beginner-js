
const container = document.querySelector("section")


const image = document.querySelector("img");
container.addEventListener("click",toggleOutside , {capture : true});
image.addEventListener("click",toggleInside );


function toggleInside(event){
    console.log("Inside");

}
function toggleOutside(event){
    console.log("OUTside")

    event.stopPropagation()

}