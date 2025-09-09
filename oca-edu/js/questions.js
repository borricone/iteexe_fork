// Banco de preguntas con niveles y categorías.
// La selección se reparte según el tramo del tablero:
// casillas 1-16 nivel 1, 17-33 nivel 2, 34-50 nivel 3.

export const QUESTION_BANK = [
  // Nivel 1
  {id:'L1-01',level:1,category:'Matemáticas',prompt:'¿Cuánto es 2 + 2?',options:['3','4','5','6'],answerIndex:1,explain:'2 + 2 = 4.'},
  {id:'L1-02',level:1,category:'Lengua',prompt:"¿Cuál es un sinónimo de 'feliz'?",options:['Contento','Triste','Perezoso','Hambriento'],answerIndex:0,explain:"‘Contento’ es sinónimo de ‘feliz’."},
  {id:'L1-03',level:1,category:'Ciencias',prompt:'¿Qué planeta habitamos?',options:['Marte','Júpiter','La Tierra','Venus'],answerIndex:2,explain:'Vivimos en la Tierra.'},
  {id:'L1-04',level:1,category:'Matemáticas',prompt:'¿Cuántos lados tiene un triángulo?',options:['Cuatro','Tres','Cinco','Dos'],answerIndex:1,explain:'Un triángulo tiene tres lados.'},
  {id:'L1-05',level:1,category:'Ciencias',prompt:'¿Qué animal dice "miau"?',options:['Perro','Gato','Vaca','Pato'],answerIndex:1,explain:'El gato maúlla.'},
  {id:'L1-06',level:1,category:'Lengua',prompt:'¿Cuál es la primera letra del alfabeto?',options:['A','B','C','D'],answerIndex:0,explain:'La letra A inicia el alfabeto.'},
  {id:'L1-07',level:1,category:'Matemáticas',prompt:'¿Cuánto es 5 - 3?',options:['1','2','3','4'],answerIndex:1,explain:'5 - 3 = 2.'},
  {id:'L1-08',level:1,category:'Ciencias',prompt:'¿Qué necesitamos para respirar?',options:['Agua','Aire','Leche','Arena'],answerIndex:1,explain:'Respiramos aire.'},
  {id:'L1-09',level:1,category:'Lengua',prompt:'Selecciona la palabra escrita correctamente.',options:['casa','cassa','caza','ccasa'],answerIndex:0,explain:'"Casa" se escribe con una sola s.'},
  {id:'L1-10',level:1,category:'Matemáticas',prompt:'¿Cuánto es 1 × 3?',options:['1','2','3','4'],answerIndex:2,explain:'1 por 3 es 3.'},
  {id:'L1-11',level:1,category:'Ciencias',prompt:'¿Qué astro nos da luz durante el día?',options:['La Luna','El Sol','Las estrellas','Un cometa'],answerIndex:1,explain:'El Sol ilumina el día.'},
  {id:'L1-12',level:1,category:'Lengua',prompt:'¿Cómo se llama el lugar donde viven los libros?',options:['Biblioteca','Cine','Estadio','Restaurante'],answerIndex:0,explain:'Los libros se guardan en la biblioteca.'},
  // Nivel 2
  {id:'L2-01',level:2,category:'Matemáticas',prompt:'¿Cuál es el resultado de 6 × 7?',options:['42','36','32','40'],answerIndex:0,explain:'6 multiplicado por 7 es 42.'},
  {id:'L2-02',level:2,category:'Lengua',prompt:'Selecciona el antónimo de "alto".',options:['Bajo','Pequeño','Lejano','Fino'],answerIndex:0,explain:'Antónimo significa lo contrario; alto ↔ bajo.'},
  {id:'L2-03',level:2,category:'Ciencias',prompt:'¿Qué gas necesitan las plantas para la fotosíntesis?',options:['Oxígeno','Hidrógeno','Dióxido de carbono','Helio'],answerIndex:2,explain:'Usan dióxido de carbono.'},
  {id:'L2-04',level:2,category:'Matemáticas',prompt:'¿Cuánto es 45 ÷ 5?',options:['5','7','9','10'],answerIndex:2,explain:'45 dividido entre 5 es 9.'},
  {id:'L2-05',level:2,category:'Lengua',prompt:'¿Cuál es la forma correcta del plural de "lápiz"?',options:['Lápizes','Lápices','Lápizos','Lápizs'],answerIndex:1,explain:'El plural es "lápices".'},
  {id:'L2-06',level:2,category:'Ciencias',prompt:'¿Cuál es el metal líquido a temperatura ambiente?',options:['Mercurio','Hierro','Cobre','Plata'],answerIndex:0,explain:'El mercurio es líquido a temperatura ambiente.'},
  {id:'L2-07',level:2,category:'Matemáticas',prompt:'¿Cuánto es 8²?',options:['16','32','64','81'],answerIndex:2,explain:'8 elevado a 2 es 64.'},
  {id:'L2-08',level:2,category:'Ciencias',prompt:'¿Qué fuerza nos mantiene pegados al suelo?',options:['Inercia','Gravedad','Magnetismo','Fricción'],answerIndex:1,explain:'La gravedad nos mantiene en el suelo.'},
  {id:'L2-09',level:2,category:'Lengua',prompt:'¿Cuál es el sujeto en la oración "María canta"?',options:['Canta','María','María canta','La'],answerIndex:1,explain:'María realiza la acción.'},
  {id:'L2-10',level:2,category:'Matemáticas',prompt:'¿Cuánto es 100 - 58?',options:['32','42','48','52'],answerIndex:1,explain:'100 menos 58 es 42.'},
  {id:'L2-11',level:2,category:'Ciencias',prompt:'¿Cuál es la parte más externa de la Tierra?',options:['Núcleo','Manto','Corteza','Litosfera'],answerIndex:2,explain:'La corteza es la capa externa.'},
  {id:'L2-12',level:2,category:'Lengua',prompt:'Selecciona la palabra con tilde.',options:['Camion','Television','Bebé','Jardin'],answerIndex:2,explain:'"Bebé" lleva tilde.'},
  // Nivel 3
  {id:'L3-01',level:3,category:'Matemáticas',prompt:'¿Cuál es la raíz cuadrada de 144?',options:['10','11','12','13'],answerIndex:2,explain:'La raíz cuadrada de 144 es 12.'},
  {id:'L3-02',level:3,category:'Ciencias',prompt:'¿Quién propuso la teoría de la relatividad?',options:['Newton','Einstein','Galileo','Bohr'],answerIndex:1,explain:'Albert Einstein formuló la relatividad.'},
  {id:'L3-03',level:3,category:'Lengua',prompt:'¿Cuál es el sujeto tácito en "Vamos al parque"?',options:['Nosotros','Vamos','Parque','Al'],answerIndex:0,explain:'Se sobreentiende "nosotros".'},
  {id:'L3-04',level:3,category:'Matemáticas',prompt:'¿Cuál es el valor de π aproximado a dos decimales?',options:['3.12','3.14','3.16','3.18'],answerIndex:1,explain:'π ≈ 3.14.'},
  {id:'L3-05',level:3,category:'Ciencias',prompt:'¿Qué órgano produce la insulina?',options:['Cerebro','Páncreas','Hígado','Estómago'],answerIndex:1,explain:'El páncreas produce insulina.'},
  {id:'L3-06',level:3,category:'Lengua',prompt:'Identifica la oración compuesta.',options:['Llueve mucho.','Quiero que vengas.','El gato duerme.','Canta bonito.'],answerIndex:1,explain:'Contiene dos verbos: "quiero" y "vengas".'},
  {id:'L3-07',level:3,category:'Matemáticas',prompt:'¿Cuánto es 3/4 + 1/2?',options:['5/4','3/8','1/4','3/2'],answerIndex:0,explain:'Común denominador 4: 3/4 + 2/4 = 5/4.'},
  {id:'L3-08',level:3,category:'Ciencias',prompt:'¿Qué parte de la célula contiene la información genética?',options:['Mitocondria','Citoplasma','Núcleo','Ribosoma'],answerIndex:2,explain:'El núcleo guarda el ADN.'},
  {id:'L3-09',level:3,category:'Lengua',prompt:'¿Cuál es el participio del verbo "imprimir"?',options:['Imprimido','Impreso','Imprimiendo','Imprimo'],answerIndex:1,explain:'Participio irregular: impreso.'},
  {id:'L3-10',level:3,category:'Matemáticas',prompt:'¿Cuánto es el factorial de 5?',options:['60','100','120','720'],answerIndex:2,explain:'5! = 120.'},
  {id:'L3-11',level:3,category:'Ciencias',prompt:'¿Cómo se llama el cambio de líquido a gas?',options:['Fusión','Evaporación','Sublimación','Condensación'],answerIndex:1,explain:'Líquido → gas es evaporación.'},
  {id:'L3-12',level:3,category:'Lengua',prompt:'Selecciona la oración en voz pasiva.',options:['El perro persigue al gato.','El gato es perseguido por el perro.','El perro corre rápido.','El gato se esconde.'],answerIndex:1,explain:'El sujeto recibe la acción: "es perseguido".'}
];

function cryptoRandom(max){
  if(globalThis.crypto && crypto.getRandomValues){
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % max;
  }
  return Math.floor(Math.random()*max);
}

export function getRandomQuestion(level, usedIds=new Set()){
  const pool = QUESTION_BANK.filter(q=>q.level===level && !usedIds.has(q.id));
  if(pool.length===0) return null;
  const idx = cryptoRandom(pool.length);
  return pool[idx];
}
