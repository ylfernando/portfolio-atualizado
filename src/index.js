  /* ---------- Theme toggle ---------- */
      (function () {
        const root = document.documentElement;
        const btn = document.getElementById("themeToggle");
        const saved = localStorage.getItem("theme");
        if (saved) root.setAttribute("data-theme", saved);

        btn.addEventListener("click", function () {
          const current = root.getAttribute("data-theme");
          const next = current === "dark" ? "light" : "dark";
          root.setAttribute("data-theme", next);
          localStorage.setItem("theme", next);
        });
      })();

      /* ---------- Mobile menu ---------- */
      var hamBtn = document.getElementById("hamBtn");
      var mobileMenu = document.getElementById("mobileMenu");

      hamBtn.addEventListener("click", function () {
        var open = mobileMenu.classList.toggle("open");
        hamBtn.classList.toggle("open", open);
        hamBtn.setAttribute("aria-expanded", String(open));
      });

      function closeMobile() {
        mobileMenu.classList.remove("open");
        hamBtn.classList.remove("open");
        hamBtn.setAttribute("aria-expanded", "false");
      }

      /* ---------- Back to top ---------- */
      (function () {
        var btn = document.getElementById("backToTop");
        window.addEventListener("scroll", function () {
          btn.classList.toggle("visible", window.scrollY > 400);
        }, { passive: true });
        btn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      })();

      /* ---------- Hero waveform bars ---------- */
      (function () {
        var waveform = document.getElementById('heroWaveform');
        if (!waveform) return;
        var heights = [14,20,30,42,55,65,75,58,70,80,62,76,50,68,56,44,66,52,42,58,46,34,48,36,26,34,22,14];
        heights.forEach(function (h, i) {
          var bar = document.createElement('div');
          bar.className = 'waveform-bar';
          bar.style.cssText = '--h:' + h + ';--d:' + (i * 0.06).toFixed(2);
          waveform.appendChild(bar);
        });
      })();

      /* ---------- Section waveform decorations ---------- */
      (function () {
        var configs = [
          { id: 'stack',      cls: 'sw-right', heights: [8,14,22,16,30,20,26,12,28,20,24,14,20,10] },
          { id: 'projects',   cls: 'sw-left',  heights: [10,18,26,18,32,22,28,14,30,22,26,16,22,10] },
          { id: 'experience', cls: 'sw-right', heights: [7,12,20,14,26,18,22,10,24,18,20,12,18,8] },
          { id: 'contact',    cls: 'sw-left',  heights: [9,16,24,18,30,20,26,12,28,20,24,14,20,9] },
        ];
        configs.forEach(function (config) {
          var section = document.getElementById(config.id);
          if (!section) return;
          var wf = document.createElement('div');
          wf.className = 'section-waveform ' + config.cls;
          wf.setAttribute('aria-hidden', 'true');
          config.heights.forEach(function (h) {
            var bar = document.createElement('div');
            bar.className = 'waveform-bar';
            bar.style.cssText = '--h:' + h + ';--d:0';
            wf.appendChild(bar);
          });
          section.appendChild(wf);
        });
      })();

      /* ---------- Scroll reveal ---------- */
      (function () {
        var els = document.querySelectorAll(".reveal");
        var io = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              if (e.isIntersecting) {
                e.target.classList.add("visible");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 },
        );
        els.forEach(function (el) {
          io.observe(el);
        });
      })();