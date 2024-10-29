//import shirtImage from '../assets/shirt.png'
//import stringerImage from '../assets/stringer.png'
//import oversizedImage from '../assets/oversized.png'
//import quarterzipImage from '../assets/quarterzip.png'

const products = [

    {
      product_variant_id: 1,
      name: 'Premium T-Shirt',
      price: 29.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTpower%20tshirt.webp?alt=media&token=d554ff00-17af-47c6-bc75-2a8867a4dd6b', 
      backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKpowertshirt.webp?alt=media&token=ccf2d1b3-a135-46be-a52d-cb3b9afadc27',
      description: 'High-quality, moisture-wicking t-shirt for intense workouts.',
      variants: [
        { color: 'Blue', size: 'M' },
        { color: 'Black', size: 'L' },
      ],
      rating: 4.4,
      isNew: true,
      color: 'Black',
    },
    {
      product_variant_id: 2,
      name: 'Camo Stringer',
      price: 49.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTcriticalstringer.webp?alt=media&token=200e3a47-94bd-4596-b3f7-c2c23a6a1978',
      backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKcriticalstringer.webp?alt=media&token=99cf054c-3f1a-421a-acab-509ade3b1765', 
      description: "High perfomance wear, but the short sleeve version.",
      variants: [
        { color: 'Blue', size: 'M' },
        { color: 'Black', size: 'L' },
      ], 
      rating: 4.2,
      isNew: true,
      color: 'Grey',
    },
    {
      product_variant_id: 3,
      name: 'White Long Sleeve top',
      price: 39.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTwhitelongsleevetop.webp?alt=media&token=4dd3c10e-32a0-40e2-af3d-08b3860d0886',
      backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKwhitelongsleevetop.webp?alt=media&token=0cb4b887-802d-4c29-bd6b-0ba6a1e16d9a', 
      description: "Great for long endurance running.",
      variants: [
        { color: 'Blue', size: 'M' },
        { color: 'Black', size: 'L' },
      ],
        rating: 4.2,
        isNew: true,
        color: 'White',
      },
      {
        product_variant_id: 4,
        name: 'Sweater',
        price: 49.99,
        image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTgreysweaterfront.webp?alt=media&token=0e27131f-d4eb-41fe-a1d9-f0ad03a99d61',
        backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKgreysweater.webp?alt=media&token=ee0458b6-a0c6-43d6-8aed-b82b4033b859', 
        description: "For that well-deserved rest day. Go on, we won't tell anyone.",
        variants: [
          { color: 'Blue', size: 'M' },
          { color: 'Black', size: 'L' },
        ], 
        rating: 4.4,
        isNew: true,
        color: 'Grey',
      },

    {
      product_variant_id: 5,
      name: 'Oversized T-shirt',
      price: 28.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONToversizedtshirt.webp?alt=media&token=36bda233-a7e7-4189-b1d3-daafee18ece0',
      backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKoversizedtshirt.webp?alt=media&token=eb7e8894-159e-43c9-a7b7-554f55dc88bd',
      description: 'Soft, breathable. Perfect for low intensity cardio days.',
      variants: [
        { color: 'Gray', size: 'M' },
        { color: 'Black', size: 'S' },
      ],
      rating: 4.6,
      isNew: false,
      color: 'Black',
    },
    {
      product_variant_id: 6,
      name: '1/4 Full Sleeve Top',
      price: 38.99,
      image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTquarterzippullover.webp?alt=media&token=41a293be-5f07-4560-80ba-9477968eeb23',
      backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKquarterzippullover.webp?alt=media&token=d2b0aa22-7338-4ab0-abbf-a28ce87cb823',
      description: 'Keep warm in this long sleeve top with breathable fabric.',
      variants: [
        { color: 'Gray', size: 'M' },
        { color: 'Black', size: 'S' },
      ],
      rating: 4.2,
      isNew: false,
      color: 'Black',
    },
    
      
      
      {
        product_variant_id: 7,
        name: 'Seamless Long Sleeve',
        price: 49.99,
        image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTseamlesslongsleeve.webp?alt=media&token=2c31a167-6db9-4511-b521-5544b8a9064b',
        backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKseamlesslongsleeve.webp?alt=media&token=753c041b-4670-4cb5-b586-f1ab1ce3b74a', 
        description: "High perfomance wear for smashing PR day.",
        variants: [
          { color: 'Blue', size: 'M' },
          { color: 'Black', size: 'L' },
        ], 
        rating: 4.7,
        isNew: false,
        color: 'Olive',
      },
      {
        product_variant_id: 8,
        name: 'Basic Stringer',
        price: 24.99,
        image: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENFRONTlegacystrigner.webp?alt=media&token=f3384b22-f3f7-40f9-87d7-ada244b1ec80',
        backImage: 'https://firebasestorage.googleapis.com/v0/b/viper-apparel.appspot.com/o/MENS%2FMENBACKlegacystringer.webp?alt=media&token=c818a19b-d39d-4c7f-9f39-f9fcaccc9685',
        description: 'Comfortable shorts designed for optimal performance.',
        variants: [
          { color: 'Gray', size: 'M' },
          { color: 'Black', size: 'S' },
        ],
        rating: 4.9,
        isNew: false,
        color: 'Black',
      },
      
      
    ];
  
  export default products;
  