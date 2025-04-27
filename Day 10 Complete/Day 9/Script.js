  let string = "";
  let buttons = document.querySelectorAll(".buttons");

  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
        string = eval(string);
        document.querySelector("input").value = string;
      }
      else if (e.target.innerHTML == 'C') {
        string = "";
        document.querySelector("input").value = string;
      }
      else if (e.target.innerHTML == '%') {
        string = (eval(string) / 100).toString();
        document.querySelector("input").value = string;
      }
        
      else if (e.target.innerHTML == 'Del') {
        string = string.slice(0,-1);
        document.querySelector("input").value = string;
     }
       else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    });
  });


  // else if(e.target.innerhtml == 'C'){
  // 	string = "";
  // document.queryselctor('input').value = string;
  // }
  // else {
  // console.log(e.target);
  // string = string + e.target.innerhtml;
  // document.queryselctor('input').value = string;

  // }
  // }
  // })
  // let string = "";
  // let buttons = document.querySelctorsall('.button');
  // Array.from(buttons).forEach((button)=>{
  // button.addrvrntlidtner('click', (e)=>{
  // 	if(e.target.innerhtml == '='){
  // 	string = rval(string);
  // document.queryselctor('input').value = string;
  // }