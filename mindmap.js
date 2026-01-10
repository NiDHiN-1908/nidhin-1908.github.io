const svg = document.getElementById("mindmap");
const width = window.innerWidth;
const height = window.innerHeight;

svg.setAttribute("width", width);
svg.setAttribute("height", height);

let root;

fetch("data/profileTree.json")
  .then(res => res.json())
  .then(data => {
    root = initState(data);
    render();
  });

function initState(node) {
  node.collapsed = false;
  if (node.children) {
    node.children.forEach(initState);
  }
  return node;
}

function render() {
  svg.innerHTML = "";
  drawNode(root, width / 2, height / 2, 0);
}

function drawNode(node, x, y, depth) {
  const r = 22;

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("class", "node");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y + 4);
  text.setAttribute("text-anchor", "middle");
  text.textContent = node.label;

  g.appendChild(circle);
  g.appendChild(text);
  svg.appendChild(g);

  g.addEventListener("click", e => {
    e.stopPropagation();
    node.collapsed = !node.collapsed;
    render();
  });

  if (node.collapsed || !node.children) return;

  const step = (2 * Math.PI) / node.children.length;
  const distance = 130 + depth * 40;

  node.children.forEach((child, i) => {
    const angle = i * step;
    const cx = x + distance * Math.cos(angle);
    const cy = y + distance * Math.sin(angle);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
    line.setAttribute("x2", cx);
    line.setAttribute("y2", cy);
    line.setAttribute("class", "link");

    svg.appendChild(line);
    drawNode(child, cx, cy, depth + 1);
  });
}
