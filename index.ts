interface Libro {
  nombre: string;
  autor: string;
}

class Usuario {
  nombre: string;
  apellido: string;
  libros: Libro[];
  mascotas: string[];

  constructor(
    nombre: string,
    apellido: string,
    libros: Libro[],
    mascotas: string[]
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName(): string {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota: string): void {
    this.mascotas.push(mascota);
  }
  countMascotas(): number {
    return this.mascotas.length;
  }

  addBook(nombre: string, autor: string): void {
    this.libros.push({ nombre, autor });
  
  }

  getBookNames(): string[] {
    return this.libros.map((libro) => libro.nombre);
  }
}
const usuario1: Usuario = new Usuario(
  'Julian',
  'Martinez',
  [
    { nombre: 'libro1', autor: 'autor1' },
    { nombre: 'libro2', autor: 'autor2' },
  ],
  ['mascota1', 'mascota2']
);

console.log(usuario1.getFullName());
usuario1.addMascota('mascota3');
console.log('Cantidad de mascotas:', usuario1.countMascotas());
usuario1.addBook('libro3','autor3');
console.log(usuario1.getBookNames());
