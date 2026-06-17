export type MenuItem = {
  name: string;
  desc?: string;
  price: string; // human readable e.g. "Rp 58.000"
  image?: string;
  featured?: boolean;
  tag?: string; // e.g. "Signature", "Premium"
};

export type MenuCategory = {
  id: string;
  name: string;
  blurb?: string;
  cover: string;
  items: MenuItem[];
};

const k = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export const MENU: MenuCategory[] = [
  {
    id: "steak",
    name: "Steak",
    blurb: "Daging pilihan dipanggang sempurna, disajikan dengan kentang, sayuran, dan saus pilihan.",
    cover: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Sirloin (NZ)", desc: "Sirloin New Zealand ±200g, dipanggang sempurna.", price: k(158000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Signature" },
      { name: "Rib Eye (NZ)", desc: "Rib eye juicy ±200g dengan marbling kaya rasa.", price: k(148000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Tenderloin (NZ)", desc: "Tenderloin empuk ±200g, lembut menggoda.", price: k(208000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Best Seller" },
      { name: "Sirloin Hokubee (Premium Meltique)", desc: "Sirloin Hokubee premium ±200g, lumer di mulut.", price: k(158000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" },
      { name: "Lamb Chop", desc: "Iga domba dipanggang ±200g.", price: k(148000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" },
      { name: "T-Bone", desc: "T-bone steak ±300g untuk pencinta daging sejati.", price: k(268000), image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "premium",
    name: "Premium Steak",
    blurb: "Koleksi steak premium dari USA & Jepang untuk momen istimewa.",
    cover: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "US Black Angus Sirloin", desc: "US Sirloin ±200g, panggang sempurna.", price: k(258000), image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Premium USA" },
      { name: "US Black Angus Tenderloin Tip", desc: "Tenderloin Tip ±220g.", price: k(538000), image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80" },
      { name: "US Black Angus Fillet Mignon", desc: "Fillet Mignon ±220g.", price: k(638000), image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80" },
      { name: "Sirloin Wagyu Tajima MB5", desc: "Wagyu Tajima MB5 ±220g, kelas premium.", price: k(550000), image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Wagyu" },
    ],
  },
  {
    id: "chicken-fish",
    name: "Chicken & Fish",
    blurb: "Pilihan ayam dan ikan panggang yang gurih dan menggugah selera.",
    cover: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Chicken Chop", desc: "Paha ayam panggang dengan saus pilihan.", price: k(68000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Chicken Parmagiana", desc: "Fillet ayam crispy dengan mozarella.", price: k(68000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80" },
      { name: "Chicken Steak", desc: "Dada ayam panggang juicy.", price: k(68000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80" },
      { name: "Fish & Chips", desc: "Dory crispy dengan kentang goreng & saus tartar.", price: k(68000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Salmon Steak", desc: "Fillet salmon panggang.", price: k(148000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80" },
      { name: "Grill Saba", desc: "Ikan saba bakar dengan nasi.", price: k(58000), image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "burger",
    name: "Burger & Sandwich",
    cover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Beef Burger", desc: "Patty sapi juicy + kentang goreng.", price: k(58000), image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Crispy Chicken Burger", desc: "Patty ayam crispy + kentang goreng.", price: k(48000), image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Tuna Sandwich", desc: "Sandwich tuna mayo + kentang goreng.", price: k(48000), image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Salmon Sandwich", desc: "Sandwich salmon mayo + kentang goreng.", price: k(48000), image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "light-meal",
    name: "Light Meal",
    cover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Chicken Wings", price: k(38000) },
      { name: "Chicken Nugget", price: k(35000) },
      { name: "French Fries", price: k(25000) },
      { name: "Onion Ring", price: k(25000) },
      { name: "Snack Platter", desc: "Onion ring, fries, nugget, spring roll.", price: k(75000), featured: true },
      { name: "Banana Fritters", price: k(25000) },
      { name: "Tahu Berontak", price: k(35000) },
      { name: "Spring Roll", price: k(35000) },
      { name: "Garlic Bread", price: k(25000) },
      { name: "Bruschetta Mozarella", price: k(35000) },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    cover: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Fuse Fried Rice", desc: "Nasi goreng ala Fuse + chicken wings, kerupuk, telur.", price: k(50000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Signature" },
      { name: "Sirloin Fried Rice", desc: "Nasi goreng sirloin + acar & sambal.", price: k(55000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
      { name: "Salmon Fried Rice", desc: "Nasi goreng salmon + acar & sambal.", price: k(55000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
      { name: "Kampung Fried Rice", desc: "Nasi goreng teri + telur mata sapi.", price: k(48000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
      { name: "Vegetarian Fried Rice", desc: "Nasi goreng sayur + telur mata sapi.", price: k(45000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "noodle",
    name: "Noodle",
    cover: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Fuse Laksa", desc: "Laksa noodle dengan fish cake, udang & tahu.", price: k(58000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Tom Yam Fried Noodle", desc: "Mie goreng tom yam dengan seafood & jamur.", price: k(68000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
      { name: "Tom Yam Soup Noodle", desc: "Mie kuah tom yam dengan seafood & jamur.", price: k(68000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "salad-soup",
    name: "Salad & Soup",
    cover: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Salmon Salad", desc: "Selada segar + salmon + Thai dressing.", price: k(55000), image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Beef Tenderloin Salad", desc: "Selada + tenderloin + Thousand Island.", price: k(65000), image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Sesame Crispy Chicken Salad", desc: "Selada + ayam crispy + sesame dressing.", price: k(55000), image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Green Veggies Salad", desc: "Selada + sesame dressing + crouton.", price: k(45000), image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Zuppa Mushroom Soup", desc: "Krim sup jamur dengan puff pastry.", price: k(45000), image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Mushroom Soup", desc: "Krim sup jamur klasik.", price: k(28000) },
      { name: "Tom Yam Soup", desc: "Tom yam dengan semangkuk nasi.", price: k(68000) },
      { name: "Oxtail Soup", desc: "Sup buntut dengan nasi & emping.", price: k(88000), tag: "Hearty" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    cover: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Pasta Carbonara", price: k(48000), featured: true },
      { name: "Beef Bolognaise", price: k(58000) },
      { name: "Chicken Bolognaise", price: k(48000) },
      { name: "Seafood Aglio-Olio", price: k(58000), featured: true },
      { name: "Salmon Fusilli", price: k(55000) },
      { name: "Vegetarian Pasta", price: k(45000) },
    ],
  },
  {
    id: "udon",
    name: "Udon",
    cover: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Japanese Curry Udon with Chicken Katsu", desc: "Udon kari Jepang + chicken katsu.", price: k(78000), image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Seafood Yaki Udon", desc: "Udon goreng dengan seafood & sayuran.", price: k(68000), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80" },
      { name: "Chicken Teriyaki Udon", desc: "Udon goreng ayam saus teriyaki.", price: k(68000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "rice-bowl",
    name: "Rice Bowl & Curry",
    cover: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Sirloin Katsudon", price: k(68000), image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Beef Steak Donburi", price: k(68000), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80" },
      { name: "Chicken Katsudon", price: k(48000), image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80" },
      { name: "Chicken Teriyaki Donburi", price: k(48000), image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80" },
      { name: "Chicken Karaage Donburi", price: k(48000), image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80" },
      { name: "Japanese Curry Rice with Sirloin Katsu", price: k(78000), image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Japanese Curry Rice with Chicken Katsu", price: k(68000), image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80" },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    cover: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Cotton Cheese Cake", price: k(38000), image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Dark Chocolate Mille Crepe", price: k(38000), image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Profiteroles Ice Cream", price: k(38000), image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80" },
      { name: "Banana Split", price: k(58000), image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80" },
      { name: "Fuse Ice Cream", price: k(30000) },
      { name: "Banana Fritters with Vanilla Ice Cream", price: k(38000) },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    blurb: "Harga: Hot / Cold",
    cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Americano", price: "Rp 18.000 / 20.000", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" },
      { name: "Cappucino", desc: "Espresso, milk.", price: "Rp 28.000 / 30.000", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Caramel Macchiato", desc: "Vanilla syrup, milk, espresso.", price: "Rp 30.000 / 32.000", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" },
      { name: "Cafe Latte", price: "Rp 28.000 / 30.000", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" },
      { name: "Espresso", price: "Rp 18.000" },
      { name: "Double Espresso", price: "Rp 22.000" },
      { name: "Caramel Latte", price: "Rp 28.000 / 30.000" },
      { name: "Hazelnut Latte", price: "Rp 28.000 / 30.000" },
      { name: "Tiramisu Latte", price: "Rp 30.000 / 32.000" },
      { name: "Vanilla Latte", price: "Rp 28.000 / 30.000" },
      { name: "Mochaccino", price: "Rp 28.000 / 30.000" },
      { name: "Kopi Susu Aren", price: "Rp 25.000 / 27.000", featured: true },
      { name: "Vietnam Drip", price: "Rp 25.000" },
      { name: "Frapucino", price: "Rp 29.000 (cold)" },
    ],
  },
  {
    id: "non-coffee",
    name: "Non-Coffee & Milkshake",
    cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Chocolate Latte", price: "Rp 25.000 / 27.000" },
      { name: "Matcha Latte", price: "Rp 30.000 / 32.000", featured: true },
      { name: "Red Velvet Latte", price: "Rp 25.000 / 27.000" },
      { name: "Taro Latte", price: "Rp 25.000 / 27.000" },
      { name: "Milo Dinosaur", price: "Rp 25.000 / 27.000" },
      { name: "Chocolate Frappe", price: "Rp 29.000" },
      { name: "Matcha Frappe", price: "Rp 34.000" },
      { name: "Red Velvet Frappe", price: "Rp 29.000" },
      { name: "Taro Frappe", price: "Rp 29.000" },
      { name: "Chocolate Milkshake", price: "Rp 28.000" },
      { name: "Strawberry Milkshake", price: "Rp 28.000", featured: true },
      { name: "Vanilla Milkshake", price: "Rp 28.000" },
      { name: "Banana Milkshake", price: "Rp 28.000" },
    ],
  },
  {
    id: "mocktail",
    name: "Mocktail",
    cover: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Summer Blue Ocean Mojito", price: k(32000), image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80", featured: true, tag: "Signature" },
      { name: "Fruit Punch", price: k(32000), image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80" },
      { name: "Lychee Mojito", price: k(27000), image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80", featured: true },
      { name: "Mango Mojito", price: k(27000), image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80" },
      { name: "Rainbow Mojito", price: k(27000), image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80" },
      { name: "Shirley Temple", price: k(32000) },
      { name: "Strawberry Mojito", price: k(27000) },
      { name: "Virgin Mojito", price: k(27000) },
    ],
  },
  {
    id: "tea-juice",
    name: "Tea, Juice & Soft Drinks",
    cover: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Black Tea", price: "Rp 12.000 / 14.000" },
      { name: "Green Tea", price: "Rp 15.000 / 17.000" },
      { name: "Lemon Tea", price: "Rp 18.000 / 20.000" },
      { name: "Lychee Tea", price: "Rp 22.000 / 24.000" },
      { name: "Mango Tea", price: "Rp 22.000 / 24.000" },
      { name: "Pineapple Tea", price: "Rp 22.000 / 24.000" },
      { name: "Strawberry Tea", price: "Rp 22.000 / 24.000" },
      { name: "Avocado Juice", price: k(35000) },
      { name: "Mango Juice", price: k(28000) },
      { name: "Orange Juice", price: "Rp 28.000 / 45.000 (pure)" },
      { name: "Pineapple Juice", price: "Rp 28.000 / 45.000 (pure)" },
      { name: "Watermelon Juice", price: "Rp 28.000 / 45.000 (pure)" },
      { name: "Soursop Juice", price: k(28000) },
      { name: "Coca Cola", price: k(12000) },
      { name: "Sprite", price: k(12000) },
      { name: "Fanta", price: k(12000) },
      { name: "Mineral Water", price: k(8000) },
    ],
  },
  {
    id: "beer-wine",
    name: "Beer & Wine",
    blurb: "Untuk tamu 21 tahun ke atas.",
    cover: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Carlsberg", price: k(30000) },
      { name: "Bintang", price: k(30000) },
      { name: "Heineken", price: k(30000) },
      { name: "Carlo Rossi (Glass)", price: k(65000) },
      { name: "Jacob's Creek Merlot (Glass)", price: k(85000) },
      { name: "Jacob's Creek Chardonnay (Glass)", price: k(85000) },
      { name: "Carlo Rossi (Bottle)", price: k(350000) },
      { name: "Jacob's Creek Merlot (Bottle)", price: k(420000) },
      { name: "Jacob's Creek Chardonnay (Bottle)", price: k(420000) },
    ],
  },
];

export const FEATURED: { item: MenuItem; category: string }[] = MENU.flatMap((c) =>
  c.items.filter((i) => i.featured).map((item) => ({ item, category: c.name }))
);
