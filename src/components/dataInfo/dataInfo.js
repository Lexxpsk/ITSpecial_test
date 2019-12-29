export default new class DataInfo {
  
  state = {
    users: [],
    user: {}
  }

  setUsers(users) {
    this.state.users = users;
  }

  addDataEvent(){

    let loadAnimation = document.getElementById("loading");
      loadAnimation.style.display = "block";

    let table = document.querySelector("table");

    table.addEventListener("click", (e) => {
      
      let tr = e.target.closest("tr");

      if(tr && !tr.closest("thead")){

          let currentId = tr.children[0].innerHTML;
          let currentUser = this.state.users.find( (user) => user.id == currentId )
  
          let dataInfo = document.getElementById("dataInfo")
          dataInfo.children[0] ? dataInfo.querySelector("div").remove() : true ;
          
          dataInfo.insertAdjacentHTML('afterbegin',
          `
            <div>
              <p>Выбран пользователь <b>${currentUser.firstName + " " + currentUser.lastName}</b></p>
              <p>Описание</p>
              <textarea>${currentUser.description}</textarea>
              <p>Адрес проживания: <b>${currentUser.adress.streetAddress}</b></p>
              <p>Город: <b>${currentUser.adress.city}</b></p>
              <p>Провинция/штат: <b>${currentUser.adress.state}</b></p>
              <p>Индекс: <b>${currentUser.adress.zip}</b></p>
            </div>
          `)
      }
      setTimeout(() => loadAnimation.style.display = "none" , 1000)
    })
  }

  render () {

    let div = document.createElement("div");
    div.id = 'dataInfo';

    return div 
  }





}

