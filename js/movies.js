window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("category-select");
  const container = document.getElementById("movies-container");

  select.addEventListener("change", () => {
    const query = select.value;
    if (!query) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        container.innerHTML = "";

        data.forEach((item) => {
          if (item.show.image) {
            const div = document.createElement("div");
            div.className = "movie-card";
            div.innerHTML = `
                <img src="${item.show.image.medium}" alt="${item.show.name}" />
              `;
            container.appendChild(div);
          }
        });
      });
  });
});
