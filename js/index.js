

function getUser() {
   const user = document.getElementById('username').value;
   if(user == ""){
      
      alert('Please Input username');

   } else {

      axios({
         method: 'get',
         url: `https://api.github.com/users/${user}`
   
      }).then(res => console.log(res)).catch(err => console.error(err));
   
      document.querySelector('.search').style.display = "none";
      document.querySelector('.loader').style.display = "block";
   }

}