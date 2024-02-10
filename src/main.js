import { buildTree, renderTree } from './tree.js';
import data from './data.json'

function init() {
  const treeData = buildTree(data.services);
  const treeContainer = document.getElementById('tree-container');
  renderTree(treeData, treeContainer);
}

init();
