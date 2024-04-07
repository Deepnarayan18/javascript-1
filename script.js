var isstatus = document.querySelector("h5");
var add = document.querySelector("#add-friend-btn"); 
var removed = document.querySelector("#remove-btn") 
var statusMessageContainer = document.getElementById("status-message"); 

add.addEventListener("click", function(){
    // Check if the current status is not already "friends"
    if (isstatus.innerHTML !== "friends") {
        // Update the status to "friends"
        isstatus.innerHTML = "friends"; 
        isstatus.style.color = "green";

        // Remove any existing status messages
        statusMessageContainer.innerHTML = '';
    }
}); 

add.addEventListener("click", function(){
  isstatus.innerHTML = "friends"; 
  isstatus.style.color = "green"
}); 

removed.addEventListener("click",function(){ 
    isstatus.innerHTML = "stranger"; 
    isstatus.style.color = "blue";  

    statusMessageContainer.innerHTML = '';

    statusMessageContainer.insertAdjacentHTML('beforeend', '<p>From friends, you became stranger again.</p>');
});


