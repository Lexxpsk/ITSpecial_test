

export default new class Search {

    searchEvent(){
        let table = document.querySelector("table");
        let srWrap = document.querySelector("#search input")
        let srBtn = document.getElementById("btnSearch")
        
        srBtn.addEventListener("click" , (e) => {
            var regPhrase = new RegExp(srWrap.value, 'i')
            var flag = false;

            for (var i = 1; i < table.rows.length; i++) {
                flag = false;
                for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
                    flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
                    if (flag) break;
                }
                if (flag) {
                    table.rows[i].style.display = "";
                } else {
                    table.rows[i].style.display = "none";
                }

            }
        })
    }

    render = (table) => {

        table.insertAdjacentHTML("beforeend", 
        `
            <div id="search">
                <input class="form-control" type="text" placeholder="Введите данные для поиска...">
                <button class="btn btn-success" id="btnSearch">Найти</button>
            </div>
        `)
        return table
    }
}
