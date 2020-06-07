//pull data from the website
var dataURL =  'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php';
var JSONrequest = new XMLHttpRequest()
        JSONrequest.open('GET', dataURL, true);
        JSONrequest.responseType = 'json';
        JSONrequest.send();

        JSONrequest.onload = function () {
                
            //if data the data is pulled successfully
            if (JSONrequest.status >= 200 && JSONrequest.status < 400) {
                var employees = JSONrequest.response;
                employees = JSON.parse(JSON.stringify(employees));
                console.log(employees);
                console.log(employees[1]);
                
                //serch bar logic
                var searchBar = document.forms[0];
    
                searchBar.onsubmit = searchForm;
                
                //tried to add search bar, but keep getting errors, not sure how to fix
                function searchForm() {
                    var employeeSearch = document.getElementById("searchBar");
                    //searchBar.addEventListener("keyup", e=> ){
                        //const searchString = e.target.value;
                        //console.log(searchString);
                    //});
                    
                    
                }
                
                //create flebox container
                var flexContainer = document.createElement("div");
                flexContainer.setAttribute("class", "flexContainer");
                
                //for loop each employee
                for(var employee in employees) {
                    console.log(employees[employee]);
                    
                    //create element for the frame containing each person's information
                    var employeeFrames = document.createElement("div");
                    employeeFrames.setAttribute("class", "teamMembers");
                    
                    //add place for the photos
                    var employeePhotos = document.createElement("div");
                    employeePhotos.setAttribute("id", "memberImages");
                    
                    //pull photos from the site and add to frame
                    var photos = document.createElement("img");     
                    photos.setAttribute("src", "http://sandbox.bittsdevelopment.com/code1/employeepics/"+employees[employee].employeeid+".jpg");  
                    photos.setAttribute("alt", "photo of employee"); photos.setAttribute("id", "teamPhotos");
                    
                    employeePhotos.appendChild(photos);
                    employeeFrames.appendChild(employeePhotos);
                    
                    //pull employee names and add to frame
                    var employeeNames = document.createElement("h2");
                    employeeNames.setAttribute("id", "teamNames");   
                    employeeNames.innerHTML = employees[employee].employeefname + " " + employees[employee].employeelname;
                    employeeFrames.appendChild(employeeNames);
                    
                    //pull employee bios and add to frame
                    var employeeBios = document.createElement("p");
                    employeeBios.setAttribute("id", "teamBios");
                    employeeBios.innerHTML = employees[employee].employeebio;

                    employeeFrames.appendChild(employeeBios);
                    
                    //if statement for if the employee is featured to add the crown
                    if(employees[employee].employeeisfeatured === "1") {
                        var employeeFeatured = document.createElement("img");
                        employeeFeatured.setAttribute("src", "images/crown.png");
                        employeeFeatured.setAttribute("alt", "Crown for featured employees");
                        employeeFeatured.setAttribute("id", "teamFeatured");                       
                        employeeFrames.appendChild(employeeFeatured);   
                        console.log("featured");
                    } else {
                        console.log("not featured");
                    }
                    
                    //code makes all roles the same colour, was unable to make it the different colours
                    //tried to pull the data from the roles JSON like with the employees but that made nothing show up
                    //pull 
                    
//                    var rolesURL = 'http://sandbox.bittsdevelopment.com/code1/fetchroles.php';
//                    var request = new XMLHttpRequest()
//                        request.open('GET', rolesURL, true);
//                        request.responseType = 'json';
//                        request.send();
//
//                        request.onload = function () {
//                            
//                            //if the data is pulled successfully
//                            if (request.status >= 200 && request.status < 400) {
//                                var roles = request.response;
//                                roles = JSON.parse(JSON.stringify(roles));
//                                console.log(roles);
//                                console.log(roles[1]);
//                                
                                var rolesBox = document.createElement("div");
                                rolesBox.setAttribute("class", "rolesBox");
//                                
//                                
//                                for(var role in roles) {
                                    
                                    for(var i = 0; i < employees[employee].roles.length; i++) {
                                        var roleColours = document.createElement("style");
                                        roleColours.innerHTML = ".teamRoles {background-color:"+employees[employee].roles[i].rolecolor+";}";
                                        var employeeRoles = document.createElement("p");
                                        employeeRoles.setAttribute("class", "teamRoles");
                                        employeeRoles.innerHTML = employees[employee].roles[i].rolename;

                                        employeeRoles.appendChild(roleColours);
                                    
                                        //append to box so it's at the bottom
                                        rolesBox.appendChild(employeeRoles);
                                        employeeBios.appendChild(rolesBox);
                                    }
                                
                           
                    //attaching everything to HTML div
                    flexContainer.appendChild(employeeFrames);
                    var div = document.getElementById("empty");
                    document.body.insertBefore(flexContainer, div);
                }//employees for loop
                
                }//JSONrequest if
//                } else {
//                    console.log("error");
                }//JSONrequest
//referenced code from Vitaliy when shared in class
//referenced code from https://www.jamesqquick.com/blog/build-a-javascript-search-bar
//referenced code from https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/        
        
        
  