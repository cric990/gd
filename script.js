const _XAM_ELITE_CORE_ = {
    vault: {
        maths: "https://spidyuniverserwa.vercel.app/course/399/subject/2271",
        reasoning: "https://spidyuniverserwa.vercel.app/course/399/subject/2272",
        english: "https://spidyuniverserwa.vercel.app/course/399/subject/2273",
        sgk: "https://spidyuniverserwa.vercel.app/course/399/subject/2276",
        geo: "https://spidyuniverserwa.vercel.app/course/399/subject/2275",
        hin: "https://spidyuniverserwa.vercel.app/course/399/subject/2274",
        pol: "https://spidyuniverserwa.vercel.app/course/399/subject/2277",
        bio: "https://spidyuniverserwa.vercel.app/course/399/subject/2278",
        che: "https://spidyuniverserwa.vercel.app/course/399/subject/2395",
        his: "https://spidyuniverserwa.vercel.app/course/399/subject/2399"
    },

    settings: {
        tapEnabled: true,
        sessionSecure: true,
        maskDuration: 2800
    },

    init() {
        this.cacheResources();
        this.enforceSecurityEngine();
        this.initializeInterface();
        this.bootloaderSequence();
        this.activeNotificationEngine();
    },

    cacheResources() {
        this.mainLoader = document.getElementById('app-init');
        this.themeToggle = document.getElementById('theme-btn');
        this.subjectNodes = document.querySelectorAll('.course-card');
        this.portalLayer = document.getElementById('portal-mask');
        this.tapSfx = document.getElementById('tap-sfx');
        this.waToast = document.getElementById('wa-toast');
        this.secAlert = document.getElementById('sec-alert');
    },

    enforceSecurityEngine() {
        document.addEventListener('contextmenu', event => event.preventDefault());

        window.addEventListener('keydown', (event) => {
            const forbiddenKeys = [123, 73, 74, 67, 85];
            if (forbiddenKeys.includes(event.keyCode) || (event.ctrlKey && event.shiftKey) || event.metaKey) {
                this.triggerIntrusionAlert();
                event.preventDefault();
                return false;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) {
                this.triggerIntrusionAlert();
                e.preventDefault();
            }
        });

        if (this.settings.sessionSecure) {
            setInterval(() => {
                const devtools = /./;
                devtools.toString = () => {
                    this.triggerIntrusionAlert();
                };
            }, 500);
        }
    },

    bootloaderSequence() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.mainLoader.style.opacity = '0';
                setTimeout(() => {
                    this.mainLoader.style.display = 'none';
                }, 800);
            }, 2000);
        });
    },

    initializeInterface() {
        this.subjectNodes.forEach(node => {
            node.addEventListener('click', () => {
                const reference = node.getAttribute('data-ref');
                const destination = this.vault[reference];
                this.executePremiumRedirect(destination);
            });
        });

        this.themeToggle.addEventListener('click', () => {
            this.playActionSfx();
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', targetTheme);
            this.themeToggle.innerHTML = targetTheme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        });

        this.waToast.addEventListener('click', () => {
            this.playActionSfx();
            window.open('https://whatsapp.com/channel/0029VbAvIUo2ZjCu4eWjOw1T', '_blank');
        });
    },

    executePremiumRedirect(targetUrl) {
        this.playActionSfx();
        this.portalLayer.style.display = 'flex';

        setTimeout(() => {
            const redirectLink = document.createElement('a');
            redirectLink.href = targetUrl;
            redirectLink.rel = 'noreferrer';
            
            Object.assign(document.body.style, {
                opacity: '0',
                transition: 'opacity 1s ease',
                backgroundColor: '#000'
            });

            setTimeout(() => {
                window.location.replace(targetUrl);
            }, 500);

        }, this.settings.maskDuration);
    },

    activeNotificationEngine() {
        const dispatchToast = () => {
            this.waToast.classList.add('active');
            setTimeout(() => {
                this.waToast.classList.remove('active');
            }, 4500);
        };

        setTimeout(dispatchToast, 5000);
        setInterval(dispatchToast, 3600000);
    },

    triggerIntrusionAlert() {
        this.secAlert.style.top = '25px';
        setTimeout(() => {
            this.secAlert.style.top = '-70px';
        }, 3000);
    },

    playActionSfx() {
        if (this.settings.tapEnabled) {
            this.tapSfx.currentTime = 0;
            this.tapSfx.play().catch(() => {});
        }
    }
};

const _XAM_PERFORMANCE_MONITOR_ = {
    check() {
        const start = performance.now();
        return () => {
            const end = performance.now();
            return end - start;
        };
    }
};

Object.freeze(_XAM_ELITE_CORE_.vault);
_XAM_ELITE_CORE_.init();