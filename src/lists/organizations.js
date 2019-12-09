function Organization(name, description, array) {
    this.name = name;
    this.description = description;
    this.items = array
}

const organizations = [
    new Organization('Organizacja jeden', 'Jeden jeden Jeden jeden Jeden jeden', ['jeden', 'jeden', 'jeden']),
    new Organization('Organizacja dwa', 'Jeden dwa Jeden dwa Jeden jeden', ['jeden', 'dwa', 'jeden']),
    new Organization('Organizacja trzy', 'Jeden trzy trzy trzy Jeden jeden', ['trzy', 'trzy', 'jeden', 'trzy']),
    new Organization('Organizacja cztery', ' cztery Jeden cztery cztery jeden', ['jeden', 'trzy']),
    new Organization('Organizacja pięć', 'jeden Jeden jeden Jeden jeden', ['jeden']),
    new Organization('Organizacja sześć', 'Jeden Jeden jeden Jeden jeden', ['jeden', 'jeden', 'jeden', 'cztery', 'cztery']),
];


export default organizations