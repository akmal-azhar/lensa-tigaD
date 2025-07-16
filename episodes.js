const episodes = [
  {
    title: "Episode 1: Bola Sepak",
    category: "sukan",
    image: "images/first.jpg",
    description: "Aksi bola sepak di padang hujung minggu.",
    videoUrl: "https://www.youtube.com/embed/dpvQqmX6SUI"
  },
  {
    title: "Episode 2: Belajar JavaScript",
    category: "education",
    image: "images/second.jpg",
    description: "Pengenalan kepada programming JavaScript.",
    videoUrl: "https://www.youtube.com/embed/uS_y_65CcpA"
  },
  {
    title: "Episode 3: Info Travel KL",
    category: "information",
    image: "images/third.jpg",
    description: "Tempat menarik untuk dilawati di Kuala Lumpur.",
    videoUrl: "https://www.youtube.com/embed/somevideoid"
  },
  {
    title: "Episode 4: Chelsea vs PSG",
    category: "sukan",
    image: "images/four.png",
    description: "Chelsea vs PSG Club World Cup",
    videoUrl: "https://www.youtube.com/embed/ON18ItHo5YE"
  }
];

// Paparkan kad video
function renderEpisodes(data) {
  const container = document.getElementById("episodeContainer");
  container.innerHTML = "";

  data.forEach(ep => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card vlog-card h-100">
        <iframe class="vlog-thumb" src="${ep.videoUrl}" frameborder="0" allowfullscreen></iframe>
        <div class="card-body">
          <h5 class="card-title">${ep.title}</h5>
          <p class="card-text">${ep.description}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Gabungan search + filter
function filterEpisodes() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filter = document.getElementById("filterCategory").value;

  const filtered = episodes.filter(ep =>
    ep.title.toLowerCase().includes(search) &&
    (filter === "all" || ep.category === filter)
  );

  renderEpisodes(filtered);
}

// Event listener
document.getElementById("searchInput").addEventListener("input", filterEpisodes);
document.getElementById("filterCategory").addEventListener("change", filterEpisodes);

// Papar semua episod mula-mula
renderEpisodes(episodes);
