export interface CharacterStats {
  fuerza: number;
  velocidad: number;
  tecnica: number;
  resistencia: number;
  inteligencia: number;
}

export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  role: 'pilar' | 'luna';
  subRole: string;
  abilityType: 'Respiración' | 'Técnica de Sangre';
  abilityName: string;
  element: string;
  status: 'Activo' | 'Fallecido' | 'Retirado';
  seiyuu: string;
  description: string;
  quote: string;
  stats: CharacterStats;
  themeColor: string; // Hex color for box-shadow aura
}

export const CHARACTERS: Character[] = [
  {
    id: 'giyu-tomioka',
    name: 'Giyu Tomioka',
    japaneseName: '冨岡 義勇',
    role: 'pilar',
    subRole: 'Pilar del Agua',
    abilityType: 'Respiración',
    abilityName: 'Respiración del Agua',
    element: 'Roca',
    status: 'Activo',
    seiyuu: 'Takahiro Sakurai',
    description: 'El primer pilar que conoció Tanjiro. Es un hombre de pocas palabras, con una actitud fría y reservada, pero posee un profundo sentido de la justicia y compasión. Desarrolló la Undécima Postura de la Respiración del Agua: Calma.',
    quote: 'No le des a otros el poder de decidir sobre tu propia vida o muerte. No te rebajes de esa manera.',
    stats: {
      fuerza: 82,
      velocidad: 85,
      tecnica: 90,
      resistencia: 84,
      inteligencia: 80
    },
    themeColor: '#00a2ff'
  },
  {
    id: 'kyojuro-rengoku',
    name: 'Kyojuro Rengoku',
    japaneseName: '煉獄 杏寿郎',
    role: 'pilar',
    subRole: 'Pilar de la Flama',
    abilityType: 'Respiración',
    abilityName: 'Respiración de la Flama',
    element: 'Flama',
    status: 'Fallecido',
    seiyuu: 'Satoshi Hino',
    description: 'Poseedor de un carisma y entusiasmo inquebrantables, Kyojuro defendía a los débiles con un honor indomable. Su increíble fuerza de voluntad y maestría en la espada protegieron a todos los pasajeros del Tren Infinito.',
    quote: '¡Enciende tu corazón! Ve más allá de tus límites. No importa qué tan débil te sientas, mantén tu espíritu ardiendo.',
    stats: {
      fuerza: 90,
      velocidad: 88,
      tecnica: 86,
      resistencia: 92,
      inteligencia: 85
    },
    themeColor: '#ff5e00'
  },
  {
    id: 'shinobu-kocho',
    name: 'Shinobu Kocho',
    japaneseName: '胡蝶 しのぶ',
    role: 'pilar',
    subRole: 'Pilar del Insecto',
    abilityType: 'Respiración',
    abilityName: 'Respiración del Insecto',
    element: 'Insecto',
    status: 'Fallecido',
    seiyuu: 'Saori Hayami',
    description: 'A pesar de no tener la fuerza física para decapitar a un demonio, Shinobu es una farmacéutica experta que elimina demonios usando venenos letales a base de glicinias. Oculta su profunda ira tras una sonrisa perenne.',
    quote: 'Una vez que decido derrotar a un demonio, lo hago sin dudar. Aunque mi cuerpo sea pequeño, mi veneno es letal.',
    stats: {
      fuerza: 45,
      velocidad: 96,
      tecnica: 95,
      resistencia: 60,
      inteligencia: 98
    },
    themeColor: '#382742'
  },
  {
    id: 'tengen-uzui',
    name: 'Tengen Uzui',
    japaneseName: '宇髄 天元',
    role: 'pilar',
    subRole: 'Pilar del Sonido',
    abilityType: 'Respiración',
    abilityName: 'Respiración del Sonido',
    element: 'Sonido',
    status: 'Retirado',
    seiyuu: 'Katsuyuki Konishi',
    description: 'Un ex-shinobi extravagante que valora la vida de sus esposas y de los humanos por encima de todo. Utiliza partituras musicales para predecir los movimientos enemigos en combate y empuña dos espadas gigantescas.',
    quote: '¡Vamos a hacerlo de la manera más extravagante posible! Mi música de combate ya ha comenzado.',
    stats: {
      fuerza: 89,
      velocidad: 92,
      tecnica: 82,
      resistencia: 88,
      inteligencia: 84
    },
    themeColor: '#ffbb00'
  },
  {
    id: 'mitsuri-kanroji',
    name: 'Mitsuri Kanroji',
    japaneseName: '甘露寺 蜜璃',
    role: 'pilar',
    subRole: 'Pilar del Amor',
    abilityType: 'Respiración',
    abilityName: 'Respiración del Amor',
    element: 'Amor',
    status: 'Fallecido',
    seiyuu: 'Kana Hanazawa',
    description: 'Posee una densidad muscular ocho veces superior a la de un humano normal, lo que le da una fuerza descomunal a pesar de su apariencia tierna. Empuña una espada flexible similar a un látigo de gran velocidad.',
    quote: '¡Solo quería encontrar a un hombre fuerte que me protegiera, pero ahora yo protegeré a los que amo!',
    stats: {
      fuerza: 92,
      velocidad: 86,
      tecnica: 85,
      resistencia: 86,
      inteligencia: 70
    },
    themeColor: '#ff5c9d'
  },
  {
    id: 'muichiro-tokito',
    name: 'Muichiro Tokito',
    japaneseName: '時透 無一郎',
    role: 'pilar',
    subRole: 'Pilar de la Niebla',
    abilityType: 'Respiración',
    abilityName: 'Respiración de la Niebla',
    element: 'Niebla',
    status: 'Fallecido',
    seiyuu: 'Kengo Kawanishi',
    description: 'Un prodigio que se convirtió en Pilar tan solo dos meses después de tomar la espada. Solía perderse constantemente en sus pensamientos debido a una amnesia traumática, pero recuperó su agudo espíritu de lucha.',
    quote: 'Al igual que la niebla que se disipa, la verdad detrás de mis recuerdos finalmente se ha revelado.',
    stats: {
      fuerza: 80,
      velocidad: 90,
      tecnica: 92,
      resistencia: 78,
      inteligencia: 88
    },
    themeColor: '#39c5bb'
  },
  {
    id: 'gyomei-himejima',
    name: 'Gyomei Himejima',
    japaneseName: '悲鳴嶼 行冥',
    role: 'pilar',
    subRole: 'Pilar de la Roca',
    abilityType: 'Respiración',
    abilityName: 'Respiración de la Roca',
    element: 'Roca',
    status: 'Fallecido',
    seiyuu: 'Tomokazu Sugita',
    description: 'El pilar más fuerte de la organización actual. A pesar de ser ciego, Gyomei tiene una percepción espacial absoluta y combate con una devastadora combinación de hacha y bola de pinchos unidas por una cadena de hierro.',
    quote: 'Aunque este mundo esté lleno de dolor y almas en pena, debemos mantener la fe y golpear con la fuerza de la roca.',
    stats: {
      fuerza: 100,
      velocidad: 78,
      tecnica: 94,
      resistencia: 98,
      inteligencia: 92
    },
    themeColor: '#bfa054'
  },
  {
    id: 'sanemi-shinazugawa',
    name: 'Sanemi Shinazugawa',
    japaneseName: '不死川 実弥',
    role: 'pilar',
    subRole: 'Pilar del Viento',
    abilityType: 'Respiración',
    abilityName: 'Respiración del Viento',
    element: 'Agua',
    status: 'Activo',
    seiyuu: 'Tomokazu Seki',
    description: 'Agresivo, brusco y cubierto de cicatrices. Sanemi posee una sangre especial sumamente rara (Marechi) que emborracha a los demonios que la huelen. Su estilo de combate con el viento es destructivo y violento.',
    quote: '¿Crees que puedes perdonar a los demonios? ¡Los erradicaré a todos de la faz de la tierra con esta ráfaga!',
    stats: {
      fuerza: 91,
      velocidad: 93,
      tecnica: 87,
      resistencia: 90,
      inteligencia: 79
    },
    themeColor: '#5cd699'
  },
  {
    id: 'obanai-iguro',
    name: 'Obanai Iguro',
    japaneseName: '伊黒 小芭内',
    role: 'pilar',
    subRole: 'Pilar de la Serpiente',
    abilityType: 'Respiración',
    abilityName: 'Respiración de la Serpiente',
    element: 'Serpiente',
    status: 'Fallecido',
    seiyuu: 'Kenichi Suzumura',
    description: 'Un guerrero misterioso y estricto que siempre va acompañado de su serpiente Kaburamaru. Desarrolló un estilo de esgrima curvo que le permite deslizar su espada por ángulos imposibles.',
    quote: 'No me importa lo que pienses de mí. Solo confío en Kaburamaru y en mi determinación para proteger a Mitsuri.',
    stats: {
      fuerza: 76,
      velocidad: 88,
      tecnica: 93,
      resistencia: 80,
      inteligencia: 87
    },
    themeColor: '#a64dff'
  },
  {
    id: 'kokushibo',
    name: 'Kokushibo',
    japaneseName: '黒死牟',
    role: 'luna',
    subRole: 'Luna Superior Uno',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Hojas de la Luna Creciente (más Respiración de la Luna)',
    element: 'Luna',
    status: 'Fallecido',
    seiyuu: 'Ryotaro Okiayu',
    description: 'El demonio más poderoso al servicio de Muzan y hermano gemelo del legendario creador de la Respiración Solar, Yoriichi. Mantiene su forma de samurái con seis ojos y empuña una espada orgánica modificada con su carne.',
    quote: 'Durante cuatrocientos años he buscado superar los límites del camino del guerrero. Tu destreza no es rival.',
    stats: {
      fuerza: 99,
      velocidad: 98,
      tecnica: 100,
      resistencia: 99,
      inteligencia: 96
    },
    themeColor: '#ff0077'
  },
  {
    id: 'doma',
    name: 'Doma',
    japaneseName: '童磨',
    role: 'luna',
    subRole: 'Luna Superior Dos',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Crioquinesis de Loto Congelado',
    element: 'Hielo',
    status: 'Fallecido',
    seiyuu: 'Mamoru Miyano',
    description: 'Líder de un culto religioso falso. Doma es incapaz de sentir cualquier emoción humana real, ocultándose tras una máscara alegre y carismática. Su técnica de sangre manipula hielo en polvo extremadamente tóxico al respirarse.',
    quote: '¿No crees que la muerte bajo mis manos es el mayor acto de salvación? Todos seremos felices juntos en mi interior.',
    stats: {
      fuerza: 95,
      velocidad: 97,
      tecnica: 96,
      resistencia: 95,
      inteligencia: 94
    },
    themeColor: '#00e5ff'
  },
  {
    id: 'akaza',
    name: 'Akaza',
    japaneseName: '猗窩座',
    role: 'luna',
    subRole: 'Luna Superior Tres',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Despliegue de Aguja de Brújula (Muerte Destructiva)',
    element: 'Sangre',
    status: 'Fallecido',
    seiyuu: 'Akira Ishida',
    description: 'Un guerrero obsesionado con volverse más fuerte y combatir oponentes dignos. Detesta a los débiles. Su técnica de sangre le permite detectar el espíritu de combate de su rival con precisión absoluta a través de una brújula en el suelo.',
    quote: 'Conviértete en demonio tú también. Si no lo haces, envejecerás y morirás. Entra al reino de la fuerza eterna.',
    stats: {
      fuerza: 97,
      velocidad: 96,
      tecnica: 94,
      resistencia: 96,
      inteligencia: 86
    },
    themeColor: '#ff00d0'
  },
  {
    id: 'hantengu',
    name: 'Hantengu',
    japaneseName: '半天狗',
    role: 'luna',
    subRole: 'Luna Superior Cuatro',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Manifestación de Clones Emocionales',
    element: 'Clones',
    status: 'Fallecido',
    seiyuu: 'Toshio Furukawa',
    description: 'Cobarde y paranoico en su forma original, pero su técnica de sangre le permite manifestar clones poderosos basados en sus emociones extremas: Sekido (Ira), Karaku (Placer), Aizetsu (Tristeza), Urogi (Gozo) y Zohakuten (Odio).',
    quote: '¡No me intimiden! ¡Los malvados que me persiguen y atormentan deben ser destruidos!',
    stats: {
      fuerza: 88,
      velocidad: 89,
      tecnica: 95,
      resistencia: 97,
      inteligencia: 82
    },
    themeColor: '#59ff00'
  },
  {
    id: 'gyokko',
    name: 'Gyokko',
    japaneseName: '玉壺',
    role: 'luna',
    subRole: 'Luna Superior Cinco',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Jarrones de Escamas Asesinas y Criaturas Acuáticas',
    element: 'Porcelana',
    status: 'Fallecido',
    seiyuu: 'Kohsuke Toriumi',
    description: 'Un demonio grotesco que habita dentro de jarrones ornamentales y se considera a sí mismo un artista supremo del asesinato. Puede teletransportarse entre jarrones y transmutar lo que toca en peces.',
    quote: '¡Miren mi obra de arte! ¡La belleza de la muerte humana capturada eternamente en mi porcelana!',
    stats: {
      fuerza: 86,
      velocidad: 88,
      tecnica: 91,
      resistencia: 87,
      inteligencia: 80
    },
    themeColor: '#d488ff'
  },
  {
    id: 'daki-gyutaro',
    name: 'Daki y Gyutaro',
    japaneseName: '堕姫 • 妓夫太郎',
    role: 'luna',
    subRole: 'Luna Superior Seis',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Fajas de Obi Cortantes y Guadañas de Sangre Venenosa',
    element: 'Veneno',
    status: 'Fallecido',
    seiyuu: 'Miyuki Sawashiro & Ryota Osaka',
    description: 'Dos hermanos que comparten el título de la sexta luna superior. Daki se infiltra como una hermosa cortesana usando fajas cortantes, mientras que Gyutaro, oculto en su interior, ataca con mortales guadañas de veneno.',
    quote: 'Siempre compartiremos todo: el dolor, la comida, la vida y la venganza. ¡Nadie puede separarnos!',
    stats: {
      fuerza: 90,
      velocidad: 91,
      tecnica: 89,
      resistencia: 94,
      inteligencia: 78
    },
    themeColor: '#00ff66'
  },
  {
    id: 'enmu',
    name: 'Enmu',
    japaneseName: '魘夢',
    role: 'luna',
    subRole: 'Luna Inferior Uno',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Susurros de Sueño Forzado',
    element: 'Sueño',
    status: 'Fallecido',
    seiyuu: 'Daisuke Hirakawa',
    description: 'Un sádico demonio que adora ver la desesperación humana cuando sus hermosos sueños se convierten en pesadillas. Fue capaz de fusionar su cuerpo entero con la estructura metálica del Tren Infinito.',
    quote: 'Dormir bajo mi abrazo es tan dulce. Deja que tus sueños se conviertan en tu hermoso final.',
    stats: {
      fuerza: 72,
      velocidad: 75,
      tecnica: 86,
      resistencia: 85,
      inteligencia: 84
    },
    themeColor: '#00f7ff'
  },
  {
    id: 'rui',
    name: 'Rui',
    japaneseName: '累',
    role: 'luna',
    subRole: 'Luna Inferior Cinco',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre: Jaula de Hilos de Acero',
    element: 'Araña',
    status: 'Fallecido',
    seiyuu: 'Koki Uchiyama',
    description: 'Un demonio infantil que vivía en el monte Natagumo. Creó una "familia" falsa forzando a otros demonios a asumir roles y apariencias de araña. Su técnica manipula hilos de acero ultra-resistentes.',
    quote: 'Si no cumples con tu papel como parte de mi familia... te cortaré en pedacitos con mis hilos.',
    stats: {
      fuerza: 70,
      velocidad: 74,
      tecnica: 82,
      resistencia: 80,
      inteligencia: 81
    },
    themeColor: '#ff0033'
  },
  {
    id: 'muzan-kibutsuji',
    name: 'Muzan Kibutsuji',
    japaneseName: '鬼舞辻 無慘',
    role: 'luna',
    subRole: 'Rey de los Demonios',
    abilityType: 'Técnica de Sangre',
    abilityName: 'Técnica de Sangre Suprema: Metamorfosis Demoníaca',
    element: 'Transformación',
    status: 'Activo',
    seiyuu: 'Terashima Takuma',
    description: 'El progenitor de todos los demonios y ser inmortal que ha caminado la tierra por más de mil años. Posee el poder de transformar su cuerpo de formas casi ilimitadas y distribuye autoridad absoluta sobre sus demonios a través del sistema de la Sangre Demoníaca.',
    quote: 'Quiero vivir... Quiero conseguir más poder... Necesito consumir a Tanjiro y obtener la Respiración Solar para conquistar el sol.',
    stats: {
      fuerza: 100,
      velocidad: 99,
      tecnica: 99,
      resistencia: 100,
      inteligencia: 98
    },
    themeColor: '#a000ff'
  }
];
