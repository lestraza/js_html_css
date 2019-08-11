var linkID = location.search.split("=");
var id = linkID[linkID.length-1];


function getPersonID(id) {
    let personID;
    var link = "https://swapi.co/api/people/" + id + "/"
    fetch(link)
        .then(res => res.json())
        .then(res => render(res))        
        .catch(err => console.error(err));
}

function render(obj) {
    console.log(obj)
    var userInfoWrapper = document.querySelector(".user_info_wrapper");
    var markupInfo = "";
    var userImgContainer = document.querySelector(".img_container");
    var markupImg = `<img src="img/${id}.jpg" alt="People's picture">`;
    userImgContainer.innerHTML = markupImg; 
    for(var key in obj) {
        if(!Array.isArray(obj[key])){
            var row = '<div class="key '+ key +'">'+ key +":" +'</div>' + '<div class="value ' + key + '">'+ obj[key] +'</div>';
            markupInfo += row;
        }
    }
    userInfoWrapper.innerHTML = markupInfo;
       
}
getPersonID(id)



