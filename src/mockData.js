const mobileBrands = [
  { label: 'Apple', value: 'apple' },
  { label: 'Redmi', value: 'redmi' },
  { label: 'Oppo', value: 'oppo' },
  { label: 'Samsung', value: 'samsung' },
];
const laptopBrands = [
  { label: 'HP', value: 'hp' },
  { label: 'Dell', value: 'dell' },
  { label: 'Lenevo', value: 'lenovo' },
];
const categories = [
  { label: 'Mobile', value: 'mobile' },
  { label: 'Laptop', value: 'laptop' },
];
const customerRatings = [
  { label: '5 & above', value: '5' },
  { label: '4 & above', value: '4' },
  { label: '3 & above', value: '3' },
  { label: '2 & above', value: '2' },
  { label: '1 & above', value: '1' },
];
const discounts = [
  { label: '10% or more', value: '10' },
  { label: '20% or more', value: '20' },
  { label: '30% or more', value: '30' },
];

const radioInputOptions = [
  { label: 'Available', value: 'available' },
  { label: 'Include out of stock', value: 'stockOut' },
];
const sortOptions = [
  { label: 'High to Low', value: 'highToLow' },
  { label: 'Low to High', value: 'lowToHigh' },
  { label: 'Best ratings', value: 'rating' },
];

const products = [
  {
    productName: 'Apple iPhone 12',
    description: 'A14 Bionic Chip | 128GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹59999',
    mrp: '₹70000',
    discount: '15% off',
    offer: 'Bank offer for ICICI',
    features: 'Best phone',
    availability: true,
    rating: '4.6',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70',
  },
  {
    productName: 'Apple iPhone 12 Pro',
    description: 'A14 Bionic Chip | 512GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹125999',
    mrp: '₹139999',
    discount: '10% off',
    offer: 'Bank offer for ICICI',
    features: 'LiDAR Scanner',
    availability: true,
    rating: '4.8',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrnpyygbv9.jpeg?q=70',
  },
  {
    productName: 'Apple iPhone 12 Mini',
    description: 'A14 Bionic Chip | 128GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹59999',
    mrp: '₹64900',
    discount: '7% off',
    offer: 'Bank offer for ICICI',
    features: '12MP TrueDepth Front Camera',
    availability: true,
    rating: '4.5',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/h/v/w/apple-iphone-12-mini-dummyapplefsn-original-imafwgb2zkjcwpre.jpeg?q=70',
  },
  {
    productName: 'Apple iPhone 11',
    description: 'A13 Bionic Chip | 64GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹42999',
    mrp: '₹49900',
    discount: '13% off',
    offer: 'Bank offer for ICICI',
    features: 'Liquid Retina HD display',
    availability: false,
    rating: '4.4',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
  },
  {
    productName: 'Apple iPhone 13',
    description: 'A15 Bionic Chip | 128GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹73999',
    mrp: '₹79900',
    discount: '7% off',
    offer: 'Bank offer for ICICI',
    features: 'Super Retina XDR display',
    availability: true,
    rating: '4.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
  },
  {
    productName: 'Apple iPhone 13 Pro Max',
    description: 'A15 Bionic Chip | 128GB ROM',
    category: 'Mobile',
    company: 'Apple',
    price: '₹123499',
    mrp: '₹129999',
    discount: '5% off',
    offer: 'Bank offer for ICICI',
    features: 'Super Retina XDR display',
    availability: true,
    rating: '4.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/c/g/4/iphone-13-pro-max-mlll3hn-a-apple-original-imag6vpg3r7dyvhm.jpeg?q=70',
  },
  {
    productName: 'Samsung Galaxy F12',
    description: '4GB RAM | 64GB ROM',
    category: 'Mobile',
    company: 'Samsung',
    price: '₹10499',
    mrp: '₹12999',
    discount: '19% off',
    offer: '5% cashback on Paytm',
    features: '6000 mAh Li-ion Battery',
    availability: true,
    rating: '3.0',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/9/k/s/galaxy-f12-sm-f127glbiins-samsung-original-imagftmhhhvghq7w.jpeg?q=70',
  },
  {
    productName: 'Samsung Galaxy F23',
    description: '6GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Samsung',
    price: '₹15499',
    mrp: '₹23999',
    discount: '33% off',
    offer: 'Upto 10% Off on Exchange',
    features: 'Qualcomm SD 750G Processor',
    availability: true,
    rating: '4.1',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l0sgyvk0/mobile/f/v/c/-original-imagcg22pf79cgau.jpeg?q=70',
  },
  {
    productName: 'Samsung Galaxy S21 Ultra',
    description: '12GB RAM | 256GB ROM',
    category: 'Mobile',
    company: 'Samsung',
    price: '₹105999',
    mrp: '₹128999',
    discount: '17% off',
    offer: 'No Cost EMI on SBI card payment',
    features: '108MP + 12MP + 10MP + 10MP | 40MP Front Camera',
    availability: true,
    rating: '4.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kjvrdzk0/mobile/t/x/3/samsung-galaxy-s21-ultra-sm-g998bzkginu-original-imafzcm2vacyygnb.jpeg?q=70',
  },
  {
    productName: 'Samsung Galaxy M33 5G',
    description: '6GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Samsung',
    price: '₹16945',
    mrp: '₹24999',
    discount: '32% off',
    offer: 'Bank Offer',
    features: '50MP Rear Camera',
    availability: true,
    rating: '2.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l1v1uvk0/mobile/t/d/x/galaxy-m33-5g-sm-m336bzbpins-samsung-original-imagdc87gdyremd3.jpeg?q=70',
  },
  {
    productName: 'Samsung Galaxy M52 5G',
    description: '8GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Samsung',
    price: '₹24850',
    mrp: '₹34990',
    discount: '28% off',
    offer: 'Bank Offer',
    features: 'Qualcomm SM7325 Snapdragon Processor',
    availability: true,
    rating: '3.6',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kulk9zk0/mobile/j/b/0/galaxy-m52-5g-sm-m526blbhinu-samsung-original-imag7zx66vpkp9mg.jpeg?q=70',
  },
  {
    productName: 'Xiaomi 12 Pro 5G',
    description: '12GB RAM | 256GB ROM',
    category: 'Mobile',
    company: 'Xiaomi',
    price: '₹67499',
    mrp: '₹70874',
    discount: '5% off',
    offer: 'Bank Offer',
    features: 'Snapdragon @ 8 Gen Processor',
    availability: true,
    rating: '4.6',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/b/n/9/12-pro-5g-2201122g-mi-original-imagdz7rs8qfakcb.jpeg?q=70',
  },
  {
    productName: 'Redmi 9A Sport',
    description: '3GB RAM | 32GB ROM',
    category: 'Mobile',
    company: 'Xiaomi',
    price: '₹7949',
    mrp: '₹9499',
    discount: '16% off',
    offer: 'Bank Offer',
    features: '5000 mAh Battery',
    availability: true,
    rating: '2.5',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kuef2q80/mobile/w/j/r/redmi-9a-sport-9a-mi-original-imag7gy6tzuz3hk8.jpeg?q=70',
  },
  {
    productName: 'Xiaomi 11i 5G',
    description: '6GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Xiaomi',
    price: '₹24999',
    mrp: '₹29999',
    discount: '16% off',
    offer: 'Bank Offer',
    features: 'Full HD+ AMOLED Display',
    availability: false,
    rating: '3.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/ky7lci80/mobile/4/n/d/-original-imagag2gdzpdfsdf.jpeg?q=70',
  },
  {
    productName: 'Redmi Note 9 Pro',
    description: '4GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Xiaomi',
    price: '₹15990',
    mrp: '',
    discount: '',
    offer: 'Bank Offer',
    features: 'Qualcomm SD 720G Processor',
    availability: false,
    rating: '3.7',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kcdp5zk0/mobile/6/e/k/mi-redmi-note-9-pro-mzb9105in-original-imaftgy6gwe9vnqr.jpeg?q=70',
  },
  {
    productName: 'Redmi K20',
    description: '6GB RAM | 64GB ROM',
    category: 'Mobile',
    company: 'Xiaomi',
    price: '₹19999',
    mrp: '₹21999',
    discount: '9% off',
    offer: 'Bank Offer',
    features: 'Qualcomm SD 730G Processor',
    availability: false,
    rating: '4.7',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/jxz0brk0/mobile/7/b/a/redmi-k20-na-original-imafgb4xesjtrzuu.jpeg?q=70',
  },
  {
    productName: 'Oppo Find X',
    description: '8GB RAM | 256GB ROM',
    category: 'Mobile',
    company: 'Oppo',
    price: '₹60990',
    mrp: '',
    discount: '',
    offer: 'Bank Offer',
    features: 'Qualcomm SD 845 Processor',
    availability: true,
    rating: '4.8',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/jjg15zk0/mobile/s/p/d/oppo-find-x-cph1871-original-imaf7ywhqmckb6w9.jpeg?q=70',
  },
  {
    productName: 'Oppo F21 Pro 5G',
    description: '8GB RAM | 128GB ROM',
    category: 'Mobile',
    company: 'Oppo',
    price: '₹26999',
    mrp: '₹31999',
    discount: '15% off',
    offer: 'Bank Offer',
    features: '64MP Rear Camera',
    availability: true,
    rating: '3.8',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l1zc6fk0/mobile/7/z/w/f21-pro-5g-cph2341-oppo-original-imagdf4gnjyayyvs.jpeg?q=70',
  },
  {
    productName: 'Oppo A16k',
    description: '3GB RAM | 32GB ROM',
    category: 'Mobile',
    company: 'Oppo',
    price: '₹9490',
    mrp: '₹13990',
    discount: '32% off',
    offer: 'Bank Offer',
    features: '4320 mAh Battery',
    availability: false,
    rating: '2.8',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kyg5zm80/mobile/n/y/9/-original-imagazh6fmxqpc4m.jpeg?q=70',
  },
  {
    productName: 'HP core i3 11th Gen',
    description: '8GB/256GB SSD/Windows 11 Home',
    category: 'Laptop',
    company: 'HP',
    price: '₹36990',
    mrp: '₹48933',
    discount: '24% off',
    offer: 'Bank offer for ICICI',
    features: 'Microsoft Office Home & Student 2019',
    availability: true,
    rating: '3.6',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l0zm64w0/computer/k/h/m/14s-dq2606tu-thin-and-light-laptop-hp-original-imagcnsfnrzvzbs6.jpeg?q=70',
  },
  {
    productName: 'HP core i5 11th Gen',
    description: '8GB/512GB SSD/Windows 11 Home',
    category: 'Laptop',
    company: 'HP',
    price: '₹52490',
    mrp: '₹66180',
    discount: '20% off',
    offer: 'Upto ₹20000 off on exchange',
    features: 'Intel Core i5 Processor(11th Gen)',
    availability: true,
    rating: '4.3',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/l2jcccw0/computer/s/k/0/-original-imagdus5mrsgjepa.jpeg?q=70',
  },
  {
    productName: 'HP 14s Core i& 10th Gen',
    description: '8GB/512GB SSD/Windows 10 Home',
    category: 'Laptop',
    company: 'HP',
    price: '₹73949',
    mrp: '₹75418',
    discount: '1% off',
    offer: '',
    features: 'Microsoft Office Home & Student 2019',
    availability: false,
    rating: '4.2',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/v/r/y/hp-original-imaftyzqzbyerzgt.jpeg?q=70',
  },
  {
    productName: 'HP Pvilion x360 convertible',
    description: '16GB/512GB SSD/Intel core i7 11th Gen',
    category: 'Laptop',
    company: 'HP',
    price: '₹99999',
    mrp: '₹105000',
    discount: '5% off',
    offer: 'Bank Offer',
    features: '14 inch Touchscreen display',
    availability: true,
    rating: '4.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kwcfngw0/computer/y/q/d/-original-imag9fgxy7mjf4zd.jpeg?q=70',
  },
  {
    productName: 'Dell Inspiron Core i3 10th Gen',
    description: '8GB/256GB SSD/Windows 11 Home',
    category: 'Laptop',
    company: 'Dell',
    price: '₹34980',
    mrp: '₹54723',
    discount: '36% off',
    offer: 'Bank Offer',
    features: 'Office Home and Student 2021',
    availability: true,
    rating: '3.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=70',
  },
  {
    productName: 'Dell Core i7 11th Gen',
    description: '16GB/512GB SSD/Windows 11 Home',
    category: 'Laptop',
    company: 'Dell',
    price: '₹104500',
    mrp: '₹110156',
    discount: '11% off',
    offer: 'No cost EMI offer',
    features: '14 inch Touchscreen display',
    availability: true,
    rating: '2.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kqb8pzk0/computer/d/j/c/na-2-in-1-laptop-dell-original-imag4dy68bwtg8j9.jpeg?q=70',
  },
  {
    productName: 'Dell Inspiron Core i5 11th Gen',
    description: '8GB/1TB HDD/256 GB SSD',
    category: 'Laptop',
    company: 'Dell',
    price: '₹58990',
    mrp: '₹64360',
    discount: '8% off',
    offer: 'Bank Offer',
    features: 'Windows 11 Home, Office 2019',
    availability: false,
    rating: '4.0',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kxm5qq80/computer/i/s/2/na-laptop-dell-original-imagayta7txhw4ch.jpeg?q=70',
  },
  {
    productName: 'Lenevo IdeaPad Slim 5i Core i5 11th Gen',
    description: '16GB/512GB SSD/2 GB Graphics',
    category: 'Laptop',
    company: 'Lenevo',
    price: '₹70990',
    mrp: '₹104890',
    discount: '32% off',
    offer: '₹2000 cashback offer on Paytm',
    features: 'Microsoft Office Home & Student 2019',
    availability: true,
    rating: '4.0',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/klfhk7k0/computer/w/u/x/na-thin-and-light-laptop-lenovo-original-imagyk4hedcydqx5.jpeg?q=70',
  },
  {
    productName: 'Lenevo IdeaPad 3 Core i3 11th Gen',
    description: '8GB/256GB SSD/Windows 11 Home',
    category: 'Laptop',
    company: 'Lenevo',
    price: '₹35990',
    mrp: '₹60890',
    discount: '40% off',
    offer: 'Bank Offer',
    features: 'Office Home and Student 2021',
    availability: true,
    rating: '2.0',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/c/q/t/lenovo-na-thin-and-light-laptop-original-imafuzt873zgp9xe.jpeg?q=70',
  },
  {
    productName: 'Lenevo Yoga Intel EVO Core i7 11th Gen',
    description: '16GB/1TB SSD/Windows 10 Home',
    category: 'Laptop',
    company: 'Lenevo',
    price: '₹102990',
    mrp: '₹104033',
    discount: '1% off',
    offer: '',
    features: '14 inch Touchscreen display',
    availability: false,
    rating: '4.9',
    imageUrl:
      'https://rukminim1.flixcart.com/image/312/312/kdyus280/computer/v/f/k/lenovo-na-thin-and-light-laptop-original-imafuqwpgzhytd5c.jpeg?q=70',
  },
];

export {
  mobileBrands,
  laptopBrands,
  categories,
  discounts,
  customerRatings,
  radioInputOptions,
  products,
  sortOptions,
};