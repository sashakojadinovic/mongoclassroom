//comment
let users
(function(){
    fetch('http://localhost:3000/users')
    .then(
        (resp) => resp.json()
            .then(
                (data) => users = data
            )
    )
    .catch((e)=> console.log(e))
})();