
let userPageContainer = document.querySelector(".user_page_container");
for (i = 0; i < dataset.length; i++) {
    var item = dataset[i];
    var firstName = item.Name.split(" ")[0];
    var country = '';
    switch (item.Location.Country){
        case "United States": 
        country = 'us';
        break;
        case "United Kingdom":
        country = 'uk';
        break;
        case "Russia":
        country = 'ru';
        break;
        case "Ireland":
        country = 'ir';
        break;
    }
    var markup = ` <div class="user_page">
                        <a href="javascript:void(0)" class="user_pic"><img src="${item.PhotoUrl}" alt=""></a>
                        <div class="user_content">
                            <span class="user_name">${item.Name}, ${item.Age}</span>
                            <span class="location ${country}"><i></i>${item.Location.Country}, ${item.Location.City}, ${item.Location.Address}</span>
                            <div class="user_info_container"><a href="javascript:void(0)" class="about_user js-about" data-id="${item.UserId}">about me</a></div>
                            <a href="javascript:void(0)" class="send_message"><i></i>send ${firstName} a message</a>
                        </div>
                        <div class="clearfix"></div>
                    </div>`;
    userPageContainer.innerHTML += markup;
    
}

var abouts = document.querySelectorAll('.js-about');

for (i = 0; i < abouts.length; i++) {
    let aboutLink = abouts[i];
    
    aboutLink.addEventListener('click', function() {
        var id = aboutLink.dataset.id;
        
        var aboutLinkContainer = aboutLink.parentNode;
        for (i = 0; i < about.length; i++) {
            if (id == about[i].UserId) {
                aboutLinkContainer.innerHTML = about[i].About;
            }
        }
    })
}

//console.log(id);