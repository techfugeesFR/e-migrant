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
        "changeLang" : "Changer de langue",
        list: {  title: "List" , titlePage: "Employée", map: "Carte", link:  "Listes", filters : "Filtres", textFormInputSearch: "Rechercher" }

      },
      "arabe": {
        "news": "Blababla",
        "home": "le titre de la page accueil",
        "viewService" : "deuxieme lien dans le menu",
        "viewRequest" : "troisieme lien dans le menu",
        "notification": "notification"

      }
    }
  }
});
