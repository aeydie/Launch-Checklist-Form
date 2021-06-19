// Write your JavaScript code here


   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const destination = document.getElementById("missionTarget");
      destination.innerHTML = `
         <h2>Mission Destination</h2>
        <ol>
        <li>Name: ${json[3].name}</li>
        <li>Diameter: ${json[3].diameter}</li>
        <li>Star: ${json[3].star}</li>
        <li>Distance from Earth: ${json[3].distance}</li>
        <li>Number of Moons: ${json[3].moons}</li>
        </ol>
        <img src="${json[3].image}">
        `;
      });
   });
 
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatusInput = document.getElementById("pilotStatus");
      let copilotStatusInput = document.getElementById("copilotStatus");
      let fuelStatusInput = document.getElementById("fuelStatus");
      let cargoStatusInput = document.getElementById("cargoStatus");
      let faultyItemsStatus = document.getElementById("faultyItems");
      let newlaunchStatus = document.getElementById("launchStatus");

      if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("\nMake sure to enter valid information for each field!");
         } else if (pilotNameInput.value ===  "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("\nAll fields are required!");
         }

         if (fuelStatusInput.value < 10000) {
            faultyItemsStatus.style.visibility = "Visible";
            pilotStatusInput.innerHTML = `${pilotNameInput.value} is ready for launch`;
            copilotStatusInput.innerHTML =`${copilotNameInput.value} is ready for launch`;
            newlaunchStatus.innerHTML = "Shuttle not ready for launch!";
            newlaunchStatus.style.color = "red";
         } else {
            newlaunchStatus.innerHTML = "Shuttle is ready to launch";
            newlaunchStatus.style.color = "green";
         }
      
            if (cargoMassInput.value > 10000) {
               faultyItemsStatus.style.visibility = "Visible";
               cargoStatusInput.innerHTML = "There is too much cargo for the shuttle to take off";
               newlaunchStatus.innerHTML = "Shuttle not ready for launch";
               newlaunchStatus.style.color = "red";
            } else {
               newlaunchStatus.innerHTML = "Shuttle is ready to launch";
               newlaunchStatus.style.color = "green";
         }
      });  
   });

  
   
      
    
     

{/* /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */}
