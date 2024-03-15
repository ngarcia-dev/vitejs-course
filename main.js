const app = document.getElementById("app");
const spinner = document.getElementById("spinner");

spinner.innerHTML = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
`;

fetch("data.json")
  .then((res) => {
    if (!res.ok) throw { ok: false, message: "Error" };
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      app.innerHTML += Card(item);
    });
  })
  .catch((err) => console.error(err))
  .finally(() => console.log((spinner.innerHTML = "")));

const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled");

function Card({ name, year, genre, stock }) {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name.toUpperCase()}</h5>
        <p class="card-text">${year} - ${genre}</p>
        <a href="#" class="btn ${btnClass(stock)} ">Buy</a>
      </div>
    </div>
  `;
}
