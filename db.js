const db = {
  bg:
    'https://super.abril.com.br/wp-content/uploads/2019/05/si_403_oraculo_donkeykong.png',
  title: 'Quiz Donkey Kong Country',
  description:
    'Teste os seus conhecimentos sobre Donkey Kong Country no Alura Quiz',
  questions: [
    {
      image:
        'https://epicplay.com/wp-content/uploads/2018/11/donkey-kong.png.webp',
      title: 'Em Donkey Kong Country, o que os Kremlings roubam?',
      description: '',
      answer: 3,
      alternatives: [
        'A casa na árvore de DK',
        'A Dixie Kong',
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
      alternatives: [
        'Kudgel',
        'Queen B',
        'Master Necky Snr',
        'Really Gnawty',
        'Rei K. Rool',
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
