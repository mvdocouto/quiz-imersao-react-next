const db = {
  bg: 'https://wallpapercave.com/wp/fHGE4YU.jpg',
  title: 'Quiz Donkey Kong Country',
  description:
    'Teste os seus conhecimentos sobre Donkey Kong Country no Alura Quiz',
  questions: [
    {
      image:
        'https://epicplay.com/wp-content/uploads/2018/11/donkey-kong.png.webp',
      title: 'Em Donkey Kong Country, o que os Kremlings roubam?',
      description: '',
      answer: 2,
      alternatives: [
        'A casa na árvore de DK',
        'O barril do Diddy',
        'Hoard Banana',
        'O Enguarde',
      ],
    },
    {
      image:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/donkey-kong-country-returns/1/10/Mugly_DKCR.jpg',
      title: 'Qual desses chefes não tem em Donkey Kong Country?',
      description: '',
      answer: 0,
      alternatives: ['Kudgel', 'Queen B', 'Really Gnawty', 'Rei K. Rool'],
    },
    {
      image:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/donkey-kong-country-returns/1/10/Mugly_DKCR.jpg',
      title: 'O que deve ser entregue ao Blue um dos Irmãos Ursos?',
      description: '',
      answer: 3,
      alternatives: ['Um espelho', 'Skis', 'Caixa dos chocolates', 'Presente'],
    },
    {
      image:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/donkey-kong-country-returns/1/10/Mugly_DKCR.jpg',
      title: 'Qual é o nome do último chefe de Donkey Kong Country Returns?',
      description: '',
      answer: 1,
      alternatives: ['Tiki Goons', 'Tiki Tong', 'King of Cling', 'Big Zings'],
    },
    {
      image:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/donkey-kong-country-returns/1/10/Mugly_DKCR.jpg',
      title:
        'Em Dokey Kong Country Tropical Freeze, que personagem não é jogável?',
      description: '',
      answer: 3,
      alternatives: ['Donkey Kong', 'Diddy', 'Cranky Kong', 'Funky Kong'],
    },
    {
      image:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/donkey-kong-country-returns/1/10/Mugly_DKCR.jpg',
      title: 'Qual o motivo para Capitain K. Rool raptar Donkey Kong em DKC2?',
      description: '',
      answer: 3,
      alternatives: [
        'Ele queria comê-lo já que no mar não havia comida boa',
        'Ele queria que Donkey Kong fosse um pirata e escondesse as bananas no meio de uma ilha',
        'Ele queria que o macaco andasse na prancha e fosse devorado pelo Big Alligator Kong',
        'Ele exigia a Banana Hoard de volta em troca do Kong raptado',
      ],
    },
  ],
  external: [''],
  theme: {
    colors: {
      primary: '#FFD700',
      secondary: '#EE976D',
      terciary: '#F90F03',
      mainBg: '#083719',
      textColor: '#000000',
      contrastText: '#FFFFFF',
      wrong: '#FF5722',
      success: '#4CAF50',
    },
    borderRadius: '4px',
  },
};

export default db;
