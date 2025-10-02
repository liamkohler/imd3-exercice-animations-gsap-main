# exercices imd3 - animations GSAP

## Prérequis

- Git installé
- NPM installé

## Installation

Cloner le repository git

```
git@github.com:eikon-frontend/imd3-exercice-animations-gsap.git
```

Se rendre dans le dossier du projet, puis installer les dépendances avec NPM

```
cd imd3-exercice-animations-gsap
npm install
```

## Commandes

Compiler la SCSS, aggréger le JS, lancer le serveur et écouter les changements

```
npm run dev
```

Compiler pour la production

```
npm run build
```

## Installation de packages externes

### [GSAP](https://greensock.com/gsap/)

Installer le paquet avec NPM

```
npm install gsap
```

Inclure le JS depuis un fichier JS

```js
import gsap from "gsap";
```

Inclure les éventuels plugins

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```
