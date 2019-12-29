export { dataLoad };

function dataLoad(){

   return new Promise((resolve, reject) => {
      let loadAnimation = document.getElementById("loading");
      loadAnimation.style.display = "block";

      let url = "http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}"
      
      let req = new XMLHttpRequest();

      req.open("GET", url, false)
      req.send();

      if (req.status != 200) {
         loadAnimation.style.display = "none"
         //setTimeout(() => loadAnimation.style.display = "none" , 1000)
         
         reject(req.status + ': ' + req.statusText);
       } else {
         //loadAnimation.style.display = "none"
         setTimeout(() => loadAnimation.style.display = "none" , 1000)
         //console.log(JSON.parse(req.response))

         resolve(JSON.parse(req.response));
       }
   });
 
}

