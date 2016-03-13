app.service('Translate', function() {
  this.get = function() {
    return {
      "france": {
        "news": "Actualitées",
        "home": "Accueil",
        "viewService" : "Voir les services",
        "viewRequest" : "Voir les demandes",
        "notification" : "Notification",
        "profil": "Profil",
        "message" : "Message",
        "setting": "Paramétres",
        "changeLang" : "Langue",
        list: {  title: "Liste" , titlePage: "Employés", map: "Carte", link:  "Liste", filters : "Filtres par type de compétences", textFormInputSearch: "Rechercher" },
        login: { username: "Nom d'utilisateur", password: "Mot de passe", connect: "Se connecter", 'register': "S'inscrire" },
        newsT: {
          titre: "500 personnes en soutien aux réfugiés au Mans",
          "contenu": "JEAN-CLAUDE BOULARD REÇU PAR LAURENT FABIUS AU SUJET DES RÉFUGIÉS… Le maire du Mans Jean-Claude Boulard a été reçu hier par le ministre des affaires étrangères Laurent Fabius au sujet des réfugiés. Cela fait un an que la mairie travaille sur l'accueil de 35 syriens, menacés dans leur pays. Et parmi eux, la famille d'un cardiologue syrien basé au Mans, le docteur Aleid. Selon la ville,  le ministre a publiquement confirmé sa volonté d'accélérer les dossiers en travaillant avec le ministre de l'intérieur Bernard Cazeneuve. 500 PERSONNES RASSEMBLÉES PLACE DE LA RÉPUBLIQUE EN SOUTIEN AUX RÉFUGIÉS… Au Mans, 500 personnes étaient rassemblées place de la République en fin d'après-midi hier, pour apporter leur soutien aux réfugiés. Un logement, des cours de français ou divers dons… Le mot d'ordre était \"solidarité\" avec un slogan \"Nous sommes tous migrants\". Un rassemblement à l'initiative de \"la ligue des droits de l'homme\" et de \"réseau d'éducation sans frontières\". Un texte de soutien a par ailleurs rassemblé 300 signatures",
        }
      },
      "arabe": {
        "news": "أخبار",
        "home": "ترحيب",
        "viewService" : "رؤية الخدمات",
        "viewRequest" : "عرض طلبات",
        "notification" : "إعلام",
        "profil": "ملف تعريف",
        "message" : "رسالة",
        "setting": "المعلمات",
        "changeLang" : "لغة",
        list: {  title: "قائمة" , titlePage: "العاملين", map: "خريطة", link:  "قائمة", filters : "تصفية حسب نوع الاختصاص", textFormInputSearch: "بحث" },
        login: { username: "اسم المستخدم", password: "كلمه السر", connect: "لتسجيل الدخول", register: "تسجيل" },
        newsT: {
          titre: " لدعم اللاجئين في لومان500",
          "contenu": 'جان كلود BOULARD تلقتها لوران فابيوس عن اللاجئين ... وكان في استقبال رئيس بلدية لومان جان كلود Boulard أمس وزير الخارجية لوران فابيوس على اللاجئين. لمدة عام أن البلدية تعمل على منزل 35 السوريين، للتهديد في بلدانهم. ومنهم عائلة طبيب القلب سوري مقيم في لومان، والدكتور العيد. طبقا للمدينة، أكد وزير علنا ​​التزامها تسريع مجلدات العمل مع وزير الداخلية برنار Cazeneuve. 500 شخص تجمعوا في مكان من دعم الجمهورية اللاجئين ... في لومان، تجمع 500 شخص في ساحة الجمهورية في وقت متأخر من بعد ظهر أمس، لتقديم الدعم للاجئين. الإسكان، دورات اللغة الفرنسية أو تبرعات أخرى ... كلمة كان \ "التضامن \" مع \ شعار "كلنا المهاجرين. \" مظاهرة في مبادرة \ "رابطة حقوق الإنسان \" و \ "التعليم بلا حدود شبكة \". نص الدعم قامت أيضا بجمع 300 توقيعا'
        }
      }
    }
  }
});
