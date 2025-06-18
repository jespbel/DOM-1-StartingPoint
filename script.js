console.log("Hello! If you see this, the script is working.");

/*
- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.
- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

//Select the section with an id of container without using querySelector.
let containerElem = document.getElementById('container');
console.log(containerElem.innerHTML);

//Select the section with an id of container using querySelector.
const containerElemQS = document.querySelector("#container");
console.log(containerElemQS.innerHTML);

//Select all of the list items with a class of "second".
const secondClassItems = Array.from(document.getElementsByClassName("second"));
console.log(secondClassItems[0].innerHTML);
console.log(secondClassItems[1].innerHTML);

//Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdOLItem = document.querySelectorAll('ol li.third');
console.log(thirdOLItem[0].innerHTML);

//Give the section with an id of container the text "Hello!".
//create the text element
const newTextElem = document.createElement("text");
newTextElem.textContent = "Hello!"
containerElem.appendChild(newTextElem)

// Try rewriting this without using querySelector
const header = document.querySelector("#container");
console.log("header", header);
