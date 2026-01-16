const XamIQEliteEngine = {
    // Encrypted Module Store (Base64)
    vault: {
        mth: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzE=",
        rsn: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzI=",
        eng: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzM=",
        sgk: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzY=",
        geo: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzU=",
        hin: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzQ=",
        pol: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzc=",
        bio: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIyNzg=",
        che: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIzOTU=",
        his: "aHR0cHM6Ly9zcGlkeXVuaXZlcnNlcndhLnZlcmNlbC5hcHAvY291cnNlLzM5OS9zdWJqZWN0LzIzOTk="
    },

    init() {
        this.cacheDOM();
        this.lockSecurity();
        this.handleSplash();
        this.bindUserInteractions();
        this.startNotificationEngine();
    },

    cacheDOM() {
        this.loader = document.getElementById('app-preloader');
        this.cards = document.querySelectorAll('.node-card');
        this.gateway = document.getElementById('secure-gateway');
        this.tapSfx = document.getElementById('tap-sfx');
        this.themeBtn = document.getElementById('theme-toggle');
        this.waToast = document.getElementById('wa-inbuilt-toast');
        this.secToast = document.getElementById('sec-toast');
    },

    lockSecurity() {
        // Disable Right Click & Inspect Combinations
        document.addEventListener('contextmenu', e => e.preventDefault());
        window.addEventListener('keydown', e => {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
                this.triggerAlert();
                e.preventDefault();
                return false;
            }
        });
    },

    handleSplash() {
        window.onload = () => {
            setTimeout(() => {
                this.loader.style.opacity = '0';
                setTimeout(() => this.loader.style.display = 'none', 800);
            }, 2500);
        };
    },

    bindUserInteractions() {
        this.cards.forEach(card => {
            card.onclick = () => {
                const token = card.dataset.token;
                const target = atob(this.vault[token]);
                this.executeSecureJump(target);
            };
        });

        this.themeBtn.onclick = () => {
            this.playTap();
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
        };

        this.waToast.onclick = () => {
            this.playTap();
            window.location.href = 'https://whatsapp.com/channel/0029VbAvIUo2ZjCu4eWjOw1T';
        };
    },

    executeSecureJump(url) {
        this.playTap();
        this.gateway.style.display = 'flex';

        // Bypassing Refused Connect logic:
        // Since iframes are blocked by the target server, we perform a 
        // Same-Tab Masked Redirection. This ensures the content loads 100%.
        setTimeout(() => {
            const meta = document.createElement('meta');
            meta.name = "referrer";
            meta.content = "no-referrer";
            document.head.appendChild(meta);

            // Using replace to keep browser history clean
            window.location.replace(url);
        }, 2800);
    },

    startNotificationEngine() {
        const show = () => {
            this.waToast.classList.add('active');
            setTimeout(() => this.waToast.classList.remove('active'), 4000);
        };
        setTimeout(show, 6000);
        setInterval(show, 3600000); // 1 Hour
    },

    triggerAlert() {
        this.secToast.style.top = '25px';
        setTimeout(() => this.secToast.style.top = '-70px', 2500);
    },

    playTap() {
        this.tapSfx.currentTime = 0;
        this.tapSfx.play().catch(() => {});
    }
};

XamIQEliteEngine.init();