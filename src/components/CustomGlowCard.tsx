// import React from "react";

// const CustomGlowCard = () => {
//   return <div>CustomGlowCard</div>;
// };

// export default CustomGlowCard;

// import { useEffect } from "react";
// import { motion } from "framer-motion";

// interface CustomGlowCardProps {
//   children: React.ReactNode;
//   identifier: string;
// }

// const CustomGlowCard: React.FC<CustomGlowCardProps> = ({
//   children,
//   identifier,
// }) => {
//   useEffect(() => {
//     const container = document.querySelector(`.glow-container-${identifier}`);
//     const cards = document.querySelectorAll(`.glow-card-${identifier}`);

//     const config = {
//       proximity: 50,
//       spread: 100,
//       blur: 15,
//       gap: 20,
//       opacity: 0,
//     };

//     const updateGlow = (event: MouseEvent) => {
//       cards.forEach((card) => {
//         const cardEl = card as HTMLElement;
//         const bounds = cardEl.getBoundingClientRect();

//         if (
//           event.x > bounds.left - config.proximity &&
//           event.x < bounds.right + config.proximity &&
//           event.y > bounds.top - config.proximity &&
//           event.y < bounds.bottom + config.proximity
//         ) {
//           cardEl.style.setProperty("--active", "1");
//         } else {
//           cardEl.style.setProperty("--active", config.opacity.toString());
//         }

//         const centerX = bounds.left + bounds.width / 2;
//         const centerY = bounds.top + bounds.height / 2;
//         let angle =
//           (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
//         angle = angle < 0 ? angle + 360 : angle;

//         cardEl.style.setProperty("--start", `${angle + 90}`);
//       });
//     };

//     document.body.addEventListener("pointermove", updateGlow);

//     return () => {
//       document.body.removeEventListener("pointermove", updateGlow);
//     };
//   }, [identifier]);

//   return (
//     <motion.div
//       className={`glow-container-${identifier} glow-container`}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//     >
//       <motion.article
//         className={`glow-card glow-card-${identifier} cursor-pointer border border-[#2a2e5a] relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full p-5 shadow-lg`}
//         whileHover={{ scale: 1.05 }}
//       >
//         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
//         {children}
//       </motion.article>
//     </motion.div>
//   );
// };

// export default CustomGlowCard;

"use client";

import { useEffect } from "react";

interface CustomGlowCardProps {
  children: React.ReactNode;
  identifier: string;
}
const CustomGlowCard: React.FC<CustomGlowCardProps> = ({
  children,
  identifier,
}) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: any) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", 1);
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", ANGLE + 90);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      CONTAINER?.style.setProperty("--gap", CONFIG.gap);
      CONTAINER?.style.setProperty("--blur", CONFIG.blur);
      CONTAINER?.style.setProperty("--spread", CONFIG.spread);
      CONTAINER?.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default CustomGlowCard;
