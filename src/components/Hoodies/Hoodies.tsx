import { motion } from "framer-motion";
import Card from "../Porduct-Card/Card.js";
import Cards from "../../json/hoodiesInfo.js";
import { Link } from "react-router-dom";

function Hoodies() {
  return (
    <div className="w-full px-4 py-8 mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {Cards.map((card, index) => {
          const baseDuration = 0.7;
          const duration = baseDuration - Math.min(index * 0.05, 0.3);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Link
                to={`/hoodie/${index}`} // Ruta con parámetro para el id
                state={{
                  price: card.priceProduct,
                  name: card.nameProduct,
                  imageSrc: card.imageSrc,
                  hoverImageSrc: card.hoverImageSrc,
                  S: card.S,
                  M: card.M,
                  L: card.L,
                  XL: card.XL,
                }}
              >
                <Card
                  imageSrc={card.imageSrc}
                  priceProduct={card.priceProduct}
                  nameProduct={card.nameProduct}
                  hoverImageSrc={card.hoverImageSrc}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Hoodies;
