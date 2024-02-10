// Класс TreeRenderer отвечает за отображение структуры дерева в HTML
export class TreeRenderer {
  constructor(nodes, container, elem) {
    this.nodes = nodes; // Узлы дерева для отображения
    this.container = container; // Контейнер, в который будет рендериться дерево
    this.elem = elem; // CSS класс для элементов дерева
  }

  // Метод render отображает дерево в DOM
  render() {
    if (!this.nodes) return; // Если узлов нет, выходим из функции
    let ul = document.createElement('ul');
    this.container.appendChild(ul);
    this.nodes
      .sort((a, b) => a.sorthead - b.sorthead)
      .forEach((node) => {
        let li = document.createElement('li');
        li.textContent = `${node.name} (${node.price})`;
        li.className = this.elem;
        ul.appendChild(li);
        if (node.children.length) {
          // Рекурсивно отображаем детей, создавая новый экземпляр Renderer
          new TreeRenderer(node.children, li, this.elem).render();
        }
      });
  }
}
