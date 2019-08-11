var main = document.querySelector(".main");
var data;
function getPeople() {
    var link = "https://swapi.co/api/people/"
    fetch(link)
        .then(res => res.json())        
        .then(res => render(res))       
        .catch(err => console.error(err));
}

function render(obj) {
    var markup = "";
    //console.log(obj);
    obj.results.forEach(function(item, i, key) {
        var linkId = item.url.split('/');
        var id = linkId[linkId.length-2];
        var container = `<div class="container">
        <a class="item_name ${item.name}" href="people_id.html?id=${id}">${item.name}</a>
        </div>`        
        markup += container;
    })   
    main.innerHTML = markup;        
}

getPeople()
