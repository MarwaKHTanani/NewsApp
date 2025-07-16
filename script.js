window.addEventListener("DOMContentLoaded", () => {
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const slider= document.getElementById('slider')
let current=0;

const showNews=(index)=>{
    const news = topNews[index];
    slider.innerHTML = `
    <img src="${news.urlToImage}" alt="${news.title}" class="w-full h-64 object-cover rounded-t-lg"/>
    <div class="p-4 bg-white">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">${news.title}</h3>
      <p class="text-gray-700 text-sm">${news.description}</p>
    </div>
  `;
}
prev.addEventListener('click',()=>{
    current= current===0? topNews.length-1: current-1
    showNews(current)

})
next.addEventListener('click',()=>{
    current= current===topNews.length-1?0: current+1
    showNews(current)

})
showNews(current)
})