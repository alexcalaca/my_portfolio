fetch("projects.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("projects-grid");
    const template = document.getElementById("project-template");

    data.forEach(p => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".thumb").src = p.image;
      clone.querySelector(".title").textContent = p.title;
      clone.querySelector(".demo-link").href = p.demoUrl;
      grid.appendChild(clone);
    });
  });
