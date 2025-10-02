import { gsap } from "gsap";
const animations = () => {
  if (document.querySelector("#exercice-animations")) {
    /* ----------------------------------------------
    Exercices JavaScript : animer avec
    la bibliothèque GSAP
   ----------------------------------------------
    Installer GSAP
   ---------------------------------------------- */

    /* -----------------------
    Exercice 1
   -----------------------
    Déplacer l'item 1 de 100px vers la gauche
    durant 3 secondes
   ----------------------- */
    gsap.to("#js-exercice-1", {
      x: -100,
      duration: 3,
    });
    /* -----------------------
    Exercice 2
   -----------------------
    Effectuer une rotation de l'item 2 de 45 degrés
    durant 2 secondes
    après un délai de 2 secondes
   ----------------------- */
    gsap.to("#js-exercice-2", {
      rotate: 45,
      duration: 2,
      delay: 2,
    });
    /* -----------------------
    Exercice 3
   -----------------------
    Changer l'item 3 d'échelle (75%)
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
    gsap.to("#js-exercice-3", {
      scale: 0.75,
      opacity: 0.5,
      duration: 2,
      delay: 1,
    });
    /* -----------------------
    Exercice 4
   -----------------------
    Rétablir l'item 4 DEPUIS une échelle de 75%
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
    gsap.from("#js-exercice-4", {
      scale: 0.75,
      opacity: 0.5,
      duration: 2,
      delay: 1,
    });
    /* -----------------------
    Exercice 5 (timeline)
   -----------------------
    Déplacer l'item 5 de -100px vers la gauche
    durant 3 secondes
    PUIS effectuer une rotation de l'item 5 de 45 degrés
    durant 2 secondes après un délai de 1 seconde
    PUIS déplacer l'item 5 de 100px vers le haut
    durant 2 secondes après un délai de 1 seconde
   ----------------------- */
    const tl5 = gsap.timeline();

    tl5
      .to("#js-exercice-5", {
        x: -100,
        duration: 3,
      })
      .to("#js-exercice-5", {
        rotate: 45,
        duration: 2,
        delay: 1,
      })
      .to("#js-exercice-5", {
        y: 100,
        duration: 2,
        delay: 1,
      });
    /* -----------------------
    Exercice 6 (timeline)
   -----------------------
    Déplacer l'item 6 de 100px vers le bas
    durant 3 secondes
    ET SIMULTANEMENT changer l'item 6 d'échelle (75%)
    durant 5 secondes
   ----------------------- */

    const tl6 = gsap.timeline();

    tl6
      .to("#js-exercice-6", {
        y: 100,
        duration: 3,
      })
      .to(
        "#js-exercice-6",
        {
          scale: 0.75,
          duration: 5,
        },
        "<"
      );

    /* -----------------------
    Exercice 7 (repeat + yoyo)
   -----------------------
    Effectuer une rotation de l'item 7 de 135 degrés
    durant 2 secondes
    avec un easing elastic.out
    et répéter ce mouvement à l'infini
   ----------------------- */
    gsap.to("#js-exercice-7", {
      rotate: 135,
      duration: 2,
      ease: "elastic.out",
      repeat: -1,
      yoyo: true,
    });
    /* -----------------------
    Exercice 8
   -----------------------
    Réaliser une animation libre
    lorsque le bouton est cliqué
   ----------------------- */

    const btn8 = document.querySelector("#js-exercice-8 button");

    btn8.addEventListener("click", () => {
      const tl8 = gsap.timeline({ yoyo: true, repeat: 1 });
      tl8.to("#js-exercice-8", { scale: 0.9, duration: 0.2 }).to(
        "#js-exercice-8",
        {
          backgroundImage: "linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)",
          duration: 0.2,
        },
        "<"
      );
    });
  }
};

export default animations;
