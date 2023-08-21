const searchForm=document.getElementById("search-form")
const searchBox=document.getElementById("search")
const searchResult=document.getElementById("searchresult")
const searchMore=document.getElementById("searchmore")
const acesskey="f_GR7yIgkmU2XpF2eenEv0lws68pPhJ0UMfgARUgUUw";
const resetBtn=document.getElementById("reset");
let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acesskey}&per_page=12`;
const response=await fetch(url);
const data=await response.json();
if(page===1){
    searchResult.innerHTML="";
}
const results = data.results;
// console.log(data);
 results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})
searchMore.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});
resetBtn.addEventListener("click",()=>{
    searchBox.value="";
    searchResult.innerHTML="";
    searchMore.style.display="none";
});
searchMore.addEventListener("click",()=>{
    page++;
    searchImages();
});

