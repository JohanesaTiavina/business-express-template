# Pack Business Express Template

Template landing page premium, responsive et réutilisable pour vendre rapidement le **Pack Business Express**.

## Contenu

- `index.html` : structure complète de la page.
- `style.css` : design responsive, couleurs, cards, galerie, formulaire.
- `script.js` : menu mobile, animations, bouton retour haut, formulaire WhatsApp.
- `assets/` : dossier prévu pour les images du client.

## Sections incluses

1. Navigation sticky
2. Hero section avec CTA WhatsApp
3. Bande de services / types d'événements
4. Services
5. Pourquoi choisir ce prestataire
6. Process en 3 étapes
7. Galerie
8. Statistiques rassurantes
9. Témoignages
10. CTA intermédiaire
11. FAQ
12. Formulaire de demande de devis
13. Footer
14. CTA mobile sticky

## Adaptation rapide pour un client

### 1. Modifier les informations dans `script.js`

```js
const BUSINESS_CONFIG = {
  businessName: "Nom du client",
  whatsappNumberInternational: "261340000000",
  defaultWhatsappMessage:
    "Bonjour, je souhaite demander un devis.",
};
```

Le numéro doit être au format international sans `+`.

### 2. Modifier dans `index.html`

Cherche et remplace :

- `Saveurs Miakatra`
- `Traiteur événementiel`
- `+261 34 00 000 00`
- les textes des services
- les témoignages
- les liens Facebook / téléphone

### 3. Remplacer les visuels

Pour aller vite, tu peux garder les blocs visuels en CSS.
Pour un vrai client, remplace les `.gallery-photo` par des `<img>` si tu as ses photos.

Exemple :

```html
<img src="assets/photo1.jpg" alt="Buffet mariage de Saveurs Miakatra">
```

Puis adapte le CSS si besoin.

## Déploiement rapide

### Option simple

Ouvre `index.html` dans le navigateur.

### Option professionnelle

Déploie le dossier sur :

- Netlify
- Vercel
- GitHub Pages

## Formulaire

Par défaut, le formulaire ouvre WhatsApp avec les informations préremplies.

Pour Google Forms :

1. Crée un Google Form.
2. Mets le lien du formulaire dans le bouton "Remplir le formulaire".
3. Ou remplace le bloc `leadForm.addEventListener` dans `script.js`.

## Conseils de vente

Ne vends pas "un site web".
Vends :

> Une page professionnelle reliée à WhatsApp pour recevoir plus de demandes de devis.

Phrase de livraison :

> Livraison en 72h à 5 jours après réception de l'acompte et des contenus nécessaires.

Prix conseillé :

- Pack Business Express : 1.200.000 Ar
- Acompte : 720.000 Ar
- Démo : 360.000 Ar
- Livraison : 120.000 Ar
