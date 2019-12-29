import Search from "~/components/search/";

export default new class Table {
  state = {
    users: [],
    allRows: null,
    maxRowCount: 25
  };

  setUsers(users) {
    this.state.users = users;
  }
  searchEvent(){
    Search.searchEvent()
  }

  sortEvent() {
    let table = document.querySelector("table");

    let sortArrowUp = true;
    table.addEventListener("click", e => {
      let tr = e.target.closest("tr");

      if (tr && tr.closest("thead")) {
        let currentHeaderId = [...tr.children].findIndex(
          item => item.innerHTML == e.target.innerHTML
        );

        sortArrowUp = !sortArrowUp;

        let sortedRows = Array.from(table.rows)
          .slice(1)
          .sort((rowA, rowB) => {
            if (sortArrowUp) {
              return rowA.cells[currentHeaderId].innerHTML >
                rowB.cells[currentHeaderId].innerHTML
                ? 1
                : -1;
            } else {
              return rowA.cells[currentHeaderId].innerHTML >
                rowB.cells[currentHeaderId].innerHTML
                ? -1
                : 1;
            }
          });

        table.tBodies[0].append(...sortedRows);
      }
    });
  }

  paginationEvent() {
    let pag = document.getElementById("pagination");
    let table = document.querySelector("table");
    let newMaxRowCnt;

    pag.addEventListener("click", e => {
      if (e.target.id == "arrNext") {
        newMaxRowCnt = this.newMaxRow(this.state.maxRowCount + 25);
      } else if (e.target.id == "arrPrev") {
        newMaxRowCnt = this.newMaxRow(this.state.maxRowCount - 25);
      } else {
        console.log(new Error(er));
      }
      
      let rowMass = [...table.tBodies.item(0).children]
      for(let ind in rowMass){
        rowMass[ind].remove()
      }

      table.tBodies.item(0).append(...this.state.allRows.slice(newMaxRowCnt - 25, newMaxRowCnt));
    });
  }

  newMaxRow(newCnt) {
    let minRow = 25;
    let maxRow = this.state.users.length;
    return this.state.maxRowCount = Math.max(minRow, Math.min(newCnt, maxRow));
  }
  

  render = () => {
    let table = document.createElement("table");
    table.createTBody();
    table.createTHead();

    let trsBody = this.state.users.map((user, id) => {
      let tr = document.createElement("tr");
      tr.id = id;
      for (let key in user) {
        if (key != "adress" && key != "description") {
          tr.insertAdjacentHTML("beforeend", `<td>${user[key]}</td>`);
        }
      }
      return tr;
    });
    this.state.allRows = trsBody;

    let trHead = document.createElement("tr");
    trHead.insertAdjacentHTML(
      "afterbegin",
      `<th>id</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>email</th>
      <th>phone</th>`
    );

    table.tHead.append(trHead);
    table.tBodies.item(0).append(...trsBody.slice(0, 25));
    table.insertAdjacentHTML(
      "beforeend",
      `
    <div id="pagination">
      <button class="btn btn-primary" id="arrPrev">prev</button>
      <button class="btn btn-primary" id="arrNext">next</button>
    </div>
    `
    );
    //return table;
    return Search.render(table);
    
  };
};
