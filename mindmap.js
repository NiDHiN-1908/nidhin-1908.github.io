const svg = document.getElementById("mindmap");

/* ===== Layout Configuration ===== */
const isMobile = window.innerWidth < 768;

const NODE_WIDTH  = isMobile ? 220 : 260;
const NODE_HEIGHT = 40;
const H_GAP       = isMobile ? 50  : 80;
const V_GAP       = isMobile ? 10  : 14;

let cursorY = 40;
let rootData;

/* ===== Load Data ===== */
fetch("data/profileTree.json")
  .then(res => res.json())
  .then(json => {
    rootData = attachParents(json, null);
    render();
  });

/* ===== Attach Parent References ===== */
function attachParents(node, parent) {
  node.__parent = parent;
  if (node.children) {
    node.children.forEach(child => attachParents(child, node));
  }
  return node;
}

/* ===== Render Entry ===== */
function render() {
  svg.innerHTML = "";
  cursorY = 40;
  drawNode(rootData, 40);
}

/* ===== Draw Node Recursively ===== */
function drawNode(node, x) {
  const y = cursorY;

  /* Node group */
  const g = create("g", { class: "node" });

  /* Rectangle */
  const rect = create("rect", {
    x, y,
    width: NODE_WIDTH,
    height: NODE_HEIGHT
  });

  /* Label */
  const text = create("text", {
    x: x + 12,
    y: y + 26
  });
  text.textContent = node.label;

  g.append(rect, text);

  /* Expand arrow */
  if (node.children) {
    const arrow = create("text", {
      x: x + NODE_WIDTH - 18,
      y: y + 26,
      class: "arrow"
    });
    arrow.textContent = node.expanded ? "▾" : "▸";
    g.appendChild(arrow);

    g.addEventListener("click", () => {
      node.expanded = !node.expanded;
      collapseSiblings(node.__parent, node);
      render();
    });
  }

  svg.appendChild(g);

  cursorY += NODE_HEIGHT + V_GAP;

  /* Draw children if expanded */
  if (node.expanded && node.children) {
    node.children.forEach(child => {
      drawLink(
        x + NODE_WIDTH,
        y + NODE_HEIGHT / 2,
        x + NODE_WIDTH + H_GAP,
        cursorY + NODE_HEIGHT / 2
      );
      drawNode(child, x + NODE_WIDTH + H_GAP);
    });
  }
}

/* ===== Collapse Other Branches ===== */
function collapseSiblings(parent, except) {
  if (!parent || !parent.children) return;
  parent.children.forEach(child => {
    if (child !== except) child.expanded = false;
  });
}

/* ===== Draw Connection Line ===== */
function drawLink(x1, y1, x2, y2) {
  const path = create("path", {
    d: `M ${x1} ${y1}
        C ${x1 + 40} ${y1},
          ${x2 - 40} ${y2},
          ${x2} ${y2}`,
    class: "link"
  });
  svg.appendChild(path);
}

/* ===== SVG Helper ===== */
function create(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
}
