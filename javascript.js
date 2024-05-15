//overlay //popupbox
let popupoverlay=document.querySelector(".overlay")
let popupbox=document.querySelector(".popupbox")
function show()
{
    popupbox.style.display="block"
    popupoverlay.style.display="block"
}
function closepopupbox(event)
{
    popupbox.style.display="none"
    popupoverlay.style.display="none"
    event.preventDefault()
}
