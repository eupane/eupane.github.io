// @eupane
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const projects = document.querySelectorAll('.project');
  let timeoutId;

  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function filterProjects() {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      const searchTerm = removeAccents(searchInput.value.toLowerCase());

      projects.forEach(function (project) {
        const title = removeAccents(project.querySelector('.project-title').textContent.toLowerCase());
        const titleMatch = title.includes(searchTerm);

        if (titleMatch) {
          project.classList.remove('hide');
        } else {
          project.classList.add('hide');
        }
      });
    }, 350);
  }

  searchInput.addEventListener('input', filterProjects);

  function updateButtons(demoClass, sourceClass, demoText, sourceText) {
    projects.forEach(function (project) {
      const demoButton = project.querySelector(`.${demoClass}`);
      const sourceButton = project.querySelector(`.${sourceClass}`);

      if (window.innerWidth <= 425) {
        demoButton.innerHTML = demoText;
        sourceButton.innerHTML = sourceText;
      } else {
        demoButton.innerHTML = 'Demo';
        sourceButton.innerHTML = 'Repositório';
      }
    });
  }

  updateButtons('demo-button', 'source-button', '<i class="fa-solid fa-play"></i>', '<i class="fa-solid fa-laptop-code"></i>');

  window.addEventListener('resize', function () {
    updateButtons('demo-button', 'source-button', '<i class="fa-solid fa-play"></i>', '<i class="fa-solid fa-laptop-code"></i>');
    toggleBackButton();
  });

  var backButton = document.getElementById('back-btn');

  window.addEventListener('scroll', toggleBackButton);

  backButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function toggleBackButton() {
    if (window.innerWidth <= 768 && window.scrollY > 200) {
      backButton.classList.add('show');
    } else {
      backButton.classList.remove('show');
    }
  }
});
