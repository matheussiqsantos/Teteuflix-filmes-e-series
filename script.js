// Catálogo de Filmes e Séries em JSON
const catalog = [
  {
    id: 1,
    title: "Stranger Things",
    type: "series",
    category: "Séries",
    description: "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos e forças sobrenaturais.",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
  },
  {
    id: 2,
    title: "Interstellar",
    type: "movie",
    category: "Filmes",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Witcher",
    type: "series",
    category: "Séries",
    description: "O caçador de monstros Geralt de Rívia luta para encontrar seu lugar em um mundo onde as pessoas frequentemente se mostram mais perversas que as bestas.",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg"
  },
  {
    id: 4,
    title: "Cyberpunk: Edgerunners",
    type: "movie",
    category: "Filmes",
    description: "Um garoto de rua tentando sobreviver em uma cidade do futuro obcecada por tecnologia e modificação corporal.",
    banner: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/JtqIas3bYhg"
  },
  {
    id: 5,
    title: "Vingadores: Ultimato",
    type: "movie",
    category: "Filmes",
    description: "Após os eventos devastadores de Guerra Infinita, os Vingadores restantes se reúnem para reverter as ações de Thanos e restaurar o equilíbrio do universo.",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80", // <-- AGORA USA IMAGEM DE BREAKING BAD
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80", // <-- AGORA USA IMAGEM DE BREAKING BAD
    trailer: "https://www.youtube.com/embed/g6ng8iy-l0U"
  },
  {
    id: 6,
    title: "Divertida Mente",
    type: "movie",
    category: "Filmes",
    description: "Após se mudar para uma nova cidade, as emoções de Riley — Alegria, Tristeza, Medo, Raiva e Nojinho — entram em conflito sobre como navegar em sua nova vida.",
    banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/SG20CoUb5wA?si=PiYQpUhK8rigDx9J"
  },
  {
    id: 7,
    title: "Breaking Bad",
    type: "series",
    category: "Séries",
    description: "Um professor de química do ensino médio diagnosticado com câncer inoperável se junta a um ex-aluno para produzir e vender metanfetamina e garantir o futuro de sua família.",
    banner: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=1200&auto=format&fit=crop&q=80", // <-- AGORA USA IMAGEM DOS VINGADORES
    cover: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80", // <-- AGORA USA IMAGEM DOS VINGADORES
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
  },
  {
    id: 8,
    title: "Outer Banks",
    type: "series",
    category: "Séries",
    description: "Em uma ilha de opostos, um grupo de adolescentes locais embarca em uma busca perigosa por um tesouro lendário ligado ao desaparecimento do pai do líder do grupo.",
    banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&auto=format&fit=crop&q=80",
    trailer: "https://www.youtube.com/embed/5uOEQM5vq94?si=MVF94qRDS9syx8iw"
  }
];

// Elementos do DOM
const heroBanner = document.getElementById("hero-banner");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");
const heroPlayBtn = document.getElementById("hero-play-btn");

const seriesGrid = document.getElementById("series-grid");
const moviesGrid = document.getElementById("movies-grid");
const searchInput = document.getElementById("search-input");

const videoModal = document.getElementById("video-modal");
const closeModal = document.getElementById("close-modal");
const videoPlayer = document.getElementById("video-player");
const modalTitle = document.getElementById("modal-title");

// Inicializar Destaque (Hero)
function setupHero(item) {
  heroBanner.style.backgroundImage = `url('${item.banner}')`;
  heroTitle.textContent = item.title;
  heroDescription.textContent = item.description;
  heroPlayBtn.onclick = () => openModal(item);
}

// Renderizar Cards de Filmes e Séries
function renderCatalog(items) {
  seriesGrid.innerHTML = "";
  moviesGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}">
      <div class="card-info">
        <h4>${item.title}</h4>
        <span>${item.category}</span>
      </div>
    `;
    card.onclick = () => openModal(item);

    if (item.type === "series") {
      seriesGrid.appendChild(card);
    } else {
      moviesGrid.appendChild(card);
    }
  });
}

// Abrir e Fechar Modal
function openModal(item) {
  modalTitle.textContent = item.title;
  videoPlayer.src = `${item.trailer}?autoplay=1`;
  videoModal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  videoPlayer.src = ""; // Para o vídeo ao fechar
});

// Fechar ao clicar fora do modal
window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    videoPlayer.src = "";
  }
});

// Pesquisa em tempo real
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = catalog.filter(item => 
    item.title.toLowerCase().includes(query)
  );
  renderCatalog(filtered);
});

// Inicialização da Página
setupHero(catalog[0]);
renderCatalog(catalog);