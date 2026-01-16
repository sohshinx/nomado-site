document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ローディング演出
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loaded');
    }, 2000);

    // 2. メニュー開閉制御 (NEW)
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    // リンクをクリックしたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });

    // 3. スクロール監視
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.fade-up');
    targets.forEach(target => observer.observe(target));
});