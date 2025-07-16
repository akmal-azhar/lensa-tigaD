function goToEpisode(title, videoURL, description) {
  const encodedTitle = encodeURIComponent(title);
  const encodedURL = encodeURIComponent(videoURL);
  const encodedDesc = encodeURIComponent(description);

  window.location.href = `episode-view.html?title=${encodedTitle}&video=${encodedURL}&desc=${encodedDesc}`;
}

function stopVideo() {
  document.getElementById('videoFrame').src = '';
}
function filterVlogs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".vlog-card");

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(input)) {
      card.parentElement.style.display = "block"; // .col
    } else {
      card.parentElement.style.display = "none";
    }
  });
}
// Example: alert bila user submit contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message!');
      form.reset();
    });
  }
});
