const tvs = document.querySelectorAll('.tv');

tvs.forEach(tv => {
    tv.addEventListener('click', () => {
        tv.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tv.style.transform = 'scale(1.05)';
        }, 1500);
    });
});