// This function will handle the event when drag starts

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.backgroundColor = " #e29bbd";
}

// This function will handle the event during the drag

function onDragOver(event) {
  event.preventDefault();
}

// This is a function which will run 2 seconds after any item is dropped to destination Container.

const back = function back() {
  document.getElementById("message").innerHTML =
    "Message : Drop some item to 2nd conatainer";
  document.getElementById("message").style.backgroundColor = "white";
  document.getElementById("message").style.color = "#18073d";
  document.getElementById("message").style.border = "2px solid #000000";
  document.getElementById("message").style.borderRadius = "10px";
};

// This function will handle the event after drop is completed

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);

  const destination = event.target;

  //This line of code will add the dragged element to the destination (2nd) container

  destination.appendChild(draggableElement);

  event.dataTransfer.clearData();

  // We are catching the element with id=message and changing that element to see a visual effect

  document.getElementById("message").innerHTML = "Item dropped successfully";
  document.getElementById("message").style.backgroundColor = "#18073d";
  document.getElementById("message").style.color = "white";
  document.getElementById("message").style.border = "2px solid #000000";
  document.getElementById("message").style.borderRadius = "10px";
  document.getElementById("message").style.padding = "3px";

  //A settimeout function which will run it's inside function after 2 seconds

  setTimeout(back, 2000);
}
