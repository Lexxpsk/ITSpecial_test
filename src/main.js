import App from "~/components/app";


new Promise ((res, rej) => {
    let divApp = document.getElementById("app")
    App.render().then(components => {

        components.map((item, id) => {
            divApp.append(item)
        })
        App.onload()
    })
    
})


import 'bootstrap/dist/css/bootstrap.min.css';