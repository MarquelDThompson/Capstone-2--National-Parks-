
//function that searches Parks via State location


function parksDropDownSelect(){
    //selecting park types from park type list 
      const parkType = document.getElementById("parksDropDown").value;
      const filterParkTypes = parkTypesArray.filter(park => park.name == parkType);
    
      document.getElementById("parkTypes").innerHTML = `
    
      <h1 class="app-title"> National Park Information</h1>
      ${filterparkTypesArray.map(mountainTemplate).join("")}
    
      
      `
    
    
    
    
    }

    
    //Choose from any National parks , not in use yet 
    function loadStatesDropDown() {
        var down = document.getElementById('statesDropDown');
               for (let i = 0; i < locationsArray.length; i++) {
                   var optn = locationsArray[i];
                   var el = document.createElement("option");
                   el.textContent = optn;
                   el.value = optn;
                   down.appendChild(el);
               }
           }
          
           loadStatesDropDown()

// Displays all National Parks available to choose in dropdown
    function loadData() {
        var down = document.getElementById('parksDropDown');
               for (let i = 0; i < nationalParksArray.length; i++) {
                   var optn = nationalParksArray[i].LocationName;
                   var el = document.createElement("option");
                   el.textContent = optn;
                   el.value = optn;
                   down.appendChild(el);
               }
           }
          
           loadData()


           //create function to return values from selected park
           function nationalParkTemplate(park) {
            return `
              <div class="park">
              <h4 class="parkLocationID">${park.LocationID}</h4>
              <h2 class="parkLocationName">${park.LocationName}</h2>
              <h2 class="parkAddress">${park.Address}<br>${park.City}, ${park.State} ${park.ZipCode}</h2>
              <h2 class="parkPhoneFax">Phone #: ${park.Phone} Fax #: ${park.Fax}</h2>
              <h4 class="parkLatLong">Lat: ${park.Latitude} Long: ${park.Longitude}</h4>
              <h4 class="parkLocation">Coordinates: ${park.Location.coordinates}</h4>
              <h4 class="parkLocationType">Type: ${park.Location.type}</h4>
              </div>
            `
          };

          function runParkTypeSearch() {

            const selectedParkTypeFromDropdown = document.getElementById("parkTypeList").value;
            const filterParkTypes = nationalParksArray.filter(park => park.LocationName.search(selectedParkTypeFromDropdown) != -1);
            document.getElementById("parkDiv").innerHTML = `${filterParkTypes.map(nationalParkTemplate).join("")}`;
        }
    
    