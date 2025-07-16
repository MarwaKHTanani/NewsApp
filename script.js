const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const slider= document.getElementById('slider')
let current=0;

const showNews=(index)=>{
    const news = topNews[index];
    slider.innerHTML=`<img src="${news.urlToImage}" alt="${news.title}"/>
    <h3>${news.title}</h3>
    <p>${news.description}</p>`;
}
prev.addEventListener('click',()=>{
    current=(current+1)
    showNews(current)

})
showNews(current)