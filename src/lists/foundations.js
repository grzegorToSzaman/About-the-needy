const fundacje = [];
function Fundacja(name, mission, array) {
    this.name = name;
    this.mission = `Cel i misja: ${mission}.`;
    this.items = array;
}
Fundacja.prototype.toFundacjeArray = function () {
    fundacje.push(this);
};

let fundacja1 = new Fundacja('Fundacja jeden', 'Lorem ipsum jeden', ['jeden', 'dwa','trzy']);
fundacja1.toFundacjeArray();
let fundacja2 = new Fundacja('Fundacja dwa', 'Lorem ipsum dwa', ['trzy', 'dwa','trzy']);
fundacja2.toFundacjeArray();
let fundacja3 = new Fundacja('Fundacja trzy', 'Lorem ipsum trzy', ['jeden', 'dwa','trzy']);
fundacja3.toFundacjeArray();
let fundacja4 = new Fundacja('Fundacja cztery', 'Lorem ipsum cztery', ['osiem', 'dwa','trzy']);
fundacja4.toFundacjeArray();
let fundacja5 = new Fundacja('Fundacja pięć', 'Lorem ipsum pięć', ['jeden', 'pięć','trzy']);
fundacja5.toFundacjeArray();
let fundacja6 = new Fundacja('Fundacja sześć', 'Lorem ipsum sześć', ['jeden', 'dwa','jeden']);
fundacja6.toFundacjeArray();
let fundacja7 = new Fundacja('Fundacja siedem', 'Lorem ipsum siedem', ['cztery', 'siedem','trzy']);
fundacja7.toFundacjeArray();
let fundacja8 = new Fundacja('Fundacja osiem', 'Lorem ipsum osiem', ['jeden', 'dwa','trzy']);
fundacja8.toFundacjeArray();
let fundacja9 = new Fundacja('Fundacja dziewięć', 'Lorem ipsum dziewięć', ['jeden', 'dwa','trzy']);
fundacja9.toFundacjeArray();

export default fundacje