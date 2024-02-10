// Класс TreeBuilder создает структуру дерева из предоставленных данных услуг
export class TreeBuilder {
  constructor(services) {
    this.services = services; // Исходные данные услуг
  }

  // Метод build преобразует массив услуг в иерархическую структуру дерева
  build() {
    let map = {},
      roots = [];
    // Инициализация каждого элемента карты и подготовка массива детей
    this.services.forEach((service) => {
      map[service.id] = service;
      service.children = [];
    });

    // Строим дерево, назначая детей соответствующим родителям
    this.services.forEach((service) => {
      if (service.head !== null) {
        map[service.head].children.push(service);
      } else {
        roots.push(service); // Корневые элементы без родителей
      }
    });

    return roots; // Возвращаем массив корневых элементов дерева
  }
}
