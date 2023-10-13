const h1=document.getElementById("h1");
const starts=document.getElementById("starts");
const stops=document.getElementById("stops");
function sayhello(){
    const date=new Date();
    h1.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
let id;
starts.addEventListener("click",()=>{
    id=setInterval(sayhello,1000);
});
stops.addEventListener("click",()=>{
    clearInterval(id);
});