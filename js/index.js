const search = document.querySelector('.search')
const notFound = document.querySelector('.not-found')
const loader = document.querySelector('.loader')

function getUser() {
   const user = document.getElementById('username');
   if(user.value == ""){

      alert("Input Username!")

   } else {
      setTimeout(function() {
         axios.get(`https://api.github.com/users/${user.value}`).then(res => console.log(res)).catch(function (error) {
            if (error.response) {
              show(error.response.status);
            }
          });
   
         search.style.display = "none";
         loader.style.display = "block";
      }, 400);
   }
}

function show(res) {
   if(res == 404) {

      loader.style.display = "none";
      notFound.style.display = "block";
   }
}

function back() {
   document.querySelector('#username').value = "";
   notFound.style.display = "none";
   search.style.display = "block"
}