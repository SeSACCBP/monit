export const header_area = document.querySelector('.header-list');
export const back_area = document.querySelector('.header-back');

header_area.addEventListener('mouseover', function () {
  back_area.classList.add('active');
});
header_area.addEventListener('mouseout', function () {
  back_area.classList.remove('active');
});
