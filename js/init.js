// 等待 particles.js 加载完成
const waitForParticles = () => {
    return new Promise((resolve) => {
        if (window.particlesJS) {
            resolve();
        } else {
            const script = document.createElement('script');
            script.src = './js/particles.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        }
    });
};

// 初始化应用
const init = async () => {
    await waitForParticles();
    const { initializeApp } = await import('./injector.js');
    initializeApp();
};

// 启动应用
window.addEventListener('load', init); 