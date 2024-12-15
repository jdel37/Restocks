import { motion } from "framer-motion";
import First from "../../assets/first.png";
import Second from "../../assets/second.png";
import Third from "../../assets/third.png";
import Four from "../../assets/four.png";
import First1 from "../../assets/first2.png";
import Second2 from "../../assets/second2.png";
import Third3 from "../../assets/third2.png";
import Four4 from "../../assets/four2.png";
import Card from "../Porduct-Card/Card.tsx";

function Hoodies() {
  const cards = [
    {
      imageSrc: First,
      hoverImageSrc: First1,
      priceProduct: "270.000",
      nameProduct: "Beyond Angels Earth Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Third,
      hoverImageSrc: Third3,
      priceProduct: "290.000",
      nameProduct: "Beyond The Chaos Tshirt Vintage Black",
    },
    {
      imageSrc: Four,
      hoverImageSrc: Four4,
      priceProduct: "290.000",
      nameProduct: "Beyond Dones Tshirt Vintage Brown",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
    {
      imageSrc: Second,
      hoverImageSrc: Second2,
      priceProduct: "290.000",
      nameProduct: "Beyond Keys Tshirt Black",
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {cards.map((card, index) => {
          const baseDuration = 0.7;
          // Decrease duration progressively, but not below 0.2
          const duration = baseDuration - Math.min(index * 0.05, 0.3);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card
                imageSrc={card.imageSrc}
                priceProduct={card.priceProduct}
                nameProduct={card.nameProduct}
                hoverImageSrc={card.hoverImageSrc}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Hoodies;
