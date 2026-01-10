const svg = document.getElementById("mindmap");
const width = window.innerWidth;
const height = window.innerHeight;

svg.setAttribute("width", width);
svg.setAttribute("height", height);

let treeData;

fetch("data/profileTree.json")
  .then(res => res.json())
  .then(data => {
    treeData = addState(data);
    render();
  });

function addState(node) {
  node.collapsed = false;
  if (node.children) {
    node.children.forEach(addState);
  }
  return node;
}

function render() {
  svg.innerHTML = "";
  drawNode(treeData, width / 2, height / 2, 0);
}

function drawNode(node, x, y, level) {
  const r = 22;

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("class", "node");

  const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", r);

  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t.setAttribute("x", x);
  t.setAttribute("y", y + 4);
  t.setAttribute("text-anchor", "middle");
  t.textContent = node.label;

  g.appendChild(c);
  g.appendChild(t);
  svg.appendChild(g);

  g.addEventListener("click", e => {
    e.stopPropagation();
    node.collapsed = !node.collapsed;
    render();
  });

  if (node.collapsed || !node.children) return;

  const step = (2 * Math.PI) / node.children.length;
  const dist = 120 + level * 40;

  node.children.forEach((child, i) => {
    const angle = i * step;
    const cx = x + dist * Math.cos(angle);
    const cy = y + dist * Math.sin(angle);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
    line.setAttribute("x2", cx);
    line.setAttribute("y2", cy);
    line.setAttribute("class", "link");

    svg.appendChild(line);
    drawNode(child, cx, cy, level + 1);
  });
}
