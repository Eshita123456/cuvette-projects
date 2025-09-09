
const thumbnails = document.querySelectorAll('.thumbnail');
const fullsizes = document.querySelectorAll('.fullsize');

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function () {
    for (let j = 0; j < fullsizes.length; j++) {
      fullsizes[j].style.opacity = 0;
    }
    fullsizes[i].style.opacity = 1;
  });
}


