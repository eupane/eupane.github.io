document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.menu-item');
  const itemName = document.querySelector('.item-name');
  const itemDesc = document.querySelector('.item-desc');
  const carousel = document.querySelector('.carousel');

  const itemInfo = [
    { name: 'Latte Macchiato', description: 'Leite vaporizado com um toque de espresso.' },
    { name: 'Cappuccino', description: 'Espresso com vaporizado de leite e uma pitada de espuma.' },
    { name: 'Espresso', description: 'O clássico italiano, curto e forte.' }
  ];

  let currentItemIndex = 1; // Índice do item atual

  function updateItemInfo() {
    // Atualiza o texto do item com base no índice atual
    itemName.textContent = itemInfo[currentItemIndex].name;
    itemDesc.textContent = itemInfo[currentItemIndex].description;
  }

  function updateCarousel() {
    // Move o item atual para o meio do carrossel
    const translationValue = -100 * currentItemIndex;
    carousel.style.transform = `translateX(${translationValue}%)`;
  }

  function moveCarousel(direction) {
    // Move o carrossel para a próxima posição
    currentItemIndex = (currentItemIndex + direction + itemInfo.length) % itemInfo.length;
    updateItemInfo();
    updateCarousel();
  }

  // Adiciona eventos de clique aos elementos .menu-item
  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      moveCarousel(index - currentItemIndex);
    });
  });

  // Atualiza as informações e o carrossel ao carregar a página
  updateItemInfo();
  updateCarousel();
});
