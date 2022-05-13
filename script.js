const ham = document.getElementById('ham');
const links = document.getElementById('popup');
const addPara = document.getElementById('addParagraph');
const short = document.getElementById('shorten');
const textArea = document.getElementById('textArea');
const error1 = document.getElementById('error1');

function check() {
    links.style.display = "block";
}
ham.addEventListener("click", check);
// ham.addEventListener("dblclick", remove);
// function remove() {
//     alert("HEllo");
// }
window.onclick = function(e) {
    if (e.target == links) {
      links.style.display = "none";
    }
  }

  let shortener = {
    fetchLink: function (link) {
      fetch(
      "https://api.shrtco.de/v2/shorten?url=" 
      + link
      ) 
      .then((response) => response.json())
      .then((data) => this.shortenLink(data.result));
    },
      shortenLink: function (data) {
         const {short_link}= data;
         const{original_link} = data;
          addPara.style.display= "block"
            let paragraph = document.createElement('p');
              paragraph.innerText = original_link;
              paragraph.classList.add ('paragraph-style');
              addPara.appendChild(paragraph);
                textArea.value = '';
              let code = document.createElement("div");
               code.innerText = short_link;
              code.classList.add ('div');
              code.style.color = "hsl(180, 66%, 49%)";
              paragraph.appendChild(code);
              let button = document.createElement("button");
                button.innerHTML = "Copy"
              button.classList.add ('copyButton');
              code.appendChild(button);
              button.addEventListener('click', function(){
                button.innerHTML = "Copied"
                button.style.backgroundColor = "hsl(257, 27%, 26%)";
              })
        }
  } 
  function search(){
    const input =  textArea.value;
    shortener.fetchLink(input);
};
  short.addEventListener('click',function() {
      if (textArea.value === '' || textArea.value == null) {
            error1.style.display = "block";
            textArea.style.border = "3px solid red";
          }
        else{
         search()    
          }
    })
    textArea.addEventListener("keyup", function (event) {
      if (textArea.value === '' || textArea.value == null) {
        error1.style.display = "block";
        textArea.style.border = "3px solid red";
      }
    else if 
      (event.key == "Enter") {
        search();
        }  
  });
  
  
    
           
            
          
                      