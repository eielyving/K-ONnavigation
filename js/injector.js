// 粒子配置
const config = {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffd1dc"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.7,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffd1dc",
            "opacity": 0.6,
            "width": 1.2
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": ["push", "repulse"]
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1,
                    "color": "#ff9999"
                }
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 8
            }
        }
    },
    "retina_detect": true
};

// 初始化粒子效果
const initParticles = () => {
    try {
        if (typeof window.particlesJS === 'function') {
            const particlesContainer = document.getElementById('particles-js');
            if (particlesContainer) {
                window.particlesJS('particles-js', config);
            }
        }
    } catch (error) {
        console.error('Failed to initialize particles:', error.message);
    }
};

// 初始化时间显示
const updateTime = () => {
    try {
        const timeElement = document.getElementById('time');
        if (timeElement) {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}`;
        }
    } catch (error) {
        console.error('Time update error:', error.message);
    }
};

// 初始化搜索框
const initializeSearch = () => {
    try {
        const searchInput = document.getElementById('searchtxt');
        if (searchInput) {
            const handleSearch = (event) => {
                try {
                    if (event.key === 'Enter') {
                        const searchText = searchInput.value.trim();
                        if (searchText) {
                            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
                        }
                    }
                } catch (error) {
                    console.error('Search handler error:', error.message);
                }
            };
            searchInput.addEventListener('keypress', handleSearch);
        }
    } catch (error) {
        console.error('Search initialization error:', error.message);
    }
};

// 导出初始化函数
export const initializeApp = () => {
    try {
        initParticles();
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);
        initializeSearch();
        
        // 清理函数
        return () => {
            clearInterval(timeInterval);
        };
    } catch (error) {
        console.error('App initialization error:', error.message);
    }
}; 