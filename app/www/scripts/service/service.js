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
        list: {  title: "Liste" , titlePage: "Employées", map: "Carte", link:  "Liste", filters : "Filtres par type de compétences", textFormInputSearch: "Rechercher" },
        login: { username: "Nom d'utilisateur", password: "Mot de passe", connect: "Se connecter" }
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
        login: { username: "اسم المستخدم", password: "كلمه السر", connect: "لتسجيل الدخول" }
      }
    }
  }
});
