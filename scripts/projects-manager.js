const allProjects = [
  {
    title: "NoyauSIH",
    company: "CHU de Reims",
    description: `Système d'information hospitalier.<br />
      L'application orchestre l'intégralité des droits, la gestion de toutes les entités et les interactions de la totalité du <br />
      socle applicatif du groupement hospitalier universitaire (CHU de Reims, CHU d'Épernay, CHU de Châlons).`,
    stack: "Ruby on Rails, VueJS",
    date: ["Janvier 2025", "En cours"],
    team: 2,
    links: ["Application interne"],
    images: [], // TODO
  },
  {
    title: "Mangrove64",
    company: "Open source",
    description: `Librairie d'affichage et d'édition arborescente sous forme de grille.`,
    stack: "VueJS",
    date: ["Septembre 2025", "En cours"],
    team: 1,
    links: ["https://github.com/CHUReimsDSN/Mangrove64-Vue"],
    images: [],
  },
  {
    title: "Submit64",
    company: "Open source",
    description: `Librairie de génération de formulaires transverse`,
    stack: "Ruby on Rails, VueJS",
    date: ["Juin 2025", "En cours"],
    team: 1,
    links: [
      "https://github.com/CHUReimsDSN/Submit64-Rails",
      "https://github.com/CHUReimsDSN/Submit64-Vue",
    ],
    images: [],
  },
  {
    title: "Query64",
    company: "Open source",
    description: `Librairie de génération de grilles de consultation transverse`,
    stack: "Ruby on Rails, VueJS, SQL natif",
    date: ["Mars 2025", "Septembre 2025"],
    team: 1,
    links: [
      "https://github.com/CHUReimsDSN/Query64-Rails",
      "https://github.com/CHUReimsDSN/Query64-Vue",
    ],
    images: [],
  },
  {
    title: "EasilySMS",
    company: "CHU de Reims",
    description: `Application complémentaire de DPI (Dossier Patient Informatisé).<br />
      EasilySMS ajoute des fonctionnalités d'envoi et de suivi de SMS aux proches des patients par les agents de santé.`,
    stack: "Ruby on Rails, VueJS",
    date: ["Juin 2025", "Juin 2025"],
    team: 1,
    links: ["Application interne"],
    images: ["easilysms1.png"],
  },
  {
    title: "Flammèche",
    company: "CHU de Reims",
    description: `Application de requêtage et de détection d'anomalies dans les
                  entrepôts de données de santé. <br />
                  Développée pour répondre à de nombreux besoins d'extraction de données pour l'Institut
                  d'Intelligence Artificielle en Santé<br />
                  mais aussi pour des analyses cadrées pour les professionnels de santé.`,
    stack: ".NET, VueJS, ClickHouse",
    date: ["Juin 2023", "Janvier 2025"],
    team: 1,
    links: ["Application interne"],
    images: [
      "flammeche1.png",
      "flammeche2.png",
      "flammeche3.png",
      "flammeche4.png",
    ],
  },
  {
    title: "HomePOP",
    company: "CHU de Reims",
    description: `Application de préparation de plateaux pour les blocs opératoires. <br />
      Elle communique avec d'autres outils applicatifs pour suivre la continuité et l'état des interventions en temps réel.<br />`,
    stack: "Ruby on Rails, VueJS, WebSockets",
    date: ["Octobre 2022", "Janvier 2025"],
    team: 1,
    links: ["Application interne"],
    images: ["homepop1.png", "homepop2.png", "homepop3.png"],
  },
  {
    title: "Site de l'IIAS",
    company: "CHU de Reims",
    description: `Site de l'Institut d'Intelligence Artificielle en Santé. <br />
      La solution offre un système d'édition de contenu couplé à des fonctionnalités de procédures pour les diverses demandes à l'Institut.<br />`,
    stack: "Ruby on Rails, VueJS",
    date: ["Avril 2023", "Mai 2023"],
    team: 1,
    links: ["Application interne"],
    images: ["iias1.png", "iias2.png", "iias3.png"],
  },
  {
    title: "DTA Explorer 3",
    company: "CHU de Reims",
    description: `Application de prévisualisation de flux de serveur Biztalk.<br />`,
    stack: "Ruby on Rails, VueJS, Elastic Search",
    date: ["Février 2023", "Avril 2023"],
    team: 1,
    links: ["Application interne"],
    images: ["dta1.png", "dta2.png"],
  },
  {
    title: "Stick in PCRA",
    company: "CHU de Reims",
    description: `Application bureau d'impression d'étiquettes pour imprimantes Zebra.<br />`,
    stack: "WPF, .NET",
    date: ["Avril 2024"],
    team: 1,
    links: ["Application interne"],
    images: ["stickinpcra1.png"],
  },
  {
    title: "Intranet CHU",
    company: "CHU de Reims",
    description: `L'intranet du CHU sur-mesure.<br />`,
    stack: "Ruby on Rails, VueJS, Elastic Search, WebSockets",
    date: ["Juillet 2023", "Mars 2024"],
    team: 2,
    links: ["Application interne"],
    images: [
      "intranet1.png",
      "intranet2.png",
      "intranet3.png",
      "intranet4.png",
    ],
  },
  {
    title: "Astre",
    company: "CHU de Reims",
    description: `Application de récolte et de saisie de données anonymes concernant des greffes rénales.<br />
      Les données sont ensuite exportées et expoitable à des fins de statistique et de recherche.`,
    stack: "Ruby on Rails, VueJS",
    date: ["Avril 2022", "Aout 2022"],
    team: 1,
    links: ["Application interne"],
    images: ["astre1.png", "astre2.png"],
  },
  {
    title: "MyPlanning",
    company: "Groupe Mary - Saint Quentin",
    description: `Outil de gestion et d'organisation des équipes.<br />`,
    stack: "Laravel, Livewire",
    date: ["Février 2022", "Mars 2023"],
    team: 1,
    links: ["Application interne"],
    images: [],
  },
  {
    title: "Projets personnels",
    company: null,
    description: `Jeux vidéos, sites vitrines, applications web, décompilation..<br />
      Bref, une partie de mon temps libre est destinée au simple plaisir de développer !`,
    stack: ".NET, Godot, Rust",
    date: null,
    team: null,
    links: ["https://www.ootladder.com"],
    images: ["ootr1.png"],
  },
];

function setupAllProjects() {
  const projectListElement =
    document.getElementsByClassName("projects-list")[0];
  if (!projectListElement) {
    return;
  }
  for (let i = 0; i < allProjects.length; i++) {
    const project = document.createElement("div");
    project.className = "card projects-card";
    project.id = allProjects[i].title;
    project.innerHTML = allProjects[i].title;
    projectListElement.appendChild(project);
    project.addEventListener("click", () => {
      unselectAllProject();
      showSelectProject();
      selectProjectByTitle(allProjects[i].title);
    });
  }
}
function unselectAllProject() {
  const allProjects = document.getElementsByClassName("card projects-card");
  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].className = "card projects-card";
  }
}
function setupPreviewCloseEvent() {
  const previewElement = document.getElementById("preview");
  if (!previewElement) {
    return;
  }
  previewElement.addEventListener("click", () => {
    const classFadeoutPreview = " fadeout-preview";
    previewElement.className += classFadeoutPreview;
    setTimeout(() => {
      previewElement.className = previewElement.className.replace(
        classFadeoutPreview,
        "",
      );
      previewElement.style.display = "none";
    }, 200);
  });
}
function setupEventThumbNails() {
  const clickEvent = (event) => {
    const previewElement = document.getElementById("preview");
    if (!previewElement) {
      return;
    }
    const srcAttribute = event.target.getAttribute("src");
    previewElement.style.display = "flex";
    previewElement.innerHTML = `<img src="${srcAttribute}" alt="image du projet" class="project-display-image-preview" />`;
  };
  const allThumbnails = document.getElementsByClassName(
    "project-display-thumbnail-item",
  );
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].removeEventListener("click", clickEvent); // Avoid memory leak
    allThumbnails[i].addEventListener("click", clickEvent);
  }
}
function selectProjectByTitle(projectTitle) {
  const projectSelected = document.getElementById(projectTitle);
  if (!projectSelected) {
    return;
  }
  projectSelected.className += " projects-card-selected";

  const projectInList = allProjects.find((projectFind) => {
    return projectFind.title === projectTitle;
  });

  document.getElementsByClassName("card-project-displayed-title")[0].innerHTML =
    projectInList.title;
  document.getElementsByClassName(
    "card-project-displayed-description",
  )[0].innerHTML = projectInList.description;
  document.getElementsByClassName("card-project-displayed-stack")[0].innerHTML =
    projectInList.stack;
  document.getElementsByClassName(
    "card-project-displayed-company",
  )[0].innerHTML = projectInList.company ?? "";
  document.getElementsByClassName("card-project-displayed-date")[0].innerHTML =
    projectInList.date?.join(" - ") ?? "";
  document.getElementsByClassName("card-project-displayed-links")[0].innerHTML =
    projectInList.links
      .map((linkMap) => {
        return `<a ${linkMap === "Application interne" ? "" : 'href="' + linkMap + '"' + ' class="card-project-displayed-link-item"'}">${linkMap}</a>`;
      })
      .join("");
  document.getElementsByClassName(
    "card-project-displayed-thumbnails",
  )[0].innerHTML = generateThumbnailsHtmlByProject(projectInList.images);

  setupEventThumbNails();
}
function generateThumbnailsHtmlByProject(projectThumbnailList) {
  if (projectThumbnailList === null || projectThumbnailList.length === 0) {
    return "";
  }
  return projectThumbnailList
    .map((imageName) => {
      return `<img src="${document.URL}images/projects/${imageName}" alt="image du projet" class="project-display-thumbnail-item" />`;
    })
    .join("");
}
function hideSelectProject() {
  const projectDisplayCard = document.getElementsByClassName(
    "projects-display-info",
  )[0];
  projectDisplayCard.style.display = "none";
}
function showSelectProject() {
  const projectDisplayCard = document.getElementsByClassName(
    "projects-display-info",
  )[0];
  projectDisplayCard.style.display = "block";
}

setupPreviewCloseEvent();
hideSelectProject();
setupAllProjects();
showSelectProject();
selectProjectByTitle(allProjects[0].title);
