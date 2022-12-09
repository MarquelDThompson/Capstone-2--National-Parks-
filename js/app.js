//  submitButton.addEventListener('click', async () => {

//  });



function mountainTemplate(mountain) {
 let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
  
  return `
    <div class="mountain">
    <img class="mountain-photo" src="images/${mountain.img}">
    <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
    <h4 class="mountain-desc">${mountain.desc} </h4>
    <p><strong>Effort:</strong> ${mountain.effort}</p>
    <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
    <strong>Sunrise:</strong> ${mySunrise}
    </div>

    `;
}

//mointain cards 
function mountainCards(){
  

  document.getElementById("mountains").innerHTML = `
    <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
    ${mountainsArray.map(mountainTemplate).join("")}
    <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
  `;  
   }

async function getSunsetForMountain(lat, lng){
  // let response = await fetch(
  // `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  // let data = await response.json();
  // return data;
  }


    
 function loadData() {
     var down = document.getElementById('mountainsDropDown');
            for (let i = 0; i < mountainsArray.length; i++) {
                var optn = mountainsArray[i].name;
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                down.appendChild(el);
            }
        }
       
        loadData()


   
//function for mountians drop down, using mountains array 
  
    function dropDownSelect(){
    
    
      // selecting mountiain from drop down
    const selectedMountainFromDropdown = document.getElementById("mountainsDropDown").value;
    // filtering from selected mountain
    const filtermountainsArray = mountainsArray.filter(mountain => mountain.name == selectedMountainFromDropdown);
    
    document.getElementById("mountains").innerHTML = `
    <h1 class="app-title"> Mountain Information</h1>
    ${filtermountainsArray.map(mountainTemplate).join("")}
    <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
  `

  }

//function that searches Parks type and location


function parksDropDownSelect(){
//selecting park types from park type list 
  const parkType = document.getElementById("parksDropDown").value;
  const filterParkTypes = parkTypesArray.filter(park => park.name == parkType);

  document.getElementById("parkTypes").innerHTML = `

  <h1 class="app-title"> National Park Information</h1>
  ${filterparkTypesArray.map(mountainTemplate).join("")}

  
  `




}


