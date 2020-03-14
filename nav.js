const navSlider = () => {
    const menu = document.querySelector('.menu-bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click',()=>{
        // menu toggler
        nav.classList.toggle('nav-active');

        // animate navigation links
        navLinks.forEach((link) => {
            link.classList.toggle('link-animate');
        });

        // change menu bar
        menu.classList.toggle('cross');
    });

    // hide navigation again when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click',() => {
            nav.classList.remove('nav-active');
            menu.classList.remove('cross');
            navLinks.forEach((link) => {
                link.classList.toggle('link-animate');
            });
        });
    });

}

navSlider();

const stickyHeader = ()=>{

  const header = document.querySelector('.page-header');
  const sticky = header.offsetTop;

  window.addEventListener('scroll',()=>{
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

stickyHeader();
