export const RESTAURANT = {
  name: "Fuse Cafe & Grill",
  tagline: "Steak Premium dengan Suasana Hangat di Batam",
  category: "Restoran Steak",
  rating: 4.9,
  reviewCount: 752,
  priceRange: "Rp 75.000 – 200.000 / orang",
  address:
    "Ruko Citra Indah Blok A5 No 1 & 2, Teluk Tering, Batam Kota, Kepulauan Riau 29444",
  shortAddress: "Ruko Citra Indah Blok A5 No 1 & 2, Batam Kota",
  hours: "Setiap hari · 11.00 – 22.30 WIB",
  hoursDetail: [
    { day: "Senin – Jumat", time: "11.00 – 22.30" },
    { day: "Sabtu", time: "11.00 – 23.00" },
    { day: "Minggu", time: "11.00 – 22.30" },
  ],
  lastOrder: "Last order 22.00",
  phoneDisplay: "+62 811-7773-566",
  whatsapp: "628117773566",
  mapsUrl:
    "https://www.google.com/maps/place/Fuse+Cafe+and+Grill,+Ruko+Citra+Indah+Blok+A5+No+1+%26+2,+Tlk.+Tering,+Kec.+Batam+Kota,+Kota+Batam,+Kepulauan+Riau+29444,+Indonesia/@1.1282018,104.0385383,21z/data=!3m1!1e3!4m6!3m5!1s0x31d989993b661b53:0xc01104af4bd2222d!8m2!3d1.1281681!4d104.0385176!16s%2Fg%2F11kqt6h_q4?hl=en-GB&gl=US&g_ep=Eg1tbF8yMDI2MDYxMF8wIJvbDyoASAJQAQ%3D%3D",
  mapsEmbed:
    "https://www.google.com/maps?q=1.1281681,104.0385176&z=17&output=embed",
};

export function waLink(message: string) {
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`;
}
