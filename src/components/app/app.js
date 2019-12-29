import DataInfo from "~/components/datainfo/";
import Table from "~/components/table";
import { dataLoad } from "~/api/users.js";

export default new class App {

  state = {
    users: null
  }

  onload(){

    Table.sortEvent();
    Table.paginationEvent();
    DataInfo.addDataEvent();
    Table.searchEvent();

  }


  render() {

    return new Promise ((resolve, rej) => {
      dataLoad().then((users) => {
        Table.setUsers(users)
        DataInfo.setUsers(users)
        return users
      }).then(() => {
        let components = [];
        components.push(Table.render(), DataInfo.render());
        //console.log(components)
        resolve(components);
      })
      
    })
  }
}