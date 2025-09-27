document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-style');
    const div = document.querySelector('.div-style');

    button.addEventListener('click', () => {
        button.classList.toggle('active-btn');
        button.textContent = button.classList.contains('active-btn') ? 'Active!' : 'Button';
    });

    div.addEventListener('click', () => {
        div.classList.toggle('active-div');
        div.textContent = div.classList.contains('active-div') ? 'You clicked on me!' : 'Click me!';
    });
});
