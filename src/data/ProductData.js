//import shirtImage from '../assets/shirt.png'
//import stringerImage from '../assets/stringer.png'
//import oversizedImage from '../assets/oversized.png'
//import quarterzipImage from '../assets/quarterzip.png'
const products = [
    {
      product_variant_id: 1,
      name: 'Gym T-Shirt',
      price: 29.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/shirt.png?alt=media&token=8eb1a77b-f544-4c0d-afa6-df99a6522f15', 
      description: 'High-quality, moisture-wicking t-shirt for intense workouts.',
      variants: [
        { color: 'Blue', size: 'M' },
        { color: 'Black', size: 'L' },
      ],
    },
    {
      product_variant_id: 2,
      name: 'Stringer',
      price: 24.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/stringer.png?alt=media&token=e78ab2ea-41e7-4c44-b8d6-3e8c283c9902',
      description: 'Comfortable shorts designed for optimal performance.',
      variants: [
        { color: 'Gray', size: 'M' },
        { color: 'Black', size: 'S' },
      ],
    },
    {
      product_variant_id: 3,
        name: 'Oversized T-shirt',
        price: 28.99,
        image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/oversized.png?alt=media&token=9677fc43-a3f0-4bbf-a602-0132e4fe1b87',
        description: 'Perfect for low intensity cardio days.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
      },
      {
        product_variant_id: 4,
        name: '1/4 Full sleeve top',
        price: 38.99,
        image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/quarterzip.png?alt=media&token=f6d7fc41-d9a6-41d0-8b80-30e085abcdfa',
        description: 'Keep warm in this long sleeve top with breathable fabric.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
      },
  ];
  
  export default products;
  