const btn = document.querySelector("button");
// If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly — we need to put it inside an anonymous function so that it isn't in the immediate scope and therefore isn't called immediately. Now it will not be called until the button is clicked.
btn.addEventListener("click", () =>
displayMessage("Brian: Hi there, how are you today?", "chat"),
// or use this:
// displayMessage("Your inbox is almost full — delete some mails", "warning"),
);


function displayMessage(msgText, msgType) {
    const body = document.body;

    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);
    
    const msg = document.createElement("p");
    msg.textContent = msgText;
    panel.appendChild(msg);
    
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);
    
    closeBtn.addEventListener("click", () =>
      panel.parentNode.removeChild(panel),
    );

    if (msgType === "warning") {
        msg.style.backgroundImage = "url(icons/warning.png)";
        panel.style.backgroundColor = "red";
      } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(icons/chat.png)";
        panel.style.backgroundColor = "aqua";
      } else {
        msg.style.paddingLeft = "20px";
      }
      
}



