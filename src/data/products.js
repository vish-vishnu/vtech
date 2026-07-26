export const categories = [
  {
    id: 'headphones',
    label: 'Amplifiers',
    items: [
      {
        id: 1,
        name: '2.1 ch Digital Amplifier',
        images: [
          '/src/assets/products/2.1.1.jpg',
          '/src/assets/products/2.1.2.jpg',
          '/src/assets/products/2.1.3.jpg',
          '/src/assets/products/2.1.4.jpg'],
        description: 'Short product description goes here.',
        // CLIENT: fill in real specifications
        specifications: [
          { label: 'Driver Size', value: '40mm' },
          { label: 'Frequency Response', value: '20Hz – 20kHz' },
          { label: 'Impedance', value: '32 Ohm' },
          { label: 'Connectivity', value: 'Bluetooth 5.0 / Wired' },
          { label: 'Battery Life', value: '30 hours' },
          { label: 'Weight', value: '250g' },
        ],
        longDescription:
          'A longer, detailed product description for the detail page goes here. CLIENT: replace with real marketing copy.',
      },
      {
        id: 2,
        name: '5.1 ch Digital 16* 2 Display Dolby Based Basic Amplifier',
        images: [
          '/src/assets/products/5.1.1.jpg',
          '/src/assets/products/5.1.1.jpg',
          '/src/assets/products/5.1.1.jpg',
          '/src/assets/products/5.1.1.jpg'
        ],
        description: 'Short product description goes here.',
        specifications: [],
        longDescription: '',
      },
    ],
  },
  {
    id: 'speakers',
    label: 'Speakers',
    items: [
      {
        id: 3,
        name: 'Product Name',
        price: '₹0,000',
        images: [],
        description: 'Short product description goes here.',
        specifications: [],
        longDescription: '',
      },
    ],
  },
  {
    id: 'amplifiers',
    label: 'Amplifiers',
    items: [],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    items: [],
  },
]