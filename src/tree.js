// Функция для построения дерева из данных
export function buildTree(services) {
  let map = {}, node, roots = [];
  for (let i = 0; i < services.length; i++) {
      map[services[i].id] = i; // Инициализация карты
      services[i].children = []; // Инициализация детей
  }
  for (let i = 0; i < services.length; i++) {
      node = services[i];
      if (node.head !== null) {
          // Если не корневой элемент, добавляем к родителю
          services[map[node.head]].children.push(node);
      } else {
          roots.push(node); // Корневые элементы
      }
  }
  return roots;
}

// Функция для отображения дерева
export function renderTree(nodes, container) {
  if (!nodes) { return; }
  let ul = document.createElement('ul');
  container.appendChild(ul);
  nodes.sort((a, b) => a.sorthead - b.sorthead).forEach((node) => {
      let li = document.createElement('li');
      li.textContent = `${node.name} (${node.price})`;
      li.className = 'tree-node';
      ul.appendChild(li);
      if (node.children.length) {
          renderTree(node.children, li); // Рекурсивно отображаем детей
      }
  });
}

