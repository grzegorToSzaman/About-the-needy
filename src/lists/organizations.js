const organizacje = [];
function Organizacja(name, description, array) {
    this.name = name;
    this.description = description;
    this.items = array
}
Organizacja.prototype.toArray = function () {
    organizacje.push(this)
};

let organizacja1 = new Organizacja('Organizacja jeden', 'Jeden jeden Jeden jeden Jeden jeden', ['jeden', 'jeden', 'jeden']);
organizacja1.toArray();
let organizacja2 = new Organizacja('Organizacja dwa', 'Jeden dwa Jeden dwa Jeden jeden', ['jeden', 'dwa', 'jeden']);
organizacja2.toArray();
let organizacja3 = new Organizacja('Organizacja trzy', 'Jeden trzy trzy trzy Jeden jeden', ['trzy', 'trzy', 'jeden', 'trzy']);
organizacja3.toArray();
let organizacja4 = new Organizacja('Organizacja cztery', ' cztery Jeden cztery cztery jeden', ['jeden', 'trzy']);
organizacja4.toArray();
let organizacja5 = new Organizacja('Organizacja pięć', 'jeden Jeden jeden Jeden jeden', ['jeden']);
organizacja5.toArray();
let organizacja6 = new Organizacja('Organizacja sześć', 'Jeden Jeden jeden Jeden jeden', ['jeden', 'jeden', 'jeden', 'cztery', 'cztery']);
organizacja6.toArray();

export default organizacje