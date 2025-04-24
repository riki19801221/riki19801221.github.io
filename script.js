function addItem() {
    input = document.getElementById("userInput");
    text = input.value;

    if (text !== "") {
      li = document.createElement("li");
      li.innerHTML = text + ' <button onclick="this.parentNode.remove()">Delete</button>';

      document.getElementById("myList").appendChild(li);
      input.value = "";
    }
  }
