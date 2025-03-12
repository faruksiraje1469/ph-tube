function loadcategories() {

    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        // convert promise to json
        .then(res => res.json())

        // send data to display 
        .then(data => displayCategoris(data.categories));
}


function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos));
}
// console.log(data.videos);

// "category_id": "1001",
// "category": "Music",

const loadCategoryVideos = (id) => {

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.category));

}

function displayCategoris(categories) {
    // get the container
    const categoryContainer = document.getElementById("category-container");
    // Loop operation on Arry of object
    for (let cat of categories) {
        console.log(cat);
        // create an element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
    <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `
        // append the element
        categoryContainer.appendChild(categoryDiv);
    }


}




const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        videoContainer.innerHTML = `
         <div class="col-span-full text-center flex flex-col justify-center py-20 items-center gap-5">
            <img class="" src="./assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold ">Ooops!! Sorry, There is no content here.</h2>
         </div>`;
        return;
    }

    videos.forEach((video) => {
        console.log(video);

        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
           <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-60 object-cover rounded-t-md"
                src="${video.thumbnail}"
                 alt="Shoes" />
                 <span class="absolute bottom-2 right-2 text-white bg-black text-sm px-1 rounded">3hrs 56 min ago</span>
              </figure>
             
                <div class=" py-5 flex gap-3 px-0">
                  <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                  </div>

                  <div>
                    <h2 class="text-2xl font-semibold">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-400"> ${video.others.views}</p>
                  </div>
              </div>
          </div>

        
        `;

        videoContainer.appendChild(videoCard);



    });


};



loadcategories();
// loadVideos();