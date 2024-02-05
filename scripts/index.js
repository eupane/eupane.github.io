document.addEventListener('DOMContentLoaded', function () {
  var themeButton = document.getElementById('theme-button');
  var currentThemeIndex = 0;

  var themeGroups = [
    // Dark Theme
    {
      // Texts
      '--text-color': '#E0E1DD',
      '--text-detail-color': '#9E34F5',
      '--theme-button-color': '#9E34F5',
      // Backgrounds
      '--background-color1': '#050505',
      '--background-color2': '#080808',
      '--background-color3': '#090909',
      '--background-color4': '#121212',
      // Secondary Color
      '--border-color': '#2D0D35',
      '--effect-color': '#7f18d4',
      '--bg-effect-color': '#310a3d'
    },
    // Light Theme
    {
      // Texts
      '--text-color': '#050505',
      '--text-detail-color': '#020202',
      '--theme-button-color': '#050505',
      // Backgrounds
      '--background-color1': '#E0E1DD',
      '--background-color2': '#ACACAC',
      '--background-color3': '#090909',
      '--background-color4': '#C6C6C6',
      // Secondary Color
      '--border-color': '#020202',
      '--effect-color': '#D8D8D8',
      '--bg-effect-color': '#5E5E5E'
    },
    // Pink/Purple Theme
    {
      // Texts
      '--text-color': '#f7d1cd',
      '--text-detail-color': '#ab4bbe',
      '--theme-button-color': '#844591',
      // Backgrounds
      '--background-color1': '#231942',
      '--background-color2': '#32245e',
      '--background-color3': '#3d2c74',
      '--background-color4': '#4f3a94',
      // Secondary Color
      '--border-color': '#281031',
      '--effect-color': '#7e548e',
      '--bg-effect-color': '#18041f'
    },
    // Light Blue Theme
    {
      // Texts
      '--text-color': '#e0eff6',
      '--text-detail-color': '#69b0ca',
      '--theme-button-color': '#609db3',
      // Backgrounds
      '--background-color1': '#13314d',
      '--background-color2': '#1d4972',
      '--background-color3': '#276197',
      '--background-color4': '#317abe',
      // Secondary Color
      '--border-color': '#05111d',
      '--effect-color': '#308be0',
      '--bg-effect-color': '#092d4e'
    },
    // Orange Theme
    {
      // Texts
      '--text-color': '#f6efe0',
      '--text-detail-color': '#caa869',
      '--theme-button-color': '#b39d60',
      // Backgrounds
      '--background-color1': '#4d3413',
      '--background-color2': '#724d1d',
      '--background-color3': '#976327',
      '--background-color4': '#be8631',
      // Secondary Color
      '--border-color': '#1d1305',
      '--effect-color': '#e09930',
      '--bg-effect-color': '#4e3209'
    },
    // Red Theme
    {
      // Texts
      '--text-color': '#f6e0e0',
      '--text-detail-color': '#ca6969',
      '--theme-button-color': '#b36060',
      // Backgrounds
      '--background-color1': '#4d1313',
      '--background-color2': '#721d1d',
      '--background-color3': '#972727',
      '--background-color4': '#be3131',
      // Secondary Color
      '--border-color': '#1d0505',
      '--effect-color': '#e03030',
      '--bg-effect-color': '#4e0909'
    }
  ];

  var applyThemeGroup = function (groupIndex) {
    var currentGroup = themeGroups[groupIndex];
    for (var key in currentGroup) {
      document.documentElement.style.setProperty(key, currentGroup[key]);
    }
  }

  themeButton.addEventListener('click', function () {
    4
    currentThemeIndex = (currentThemeIndex + 1) % themeGroups.length;
    applyThemeGroup(currentThemeIndex);
  });

  applyThemeGroup(currentThemeIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const projects = document.querySelectorAll('.project');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    projects.forEach(function (project) {
      const title = project.querySelector('.project-title').textContent.toLowerCase();
      const description = project.querySelector('.project-description').textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        project.style.display = 'flex';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

