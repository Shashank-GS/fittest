// alert("shashank");
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');
  const onClickSidebar = document.querySelector('.sectioncontainer');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    onClickSidebar.classList.toggle('sectioncontainer-sidebar');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {

        link.style.animation = 'navLinkFade 0.25s ease forwards 0.4s';
      }
    });



    // burger animate
    burger.classList.toggle('toggle');

  });
}
navSlide();

document.querySelector('.switchmode').addEventListener('click', function () {
  var x = document.querySelector('.switchmode');
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  } else {
    x.innerHTML = "Light Mode";
  }
  document.body.classList.toggle('lightmode');
});







