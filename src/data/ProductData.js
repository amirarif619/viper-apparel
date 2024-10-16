import shirtImage from '../assets/shirt.png'
import stringerImage from '../assets/stringer.png'
import oversizedImage from '../assets/oversized.png'
import quarterzipImage from '../assets/quarterzip.png'
const products = [
    {
      id: 1,
      name: 'Gym T-Shirt',
      price: 29.99,
      image: shirtImage, 
      description: 'High-quality, moisture-wicking t-shirt for intense workouts.',
      variants: [
        { color: 'Blue', size: 'M' },
        { color: 'Black', size: 'L' },
      ],
    },
    {
      id: 2,
      name: 'Stringer',
      price: 24.99,
      image: stringerImage,
      description: 'Comfortable shorts designed for optimal performance.',
      variants: [
        { color: 'Gray', size: 'M' },
        { color: 'Black', size: 'S' },
      ],
    },
    {
        id: 3,
        name: 'Oversized T-shirt',
        price: 28.99,
        image: oversizedImage,
        description: 'Perfect for low intensity cardio days.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
      },
      {
        id: 4,
        name: '1/4 Full sleeve top',
        price: 38.99,
        image: quarterzipImage,
        description: 'Keep warm in this long sleeve top with breathable fabric.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
      },
      {
        id: 4,
        name: '1/4 Full sleeve top',
        price: 38.99,
        image: quarterzipImage,
        description: 'Keep warm in this long sleeve top with breathable fabric.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
      },
  ];
  
  export default products;
  