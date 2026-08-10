function openTab(evt, tabName) {
    const panes = document.querySelectorAll('.tab-pane');
    const btns = document.querySelectorAll('.tab-btn');

    panes.forEach(p => p.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function openTab(evt, tabName) {
    const panes = document.querySelectorAll('.tab-pane');
    const btns = document.querySelectorAll('.tab-btn');

    panes.forEach(p => p.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// LÓGICA DAS ABAS (ÁREAS DE ATUAÇÃO) //

function openTab(evt, tabName) {
    const panes = document.querySelectorAll('.tab-pane');
    const btns = document.querySelectorAll('.tab-btn');

    panes.forEach(p => p.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


// SCROLL SUAVE NOS LINKS //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// MENU MOBILE HAMBÚRGUER //

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    
    if(mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuIcon.classList.toggle('toggle');
        });
    }

    
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.remove('toggle');
        });
    });
});

