// sign up and log in form modal open and close 
document.querySelector('.close').addEventListener( 'click', function() {
    document.querySelector('.bg-modal').style.display = "none";
});
document.querySelector('.lgn').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

// mobile nav responsiveness#

document.querySelector('.ham-menu').addEventListener('click', function() {
    document.querySelector('.nav').style.display = "flex";
});

document.querySelector('.cancel').addEventListener('click', function() {
    document.querySelector('.nav').style.display = "none";
});

