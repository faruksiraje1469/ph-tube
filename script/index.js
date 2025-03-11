function loadcategories (){

    // fetch the data
   fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")

   // convert promise to json
   .then (res => res.json())

   // send data to display 
   .then (data => displayCategoris(data.categories)) ;
}


function loadVideos () {
    fetch ("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then (res => res.json())
    .then (data => displayVideos(data.videos));
}


// "category_id": "1001",
// "category": "Music",



function displayCategoris (categories){
    // get the container
    const categoryContainer = document.getElementById("category-container");
    // Loop operation on Arry of object
     for (let cat of categories) {
        console.log(cat);
         // create an element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `
    // append the element
    categoryContainer.appendChild(categoryDiv);
     }
   

}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videos


}



loadcategories ();
loadVideos ()