let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);

    scrollProgress.style.background = `conic-gradient(#f7f0ed ${scrollValue}%, #00fbf4 ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;

    if (pos > 20) {
        scrollProgress.classList.remove("hide");
        scrollProgress.classList.add("show");
    } else {
        scrollProgress.classList.remove("show");
        scrollProgress.classList.add("hide");
    }
    
    scrollProgress.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;