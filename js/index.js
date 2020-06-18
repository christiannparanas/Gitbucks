const search = document.querySelector('.search')
const notFound = document.querySelector('.not-found')
const loader = document.querySelector('.loader')
const found = document.querySelector('.found')


function getUser() {
   const user = document.getElementById('username');
   if(user.value == ""){

      alert("Input Username!")

   } else {
      setTimeout(function() {
         axios.get(`https://api.github.com/users/${user.value}`).then(res => show(res)).catch(function (error) {
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

   } else if(res.status == 200){

      loader.style.display = "none";
      console.log(res.data)
      document.querySelector('.img').src = res.data.avatar_url;
      document.querySelector('.name').innerHTML = res.data.name;
      document.querySelector('.login').innerHTML = "@" + res.data.login;
      document.querySelector('.loc').innerHTML = res.data.location;

      let dati = res.data.created_at;
      let strDate = new Date(dati);
      let det = strDate.toDateString()
      var aaa = det.split(" ");
      document.querySelector('.join').innerHTML = `Joined ${aaa[1]} ${aaa[2]} ${aaa[3]}`

      document.querySelector('.repo-count').innerHTML = res.data.public_repos;
      document.querySelector('.follower-count').innerHTML = res.data.followers;
      document.querySelector('.following-count').innerHTML = res.data.following;

      found.style.display = "block";
   }
}

function back() {
   found.style.display = "none";
   document.querySelector('#username').value = "";
   notFound.style.display = "none";
   search.style.display = "block"
}