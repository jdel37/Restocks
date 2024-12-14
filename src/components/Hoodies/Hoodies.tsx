
import First from '../../assets/first.png';
import Second from '../../assets/second.png';
import Third from '../../assets/third.png';
import Four from '../../assets/four.png';
import First1 from '../../assets/first2.png';
import Second2 from '../../assets/second2.png';
import Third3 from '../../assets/third2.png';
import Four4 from '../../assets/four2.png';
import Card from '../Porduct-Card/Card.tsx';
function Hoodies() {
  return (
    <div className="w-full px-4 py-8 ">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
      Featured Products
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {/* Example Product Cards */}
      <Card imageSrc={First} priceProduct="270.000" nameProduct="Beyond Angels Earth Tshirt Black" hoverImageSrc={First1} />
      <Card imageSrc={Second} priceProduct="290.000" nameProduct="Beyond Keys Tshirt Black" hoverImageSrc={Second2} />
      <Card imageSrc={Third} priceProduct="290.000" nameProduct="Beyond The Chaos Tshirt Vintage Black" hoverImageSrc={Third3} />
      <Card imageSrc={Four} priceProduct="290.000" nameProduct="Beyond Dones Tshirt Vintage Brown"  hoverImageSrc={Four4}/>
    </div>
  </div>
  
  )
}

export default Hoodies