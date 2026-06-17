# Fuse Cafe & Grill — Deployment Guide

Proyek ini dibangun dengan **TanStack Start + React + Vite**.

## Prasyarat

- [Bun](https://bun.sh/) atau Node.js 20+
- Akun [Netlify](https://netlify.com) atau [Vercel](https://vercel.com)

## Deploy ke Netlify (Direkomendasikan)

### Opsi 1: Zip Upload (drag & drop)

1. Build untuk Netlify:
   ```bash
   bun install
   bun run build:netlify
   ```
2. Folder `dist/` sudah berisi file siap deploy.
3. Buka Netlify Dashboard → **Add new site** → **Deploy manually**.
4. Drag & drop folder `dist/` ke Netlify.

### Opsi 2: Git Push (Auto Deploy)

1. Push repo ke GitHub/GitLab/Bitbucket.
2. Buka Netlify → **Add new site** → **Import an existing project**.
3. Pilih repo ini.
4. Netlify akan otomatis membaca `netlify.toml`:
   - Build command: `bun run build:netlify`
   - Publish directory: `dist`

## Deploy ke Vercel

### Opsi 1: Zip Upload (Vercel CLI)

1. Build untuk Vercel:
   ```bash
   bun install
   bun run build:vercel
   ```
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel --prod
   ```

### Opsi 2: Git Import

1. Push repo ke GitHub.
2. Buka Vercel Dashboard → **Add New Project**.
3. Import repo ini.
4. Sesuaikan build settings:
   - Build Command: `bun run build:vercel`
   - Output Directory: `.vercel/output`

## Catatan Penting

- **Gambar gallery**: Sudah ada di `public/gallery/` — akan otomatis disertakan dalam build.
- **Google Maps**: Embed maps dan link directions sudah dikonfigurasi di `src/data/restaurant.ts`.
- **WhatsApp**: Link otomatis mengarah ke `wa.me/628117773566`.

## Struktur Folder Utama

```
public/          — Asset statis (gambar, favicon, dll)
src/routes/      — Halaman website (index.tsx, menu.tsx)
src/data/        — Data menu & restoran
src/components/  — Komponen UI reusable
```

## Troubleshooting

- **Build error**: Pastikan Bun/Node versi 20+.
- **Gambar tidak muncul**: Pastikan folder `public/gallery/` ada di dalam zip.
- **Hydration mismatch**: Biasanya terjadi karena ekstensi browser. Abaikan jika tidak muncul di browser lain.
