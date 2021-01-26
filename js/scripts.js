document.querySelector('.humburger').addEventListener('click', function(e) {
    e.preventDefault();
    // this.classList.toggle('is-active');
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.querySelector('.body').classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.querySelector('.body').classList.add('body-active');
    }
})