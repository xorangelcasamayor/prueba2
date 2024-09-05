  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const sound = document.getElementById('navbarSound');

    navbarToggler.addEventListener('click', () => {
        sound.play();
    });
    console.log(navbarToggler);
    
});

