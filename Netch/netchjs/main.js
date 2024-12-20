
let getBagInventoryContainer = document.getElementById("Bag-Inventory-Container");
let getPlayerStatsContainer = document.getElementById("Player-Stats-Container");


function bagButton(){
 if(getBagInventoryContainer.style.display === "flex"){
    getBagInventoryContainer.style.display = "none";
 } else {
    getBagInventoryContainer.style.display = "flex";
 }

 if(getPlayerStatsContainer.style.display === "flex"){
    getPlayerStatsContainer.style.display = "none";
 } else {
    getPlayerStatsContainer.style.display = "flex";
 }
}

