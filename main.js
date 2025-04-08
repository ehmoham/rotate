let photosrc = document.getElementById('srcph');
let dis = document.getElementById('viewsec');

function fileread() {
    let rf = new FileReader();
    rf.onload = function () {
        dis.innerHTML = `<img class="im" src="${rf.result}">`
    }
    rf.readAsDataURL(photosrc.files[0]);
}

function rotate() {
    let m = document.getElementById('x').value;
    dis.style.transform = `rotate(${+m + 'deg'})`
}