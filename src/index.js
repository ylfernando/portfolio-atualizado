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