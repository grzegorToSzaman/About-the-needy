function Lokal(name, description, array) {
    this.name = name;
    this.description = description;
    this.items = array;
}

const locals = [
    new Lokal('Zbiórka lokalna jeden', 'To jest zbiórka lokalna numer jeden', ['lorem', 'ipsum', 'dolor']),
    new Lokal('Zbiórka lokalna dwa', 'To jest zbiórka lokalna numer dwa', ['lorem', 'dolor']),
    new Lokal('Zbiórka lokalna trzy', 'To jest zbiórka lokalna numer trzy', ['dolor']),
];

export default locals