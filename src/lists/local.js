const lokalne = [];

function Lokal(name, description, array) {
    this.name = name;
    this.description = description;
    this.items = array;
}
Lokal.prototype.toArray = function () {
    lokalne.push(this);
};

let local1 = new Lokal('Zbiórka lokalna jeden', 'To jest zbiórka lokalna numer jeden', ['lorem', 'ipsum', 'dolor']);
local1.toArray();
let local2 = new Lokal('Zbiórka lokalna dwa', 'To jest zbiórka lokalna numer dwa', ['lorem', 'dolor']);
local2.toArray();
let local3 = new Lokal('Zbiórka lokalna trzy', 'To jest zbiórka lokalna numer trzy', ['dolor']);
local3.toArray();

export default lokalne