# Fuse Cafe & Grill — Static Site

Multi-page HTML/CSS/JS (vanilla) untuk demo Fuse Cafe & Grill Batam.

## Struktur

```
/
├── index.html        Beranda (hero, menu unggulan, galeri preview, info)
├── menu.html         Menu lengkap (semua kategori + sticky chips nav)
├── gallery.html      Galeri suasana indoor + lightbox
├── contact.html      Kontak, jam buka, Google Maps embed
└── assets/
    ├── css/style.css
    ├── js/data.js    Data restoran + menu
    ├── js/main.js    Nav, footer, FAB WhatsApp, reveal animation
    └── img/gallery/  Foto indoor (jpg)
```

## Cara Pakai

**Buka langsung:** double click `index.html` — jalan tanpa server.

**Deploy ke Netlify:**
1. Drag & drop folder ini ke https://app.netlify.com/drop
2. Selesai.

**Deploy ke Vercel:**
1. `vercel` di folder ini, atau import via dashboard.
2. Framework preset: **Other**. Output directory: kosong (root).

## Edit Konten

- Info restoran (alamat, jam, WhatsApp, link Maps) → `assets/js/data.js` bagian `window.RESTAURANT`.
- Menu → `assets/js/data.js` bagian `window.MENU`.
- Foto galeri → ganti file di `assets/img/gallery/` dan update `window.GALLERY`.

Tidak ada build step. Edit → refresh browser → selesai.
