import { gsap } from "gsap";
const timelineExercices = () => {
  if (document.querySelector("#exercice-timeline")) {
    /* -----------------------
    Exercice 1
   -----------------------
   Au chargement de la page, animez la boîte:
    1. Déplacement de 150px vers la droite (1s)
    2. Rotation de 180° (0.8s)
    3. Retour à la position et rotation d'origine (1.2s)
   ----------------------- */
    const tl1 = gsap.timeline();
    tl1
      .to("#js-timeline-1", { x: 150, duration: 1 })
      .to("#js-timeline-1", { rotation: 180, duration: 0.8 })
      .to("#js-timeline-1", { x: 0, rotation: 0, duration: 1.2 });
    /* -----------------------
    Exercice 2
   -----------------------
    Au chargement de la page, animez la boîte avec des animations qui se chevauchent:
    1. Augmentation de l'échelle de 1 à 1.5 (1s)
    2. Changement de couleur vers le rouge (0.5s) - démarre 0.3s avant la fin de l'animation précédente
    3. Retour à la taille et couleur d'origine (0.8s)
   ----------------------- */
    const tl2 = gsap.timeline();
    tl2
      .to("#js-timeline-2", { scale: 1.5, duration: 1 })

      .to(
        "#js-timeline-2",
        {
          background: "linear-gradient(90deg, #ff5858 0%, #f09819 100%)",
          duration: 0.5,
        },
        "-=0.3"
      )
      .to("#js-timeline-2", {
        scale: 1,
        background: "linear-gradient(325deg, #a855f7 0%, #db2777 100%)",
        duration: 0.8,
      });
    /* -----------------------
    Exercice 3
   -----------------------
    Au chargement de la page, animez la boîte avec des animations labellisées:
    1. Label "debut" - Déplacement vers le bas de 100px (0.8s)
    2. Label "milieu" - Rotation de 360° (1s)
    3. Animation supplémentaire qui démarre au "milieu" + 0.5s : opacity de 1 à 0.3 puis retour à 1 (1s)
   ----------------------- */
    const tl3 = gsap.timeline();
    tl3
      .to("#js-timeline-3", { y: 100, duration: 0.8 }, "debut")
      .to("#js-timeline-3", { rotation: 360, duration: 1 }, "milieu")
      .to("#js-timeline-3", { opacity: 0.3, duration: 0.5 }, "milieu+=0.5")
      .to("#js-timeline-3", { opacity: 1, duration: 0.5 });
  }
};

export default timelineExercices;
