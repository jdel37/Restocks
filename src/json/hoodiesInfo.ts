import First from "../assets/first.png";
import Second from "../assets/second.png";
import Third from "../assets/third.png";
import Four from "../assets/four.png";
import First1 from "../assets/first2.png";
import Second2 from "../assets/second2.png";
import Third3 from "../assets/third2.png";
import Four4 from "../assets/four2.png";

// Define the types for each card
interface Card {
  id: string;
  S: boolean;
  M: boolean;
  L: boolean;
  XL: boolean;
  imageSrc: string;
  hoverImageSrc: string;
  priceProduct: string;
  nameProduct: string;
}

const Cards: Card[] = [
  {
    id: "1",
    S: true,
    M: true,
    L: true,
    XL: false,
    imageSrc: First,
    hoverImageSrc: First1,
    priceProduct: "270.000",
    nameProduct: "Beyond Angels Earth Tshirt Black",
  },
  {
    id: "2",
    S: false,
    M: true,
    L: false,
    XL: true,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "3",
    S: true,
    M: false,
    L: true,
    XL: false,
    imageSrc: Third,
    hoverImageSrc: Third3,
    priceProduct: "290.000",
    nameProduct: "Beyond The Chaos Tshirt Vintage Black",
  },
  {
    id: "4",
    S: false,
    M: true,
    L: false,
    XL: true,
    imageSrc: Four,
    hoverImageSrc: Four4,
    priceProduct: "290.000",
    nameProduct: "Beyond Dones Tshirt Vintage Brown",
  },
  {
    id: "5",
    S: true,
    M: false,
    L: true,
    XL: false,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "6",
    S: false,
    M: true,
    L: false,
    XL: true,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "7",
    S: true,
    M: false,
    L: true,
    XL: false,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "8",
    S: false,
    M: true,
    L: false,
    XL: true,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "9",
    S: true,
    M: false,
    L: true,
    XL: false,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "10",
    S: false,
    M: true,
    L: false,
    XL: true,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
  {
    id: "11",
    S: true,
    M: false,
    L: true,
    XL: false,
    imageSrc: Second,
    hoverImageSrc: Second2,
    priceProduct: "290.000",
    nameProduct: "Beyond Keys Tshirt Black",
  },
];

export default Cards;
