let content = document.querySelector(".content");
const elementNumber = 10
// getData()
async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();

  return data;
}

renderData(0, elementNumber);

function renderData (startElement, Number){
  getData().then( data => {
    data = data.splice(startElement, Number);
    console.log(data);
    let str = ""
    data.forEach( item => {
      str += `<p>${item.id}. ${item.title}</p>`
    })
    content.innerHTML = str
    })

  }

  let paginationLink = document.querySelectorAll(".pagination__link");

  paginationLink.forEach( (e) => {
    e.addEventListener("click", shownumber);
  })

  function shownumber() {
    let number = parseInt(this.textContent);
    renderData(number*10 - 10, elementNumber);
  }
