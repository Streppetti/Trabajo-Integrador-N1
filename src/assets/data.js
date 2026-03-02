//IMPORTACIÓN DE AVATARES
import avatarBoris from './media/items/boris/Boris_Avatar.jpg';
import avatarBuhonero from './media/items/buhonero/Buhonero.png';
import avatarPokemart from './media/items/pokemart/PokeMart.png';
import avatarTemmie from './media/items/temmie/temmie.png';
import avatarTerry from './media/items/terry/Terry.jpg';

//IMPORTACIÓN DE ITEMS

// Items de Boris
import doranRing from './media/items/boris/Doran_Ring.png';
import healthPotion from './media/items/boris/Health_Potion.png';
import tiamat from './media/items/boris/Tiamat.png';
import trinityForce from './media/items/boris/Trinity_Force.png';

// Items del Buhonero
import hierbaVerde from './media/items/buhonero/Hierba_Verde.jpg';
import sg09r from './media/items/buhonero/SG09R.png';
import srm1903 from './media/items/buhonero/SR M1903.jpg';
import municion from './media/items/buhonero/municion.png';

// Items del Pokemart
import fullRestore from './media/items/pokemart/Full_Restore.png';
import pokeBall from './media/items/pokemart/PokeBall.png';
import pokeDoll from './media/items/pokemart/PokeDoll.png';
import potionPoke from './media/items/pokemart/Potion.png';

// Items de Temmie
import temmieArmor from './media/items/temmie/temmie_armor.jpg';
import temmieFlakes from './media/items/temmie/temmie_flakes.jpg';
import uni from './media/items/temmie/uni.jpg';

// Items de Terry
import contenedorCorazon from './media/items/terry/Contenedor_Corazón.png';
import cristalValor from './media/items/terry/Cristal_Valor.png';
import ocarinaTime from './media/items/terry/Ocarina_of_Time.png';
import pocionVida from './media/items/terry/Pocion_Vida.png';

export const vendedores = [
    {
        id: "buhonero",
        nombre: "El Buhonero",
        avatar: avatarBuhonero,
        saludo: "What're ya buyin', stranger?",
        compraExitosa: "Heh heh heh... Thank you!",
        sinDinero: "Not enough cash, stranger!",
        catalogo: [
        { id: 1, nombre: "Hierba Verde", precio: 50, imagen: hierbaVerde },
        { id: 2, nombre: "Munición", precio: 150, imagen: municion },
        { id: 3, nombre: "SG-09 R", precio: 800, imagen: sg09r },
        { id: 4, nombre: "SR-M1903", precio: 3150, imagen: srm1903 }
        ]
    },
    {
        id: "beedle",
        nombre: "Terry",
        avatar: avatarTerry,
        saludo: "¡OOOHH! ¡Bieeenvenido a mi tienda!",
        compraExitosa: "¡THAAANK YOU!",
        sinDinero: "¿Eh? No tienes rupias... Qué decepción.",
        catalogo: [
        { id: 1, nombre: "Pocion de Vida", precio: 40, imagen: pocionVida  },
        { id: 2, nombre: "Cristal de Valor", precio: 500, imagen: cristalValor },
        { id: 3, nombre: "Contenedor de Corazon", precio: 1500, imagen: contenedorCorazon },
        { id: 4, nombre: "Ocarina del Tiempo", precio: 3200, imagen: ocarinaTime }
        ]
    },
    {
        id: "boris",
        nombre: "Boris",
        avatar: avatarBoris,
        saludo: "¡Bienvenido a la tienda del invocador! ¿Qué te puedo ofrecer hoy?",
        compraExitosa: "Una excelente elección para aplastar a tus enemigos.",
        sinDinero: "Vuelve cuando tengas algo de valor.",
        catalogo: [
        { id: 1, nombre: "Pocion de Vida", precio: 50, imagen: healthPotion },
        { id: 2, nombre: "Anillo de Doran", precio: 350, imagen: doranRing },
        { id: 3, nombre: "Tiamat", precio: 1200, imagen: tiamat },
        { id: 4, nombre: "Fuerza de la Trinidad", precio: 3333, imagen: trinityForce }
        ]
    },
    {
        id: "pokemart",
        nombre: "Tienda Pokemon",
        avatar: avatarPokemart,
        saludo: "¡Hola! ¡Te damos la bienvenida a nuestra Tienda Pokémon! ¿En qué te puedo ayudar?",
        compraExitosa: "¡Aquí tienes! ¡Esperamos volver a verte!",
        sinDinero: "Lo siento, pero no tienes suficiente dinero.",
        catalogo: [
        { id: 1, nombre: "Poké Ball", precio: 200, imagen: pokeBall },
        { id: 2, nombre: "Poción", precio: 300, imagen: potionPoke },
        { id: 3, nombre: "Poke-Doll", precio: 1000, imagen: pokeDoll },
        { id: 4, nombre: "Restaurar Todo", precio: 2200, imagen: fullRestore }
        ]
    },
    {
        id: "temmie",
        nombre: "Temmie",
        avatar: avatarTemmie,
        saludo: "hOI!!! soy temmie! i bienbenido a la... TEM SHOP!!!",
        compraExitosa: "¡mUChAs gRaCiAs! ¡aHoRa pUeDo iR a lA uNi!",
        sinDinero: "¡nO!! ¡tU nO tEnEr mUnChI sUfIcIeNtE!",
        catalogo: [
        { id: 1, nombre: "Tem Flake (ofreta)", precio: 1, imagen: temmieFlakes },
        { id: 2, nombre: "Tem Flake (caro)", precio: 20, imagen: temmieFlakes },
        { id: 3, nombre: "Pagar Universidad", precio: 1000, imagen: uni },
        { id: 4, nombre: "ARMADURA tem", precio: 9999, imagen: temmieArmor }

        ]
    },

    {
        id: "el_profe",
        nombre: "El Arquitecto",
        avatar: "🔌",
        isSecret: true,
        saludo: "Has descubierto la verdad... ¿Estás listo para el conocimiento absoluto?",
        compraExitosa: "Procesando...", 
        sinDinero: "El conocimiento cuesta caro.",
        catalogo: [
        { id: 1, nombre: "Licencia de WinRAR", precio: 500 },
        { id: 2, nombre: "Poción de Seniority", precio: 1000 },
        { id: 3, nombre: "Pergamino Antiguo", precio: 9999 }
        ]
    }
];