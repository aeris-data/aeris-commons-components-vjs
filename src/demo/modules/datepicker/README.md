## Exemple d'utilisation

```html
    <aeris-datepicker
        @date="setFromDate"
        :theme="{ emphasis: '#f39c12' }"
        :label="{ 
            key: 'from', 
            lang: { 
                en : { from: 'From' }, 
                fr: { from: 'De' }
            }
        }"
        format="DD/MM/YYYY HH:mm"
        daymin="1948-05-10" daymax="now"
    ></aeris-datepicker>
```

## Propriétés de la balise

`language` :
  - requis : non (si l'attribut est absent, la langue utilisée sera celle du store)
  - type : `String`
  - valeurs possibles : `en`, ou `fr`

`theme` :
  - requis : non (si l'attribut est absent, la couleur sera celle du thème global)
  - type : `Object`
  - utilisation : `:theme="{ emphasis: '#f39c12' }"` (la couleur peut changer si besoin)

`label` :
  - requis : non (si l'attribut est absent, l'input n'aura pas de label à gauche)
  - type : `Object`
  - utilisation : `:label="{ key: 'from', lang: { en : { from: 'From' }, fr: { from: 'De' } } }"`

> **NB :** La valeur de la `key` doit être la même que celle des clés des traductions (ici : `from`).

`format`: format dans lequel renvoyer la date choisie
    - requis : non
    - valeurs possibles : `DD/MM/YYYY` `DD/MM/YYYY HH:mm` 
    - utilisation : `format="DD/MM/YYYY HH:mm"`

> **NB :** si vous ajoutez des heures dans le format (`HH:mm`), alors l'utilisateur pourra sélectionner les heures et minutes dans le datepicker.

`daymin`: le jour par lequel commence le calendrier
  - requis: non
  - format: `YYYY-MM-DD`
  - valeur: par défaut `1970-01-01`

`daymax`: le dernier jour du calendrier
  - requis: non
  - format: `YYYY-MM-DD`
  - valeur: peut prendre la valeur `now`
  - par défaut prend la valeur **"ajourd'hui + 10 ans"**

## Événements

Écoute l'événement `date` que l'on peut utiliser dans le **parent** pour **récupérer la date sélectionnée**.

Ex : 

```html
<!-- ... -->

<!-- template -->
<aeris-datepicker @date="setFromDate"></aeris-datepicker>

<!-- ... -->

<!-- scripts -->
methods: {
    setFromDate(value) {
      this.fromDate = value;
    }
}

<!-- ... -->
```