const containerWrapper = document.getElementById("containerWrapper")
const container3d = document.getElementById("container3d")
const newBox = document.getElementById("newBox")
const highlightItem = document.getElementById("highlightItem")
const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const productBox3 = document.getElementById("productBox3")
const productBox4 = document.getElementById("productBox4")
const productBox5 = document.getElementById("productBox5")

function getDetail(nomor) {
    console.log ('product: ', nomor)
    newBox.style.display = "block"
    container3d.style.display = "none"
    containerWrapper.style.display = "none"
    highlightItem.style.display = "none"

    if (nomor === 1) {
        productBox1.style.display = "flex"
    } else if ( nomor === 2) {
        productBox2.style.display = "flex"
    } else if ( nomor === 3) {
        productBox3.style.display = "flex"
    } else if ( nomor === 4) {
        productBox4.style.display = "flex"
    } else if ( nomor === 5) {
        productBox5.style.display = "flex"
    }
}

// tombol back

document.querySelector('#back')
    .addEventListener('click', () => {
        window.location.reload(true);
    })

// tombol back end