import { TreeBuilder } from './TreeBuilder';
import { TreeRenderer } from './TreeRenderer';
import data from './data.json';

function init() {
  const treeBuilder = new TreeBuilder(data.services);
  const treeData = treeBuilder.build();
  const treeContainer = document.getElementById('tree-container');
  new TreeRenderer(treeData, treeContainer, 'tree-node').render();
}

init();
