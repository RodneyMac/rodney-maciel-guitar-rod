document.addEventListener("DOMContentLoaded", (e) => {
  smartVideo();
});

function smartVideo() {
  const demoVideo = document.querySelectorAll("video[data-smart-video]");

  const call = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener("visibilitychange", (e) =>
        document.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(call, { threshold: 0.5 });

  demoVideo.forEach((e) => observer.observe(e));
}
