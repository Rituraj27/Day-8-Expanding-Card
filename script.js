'use strict';

const collapse = document.querySelectorAll('.collaps');

collapse.forEach((collapse) => {
  collapse.addEventListener('click', () => {
    removeCurrentActives();
    collapse.classList.add('active');
  });
});

function removeCurrentActives() {
  collapse.forEach((collapse) => {
    collapse.classList.remove('active');
  });
}
