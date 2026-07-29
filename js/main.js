document.addEventListener("DOMContentLoaded", () => {
    const entryButton = document.querySelector("#entry-button");
    const entry = document.querySelector("#entry");
    const desktop = document.querySelector("#desktop");

    console.log("main.js 연결됨");
    console.log({ entryButton, entry, desktop });

    if (!entryButton || !entry || !desktop) {
        console.error("Entry 관련 요소를 찾지 못했습니다.");
        return;
    }

    entryButton.addEventListener("click", () => {
    console.log("View Portfolio 클릭됨");

    entry.style.display = "none";
    desktop.style.display = "block";
});
});

/* =========================
   Desktop Window
========================= */

const desktopIcons = document.querySelectorAll(".desktop-icon");
const aboutWindow = document.querySelector("#about-window");

desktopIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const targetWindow = icon.dataset.window;

        if (targetWindow === "about") {
            aboutWindow.classList.add("window-open");
        }
    });
});

/* About Window - Outside Click Close */

document.addEventListener("click", (event) => {
    if (!aboutWindow.classList.contains("window-open")) {
        return;
    }

    const clickedInsideWindow = aboutWindow.contains(event.target);
    const clickedAboutIcon = event.target.closest('[data-window="about"]');

    if (!clickedInsideWindow && !clickedAboutIcon) {
        aboutWindow.classList.remove("window-open");
    }
});