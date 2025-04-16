import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};


const products = [
  {
      id: "1",
      name: "Visconti Perfume | Spray - 4X20Ml",
      image1: "https://m.media-amazon.com/images/I/81zMPbmPY7L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/7137ONssbfL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71enYp45SCL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/7163rxOK8tL._SX679_.jpg",
      price: 399,
      description: "Versatile Set of 4 Fragrances: Explore scents like Blue Ocean, Club Legend, Imperial Oud, and M.V.P., meticulously crafted for different moods and occasions. Whether it's adventure, enjoyment, sophistication, or confidence you seek, these fragrances enhance your presence and complement your personality.",
      category: "Visconti"
  },
  {
      id: "2",
      name: "Park Avenue Luxury Perfume | Spray - 4X20Ml",
      image1: "https://m.media-amazon.com/images/I/71XSoa-jwGL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/71ray1qcdzL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71HCQo7ryHL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/71WmSgX7NGL._SX679_.jpg",
      price: 365,
      description: "CONTAINS: 1 unit of Park Avenue Luxury Perfume Gift Set for Men; Quantity (4 x 20ml) LONG-LASTING PERFUME- Unleash your X factor with this exclusive gift set of 4 distinguished perfumes, Euphoria, Conquer, Harmony & Discoverer, perfect for the corporate man. Each perfume offers a unique, long-lasting fragrance experience that ensures you make a powerful statement.",
      category: "Park Avenue"
  },
  {
      id: "3",
      name: "Gucci Flora Gorgeous Magnolia",
      image1: "https://m.media-amazon.com/images/I/71FlS3RtH6L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/616ToaGc3YL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71mn40mPlyL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/81IFibCcIxL._SX679_.jpg",
      price: 4999,
      description: "The bottle, dressed in a rich purple shade and adorned with the Flora pattern awakens the intuitive power of its wearer. Feel Fresh Feel Good.",
      category: "Gucci"
  },
  {
      id: "4",
      name: "Polo Woods | Spray - 4X20Ml",
      image1: "https://m.media-amazon.com/images/I/61-uprcRz6L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/71n0a2AzTkL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/716hntJmZrL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/71EOCZFGpXL._SX679_.jpg",
      price: 448,
      description: "Luxurious Fragrance Collection: This elegant set contains four exquisite eau de parfums in 20ml bottles - Blue, Green, Red, and Black. Sophisticated Scents: Each fragrance boasts a distinct, alluring aroma carefully crafted to suit different moods and occasions.",
      category: "The Man Company"
  },
  {
      id: "5",
      name: "Wild Stone CODE",
      image1: "https://m.media-amazon.com/images/I/61IdjxxiRKL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/81t-ZX8z2XL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/91o9hVRSNDL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/81h7zWV2-FL._SX679_.jpg",
      price: 558,
      description: "The exquisite marine notes will instantly transport you back to your favourite exploration. Lose all sense of time as you find yourself with ACQUA. Top notes: Green Apple and Lemon; Heart notes: Birch, Jasmine and Rose; Base notes: Musk, Amber and Patchouli.Directions to use: Keep the spray nozzle 3-6 inches away from the skin while applying. Apply on pulse points – wrists, behind ears, and neck.",
      category: "Wild Stone"
  },
  {
      id: "6",
      name: "Gentleman's Moods | Spray - 4X20Ml",
      image1: "https://m.media-amazon.com/images/I/61LC0s7VRKL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg",
      image2: "https://m.media-amazon.com/images/I/618Mtu2TLiL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/61zZXSRzptL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/61IFKhLTtKL._SX679_.jpg",
      price: 448,
      description: "VARIETY PACK: This gift set contains 4 distinct eau de parfums - Oud, Fire, Night, and Blanc - to cater to a gentleman's varying moods and occasions.EXQUISITE FRAGRANCES: Each 20ml bottle is carefully crafted with premium ingredients to deliver captivating, long-lasting scents.ELEGANT PACKAGING: The fragrances come housed in a sophisticated, brown box with an embossed logo, making it an ideal gift choice.",
      category: "The Man Company"
  },
  {
      id: "6",
      name: "Wild Stone Ultra Sensual",
      image1: "https://m.media-amazon.com/images/I/61LyQRT19cL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/618TPd18uQL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/614kpgotpgL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/61-4+MhelWL._SX679_.jpg",
      price: 448,
      description: "Type of Perfume - EAU DE PARFUM; A strong travelling perfume for men that complements an active lifestyle The fragrance family - Aromatic Fougere makes this premium perfume for men a perfect choice who want to stay ultra-electrifying throughout the day With top notes of Lemon, Rosemary, Basil, Lavender; heart notes of Cardamom, Coriander, Juniper; and base notes of Dry Amber, Moss, and Patchouli, this luxury perfume for men boasts long lasting fragrance.",
      category: "Wild Stone"
  },
  {
      id: "7",
      name: "Park Avenue Harmony",
      image1: "https://m.media-amazon.com/images/I/710sRQ4JLqL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/615Nc8W70ML._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71o1x-nYWQL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/711GuDl+lpL._SX679_.jpg",
      price: 448,
      description: "CONTAINS: 1 unit of Park Avenue Harmony EDP perfume for men; Quantity (100ml) LONG LASTING FRAGRANCE: Unleash your X factor with this distinguished perfume designed for the cool & effortless man. The lingering scent is perfect for making a powerful statement AMAZING NOTES, UNFORGETTABLE FRAGRANCE: Crafted by Global Perfumers, this luxury men's perfume features remarkable notes, including tangy fresh top notes, along with patchouli, and deep base notes of musk and vetiver.",
      category: "Park Avenue"
  },
  {
      id: "8",
      name: "Visconti Perfume",
      image1: "https://m.media-amazon.com/images/I/81-pOFm8m1L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/71ZIV5PmYmL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71wUvwodgNL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/7163rxOK8tL._SX679_.jpg",
      price: 399,
      description: "Versatile Set of 4 Fragrances: Immerse yourself in scents like Queen of Hearts, Sugar & Spice, Fashionista, and M.V.P., each meticulously crafted to suit various moods and occasions. Whether it's a romantic evening, a casual outing, or a desire to exude glamour or confidence in a formal setting, these fragrances enhance your presence and reflect your personality Long-Lasting Fragrance that lasts up to 8 Hours: Crafted from premium ingredients, this perfume will last up to 8 hours, accompanying you from dawn till dusk without missing a beat.",
      category: "Visconti"
  },
  {
      id: "9",
      name: "Visconti M.V.P. Perfume",
      image1: "https://m.media-amazon.com/images/I/51Ss8RFdGaL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/611g-4UfJCL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71qqgPFhGtL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/71vlMANenxL._SX679_.jpg",
      price: 399,
      description: "Versatile Set of 4 Fragrances: Immerse yourself in scents like Queen of Hearts, Sugar & Spice, Fashionista, and M.V.P., each meticulously crafted to suit various moods and occasions. Whether it's a romantic evening, a casual outing, or a desire to exude glamour or confidence in a formal setting, these fragrances enhance your presence and reflect your personality Long-Lasting Fragrance that lasts up to 8 Hours: Crafted from premium ingredients, this perfume will last up to 8 hours, accompanying you from dawn till dusk without missing a beat.",
      category: "Visconti"
  },
  {
      id: "10",
      name: "Bella Vita Luxury CEO Man | Pack of 2, 20 ml Each",
      image1: "https://m.media-amazon.com/images/I/519mdAYKTQL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/61hO5FIRaML._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71B3aDZcXAL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/71K2D1ENhpL._SX679_.jpg",
      price: 185,
      description: "In travel-friendly packaging For both Men and Women Made with imported oils from France, Spain, and Italy IFRA-certified non-irritant formula.",
      category: "Bella Vita"
  },
  {
      id: "11",
      name: "Bella Vita Luxury | 4 x 20 ml",
      image1: "https://m.media-amazon.com/images/I/611TuNkQopL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/71bLtHR6LyL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/71hf5t-EreL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/71d1zod4NhL._SX679_.jpg",
      price: 495,
      description: "A set of 4 mini perfumes, including the iconic fragrances of G.O.A.T., OUD, CEO Man, and KLUB Man This gift set is perfect for men looking for affordable yet luxurious fragrances that make a long-lasting impression. Each fragrance is carefully crafted to exude confidence, power, and sophistication, making them perfect for day and night wear.",
      category: "Bella Vita"
  },
  {
      id: "12",
      name: "Gucci Bamboo | 75 ml",
      image1: "https://m.media-amazon.com/images/I/51c1NAHwCGL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/51mUg2gTmKL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/51Ew+bd0QvL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/51Ew+bd0QvL._SX679_.jpg",
      price: 1295,
      description: "The bottle, dressed in a rich purple shade and adorned with the Flora pattern awakens the intuitive power of its wearer. Feel Fresh Feel Good.",
      category: "Gucci"
  },
  {
      id: "13",
      name: "Fogg Beautiful Secret Scent",
      image1: "https://m.media-amazon.com/images/I/71ZkLjRGbgL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/81tD2Ln9spL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/81DG1vddh6L._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/810FAiWsOVL._SX679_.jpg",
      price: 325,
      description: "AN ENCaptivate all those around you with the fresh, contemporary fragrance of Fogg Beautiful Secret LONGIts fragrance stays on you for a very long time so that you keep smelling great throughout FRESH A unique blend of strong aroma with clean, crisp, fresh, and floral notes that take over the senses Wear it every day and make it your signature scent or use it for special occasions, this scent is perfect for your enchanting personality; FOGG Fogg Scents also has a range of alluring fragrances for women.",
      category: "Fogg"
  },
  {
      id: "14",
      name: "Fogg Secret Oriental",
      image1: "https://m.media-amazon.com/images/I/81jbLTuTVaL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/81tMMNzCP6L._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/81QYmFDPVGL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/81k15ZF6jpL._SX679_.jpg",
      price: 749,
      description: "FOGG SCENT ORIENTAL EXTREME - The Fogg Oriental Extreme is the perfect perfume for men to accentuate their individuality and elevate their everyday grooming routine LONG-LASTING FRAGRANCE -This extreme perfume stays on you long after the first spray as it has a higher concentration of perfume. Indulge in the aromatic charm of this long-lasting perfume and make an impression wherever you go.",
      category: "Fogg"
  },
  {
      id: "15",
      name: "Christian Dior | 100Ml Edp Spray ",
      image1: "https://m.media-amazon.com/images/I/51YFh98+MSL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/414cQTOtteL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/714+AqgvybL._SY879_.jpg",
      image4: "https://m.media-amazon.com/images/I/71SlJP3r8rL._SX679_.jpg",
      price: 4999,
      description: "The base unfurls in the deep and exquisite warmth of bourbon vanilla. A soft and seductive trail tinged with light.",
      category: "Dior"
  },
  {
      id: "15",
      name: "Christian Dior Homme Eau De | 100Ml ",
      image1: "https://m.media-amazon.com/images/I/51jnws1rR-L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/619ezJaxRdL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/61-V7oGgkKL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/612Lg1ADf5L.jpg",
      price: 4999,
      description: "Fragrance Notes: - Top Notes: Lavender, Sage, Bergamot - Heart Notes: Orris, Amber, Cacao, Cardamom - Base Notes: Patchouli, Leather, Tahitian Vetiver.",
      category: "Dior"
  },
  {
      id: "15",
      name: "Jimmy Choo Man Blue Eau De Toilette | 50Ml ",
      image1: "https://m.media-amazon.com/images/I/51jnws1rR-L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/619ezJaxRdL._SX679_.jpg",
      image3: "https://m.media-amazon.com/images/I/61-V7oGgkKL._SX679_.jpg",
      image4: "https://m.media-amazon.com/images/I/612Lg1ADf5L.jpg",
      price: 4815,
      description: "Fragrance Notes: - Top Notes: Lavender, Sage, Bergamot - Heart Notes: Orris, Amber, Cacao, Cardamom - Base Notes: Patchouli, Leather, Tahitian Vetiver.",
      category: "Jimmy Choo"
  }
]

export const CategoryCrousel = () => {
  return (
    <>
      <div className='mt-5'>
      <h2 className='mt-10 mb-5'>Our Top Categories</h2>
      <div className="slider-container">
      <Slider {...settings}>
        {products.map((item,index) => {
          return <div key={index}>
            <img src={item.image1} className='w-48 border border-slate-300' alt="image" />
            <p className='mt-5'>{item.category}</p>
          </div>
        })}
      </Slider>
    </div>
      </div>
    </>
  )
}