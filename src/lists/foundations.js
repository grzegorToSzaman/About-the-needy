function Foundation(name, mission, array) {
    this.name = name;
    this.mission = `Cel i misja: ${mission}.`;
    this.items = array;
}

const foundations = [
    new Foundation('Fundacja jeden', 'Lorem ipsum jeden', ['jeden', 'dwa','trzy']),
    new Foundation('Fundacja dwa', 'Lorem ipsum dwa', ['trzy', 'dwa','trzy']),
    new Foundation('Fundacja trzy', 'Lorem ipsum trzy', ['jeden', 'dwa','trzy']),
    new Foundation('Fundacja cztery', 'Lorem ipsum cztery', ['osiem', 'dwa','trzy']),
    new Foundation('Fundacja pięć', 'Lorem ipsum pięć', ['jeden', 'pięć','trzy']),
    new Foundation('Fundacja sześć', 'Lorem ipsum sześć', ['jeden', 'dwa','jeden']),
    new Foundation('Fundacja siedem', 'Lorem ipsum siedem', ['cztery', 'siedem','trzy']),
    new Foundation('Fundacja osiem', 'Lorem ipsum osiem', ['jeden', 'dwa','trzy']),
    new Foundation('Fundacja dziewięć', 'Lorem ipsum dziewięć', ['jeden', 'dwa','trzy']),
];

export default foundations