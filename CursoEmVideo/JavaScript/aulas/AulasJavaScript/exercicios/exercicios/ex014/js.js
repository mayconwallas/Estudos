let res = document.querySelector('.res')
let data = new Date() 
function hora() {
    res.innerHTML = (`<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`)

}