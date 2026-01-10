const svg = document.getElementById("mindmap");
const width = window.innerWidth;
const height = window.innerHeight;

svg.setAttribute("width", width);
svg.setAttribute("height", height);

let root;

// Load data
fetch("data/profileTree.json")
  .then(res => res.json())
  .then(data => {
    root = initState(data);
    render();
  });

// Add collapsed state to every node
function initState(node) {
  node.collapsed = false;
  if (node.children) {
    node.children.forEach(initState);
  }
  return node;
}

// Main render
function render() {
  svg.innerHTML = "";
  drawRoot(root);
}

// Draw root and primary branches
function drawRoot(node) {
  const cx = width / 2;
  const cy = height / 2;

  drawCircle(node, cx, cy, 0);

  if (!node.children) return;

  // Fixed mind-map directions
  const directions = [
    { dx: 1, dy: 0 },   // right
    { dx: -1, dy: 0 },  // left
    { dx: 0, dy: -1 },  // up
    { dx: 0, dy: 1 }    // down
  ];

  node.children.forEach((child, i) => {
    const dir = directions[i % directions.length];
    drawBranch(child, cx, cy, dir, 1);
  });
}

// Recursive branch drawing
function drawBranch(node, px, py, dir, depth) {
  const spacing = [200, 130, 100];
  const distance = spacing[depth - 1] || 80;

  const x = px + dir.dx * distance;
  const y = py + dir.dy * distance;

  drawLine(px, py, x, y);
  drawCircle(node, x, y, depth);

  if (node.collapsed || !node.children) return;

  node.children.forEach((child, i) => {
    const offset = (i - (node.children.length - 1) / 2) * 50;

    const nx = dir.dx === 0 ? x + offset : x;
    const ny = dir.dy === 0 ? y + offset : y;

    drawBranch(child, x, y, dir, depth + 1);
  });
}

// Draw node
function drawCircle(node, x, y, depth) {
  const r = depth === 0 ? 34 : depth === 1 ? 22 : 16;

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
}

// Draw connecting line
function drawLine(x1, y1, x2, y2) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("class", "link");
  svg.appendChild(line);
}
