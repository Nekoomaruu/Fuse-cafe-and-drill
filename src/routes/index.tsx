import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  MessageCircle,
  ChefHat,
  UtensilsCrossed,
  Flame,
  Heart,
  Menu as MenuIcon,
  X,
  ArrowRight,
  Instagram,
  Plus,
  Minus,
} from "lucide-react";
import { FEATURED } from "@/data/menu";
import { RESTAURANT, waLink } from "@/data/restaurant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fuse Cafe & Grill — Steak Premium di Batam" },
      {
        name: "description",
        content:
          "Restoran steak premium di Batam Kota. Sirloin, Wagyu, Rib Eye, pasta, dan kopi. Buka setiap hari sampai 22.30. Reservasi via WhatsApp.",
      },
      { name: "keywords", content: "steak Batam, restoran steak Batam, cafe steak Batam, Fuse Cafe Grill, wagyu Batam, steak premium Batam Kota" },
      { property: "og:title", content: "Fuse Cafe & Grill — Steak Premium di Batam" },
      { property: "og:description", content: "Sirloin, Wagyu, Rib Eye & lebih. Buka tiap hari hingga 22.30." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: RESTAURANT.name,
          servesCuisine: ["Steak", "Western", "Asian Fusion"],
          priceRange: "Rp75.000 - Rp200.000",
          telephone: RESTAURANT.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ruko Citra Indah Blok A5 No 1 & 2",
            addressLocality: "Teluk Tering, Batam Kota",
            addressRegion: "Kepulauan Riau",
            postalCode: "29444",
            addressCountry: "ID",
          },
          openingHours: "Mo-Su 11:00-22:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "752",
          },
        }),
      },
    ],
  }),
  component: Home,
});

// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <FeaturedMenu />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWA />
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "Tentang" },
    { href: "#gallery", label: "Galeri" },
    { href: "#reviews", label: "Ulasan" },
    { href: "#location", label: "Lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-gold" />
          <span className="font-display text-lg font-semibold tracking-wide">
            Fuse <span className="text-gold">&</span> Grill
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink hover:opacity-90 transition shadow-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Reservasi
        </a>
        <button
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60"
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-foreground hover:bg-secondary"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-gold" />
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink"
              >
                <MessageCircle className="h-4 w-4" />
                Reservasi via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80"
          alt="Steak premium Fuse Cafe & Grill Batam"
          className="h-full w-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-center px-5 py-16">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/40 px-3 py-1.5 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="text-xs tracking-wide text-muted-foreground">
              <span className="text-gold font-semibold">{RESTAURANT.rating}</span> · {RESTAURANT.reviewCount} ulasan Google
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Steak Premium
            <br />
            <span className="text-gradient-gold">dengan Suasana Hangat</span>
            <br />
            di Batam.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dari Sirloin New Zealand hingga Wagyu Tajima, dinikmati di ruang yang
            tenang dan elegan. Cocok untuk keluarga, pasangan, dan teman dekat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-background/30 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:border-gold/80 hover:bg-background/60 transition"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              Pesan via WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            <Stat label="Rating" value="4.9★" />
            <Stat label="Ulasan" value="752+" />
            <Stat label="Tutup" value="22.30" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-gold/30 pl-3">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-xl text-gold">{value}</dd>
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Tentang Kami</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Lebih dari sekadar makan steak.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Di Fuse Cafe &amp; Grill, kami percaya makanan terbaik datang dengan
            cerita dan kenangan. Berlokasi di Batam Kota, kami menyajikan
            pengalaman bersantap yang hangat — dari grill premium hingga kopi dan
            mocktail yang menyenangkan.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              { icon: ChefHat, text: "Daging pilihan: NZ, US Black Angus, Wagyu Tajima" },
              { icon: UtensilsCrossed, text: "Menu lintas dunia — Western, Asia, dan Nusantara" },
              { icon: Heart, text: "Suasana cocok untuk keluarga, pasangan & teman" },
            ].map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                  <f.icon className="h-4 w-4 text-gold" />
                </span>
                <span className="text-muted-foreground">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" alt="Steak" className="rounded-2xl object-cover aspect-[4/5] shadow-elegant" />
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" alt="Coffee" className="rounded-2xl object-cover aspect-[4/5] mt-10 shadow-elegant" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED MENU ───────────────────────────────────────────────────────────

function FeaturedMenu() {
  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-smoke/40">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <SectionLabel>Menu Unggulan</SectionLabel>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Pilihan favorit dari dapur kami.
            </h2>
          </div>
          <Link to="/menu" className="text-sm text-gold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Lihat semua menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED.slice(0, 9).map(({ item, category }) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-smoke">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gold/40">
                    <UtensilsCrossed className="h-10 w-10" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/95 to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                    {item.tag}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug">{item.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-gold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.desc && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Apakah perlu reservasi sebelum datang?",
    a: "Tidak wajib, tapi sangat disarankan untuk akhir pekan dan jam makan malam. Reservasi mudah via WhatsApp di +62 811-7773-566.",
  },
  {
    q: "Apakah tersedia area untuk keluarga & anak-anak?",
    a: "Ya, suasana kami nyaman untuk keluarga. Tersedia menu yang ramah anak seperti nasi goreng, chicken nugget, dan milkshake.",
  },
  {
    q: "Apakah ada menu selain steak?",
    a: "Tentu — kami punya pasta, rice bowl Jepang, laksa, salad, burger, kopi, mocktail, dan dessert. Cek menu lengkap untuk semua pilihan.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima Tunai, QRIS, kartu Debit, dan Kartu Kredit (Visa/Mastercard).",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <SectionLabel>Pertanyaan</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Sering ditanyakan.
          </h2>
        </div>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium pr-2">{f.q}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────

function Gallery() {
  const images = [
    { src: "/gallery/indoor-1.jpg", label: "Suasana Indoor" },
    { src: "/gallery/indoor-2.jpg", label: "Ruang Makan" },
    { src: "/gallery/indoor-3.jpg", label: "Area Bersama" },
    { src: "/gallery/indoor-4.jpg", label: "Sudut Hangat" },
    { src: "/gallery/indoor-5.jpg", label: "Meja Keluarga" },
    { src: "/gallery/indoor-6.jpg", label: "Bar & Lounge" },
    { src: "/gallery/indoor-7.jpg", label: "Interior" },
  ];
  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-smoke/40">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <SectionLabel>Galeri</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Sajian &amp; suasana.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <figure
              key={img.src + i}
              className={`group relative overflow-hidden rounded-2xl bg-card ${
                i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs uppercase tracking-widest text-white bg-gradient-to-t from-ink/90 to-transparent">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS ─────────────────────────────────────────────────────────────────

function Reviews() {
  const reviews = [
    {
      name: "Andini P.",
      text: "Sirloin-nya juicy banget, kentangnya pas. Tempatnya nyaman buat dinner keluarga.",
      rating: 5,
    },
    {
      name: "Rizky H.",
      text: "Wagyu Tajima-nya worth it untuk perayaan. Pelayanan ramah, suasana cozy.",
      rating: 5,
    },
    {
      name: "Mira S.",
      text: "Fuse Fried Rice favorit anak-anak, kopi susu aren-nya mantap. Pasti balik lagi.",
      rating: 5,
    },
  ];
  return (
    <section id="reviews" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <SectionLabel>Ulasan Pelanggan</SectionLabel>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {RESTAURANT.rating}<span className="text-gold">/5</span>
            </h2>
            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-3 text-muted-foreground">
              Berdasarkan <span className="text-foreground font-medium">{RESTAURANT.reviewCount}</span> ulasan publik di Google.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-elegant"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">— {r.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LOCATION ────────────────────────────────────────────────────────────────

function Location() {
  return (
    <section id="location" className="relative py-20 sm:py-28 bg-smoke/40">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <SectionLabel>Kunjungi Kami</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Mari bertemu di Batam Kota.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant aspect-[4/3] md:aspect-auto md:min-h-[360px]">
            <iframe
              title="Lokasi Fuse Cafe & Grill"
              src={RESTAURANT.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full "
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col">
            <ul className="space-y-5">
              <InfoRow icon={MapPin} title="Alamat">
                {RESTAURANT.address}
              </InfoRow>
              <InfoRow icon={Clock} title="Jam Operasional">
                <span className="block">Buka setiap hari</span>
                <ul className="mt-2 space-y-1 text-sm">
                  {RESTAURANT.hoursDetail.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 max-w-xs">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-2 inline-block text-xs text-gold">{RESTAURANT.lastOrder}</span>
              </InfoRow>
              <InfoRow icon={Phone} title="Telepon / WhatsApp">
                <a className="hover:text-gold" href={`tel:+${RESTAURANT.whatsapp}`}>
                  {RESTAURANT.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={UtensilsCrossed} title="Layanan">
                Makan di tempat &amp; bawa pulang · {RESTAURANT.priceRange}
              </InfoRow>
            </ul>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={waLink(
                  "Halo Fuse Cafe & Grill, saya ingin reservasi meja. Mohon info ketersediaan.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Reservasi WhatsApp
              </a>
              <a
                href={RESTAURANT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-5 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition"
              >
                <MapPin className="h-4 w-4" />
                Petunjuk Arah
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
        <Icon className="h-4 w-4 text-gold" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm text-foreground leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-gold" />
            <span className="font-display text-lg font-semibold">
              Fuse <span className="text-gold">&</span> Grill
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Restoran steak premium di Batam Kota dengan suasana hangat untuk
            keluarga, pasangan, dan teman.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:+${RESTAURANT.whatsapp}`} className="hover:text-gold inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gold" /> {RESTAURANT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink("Halo Fuse Cafe & Grill, saya ingin bertanya.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold inline-flex items-center gap-2"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold" /> WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-gold mt-1 shrink-0" />
              <span>{RESTAURANT.shortAddress}</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-gold" /> {RESTAURANT.hours}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Ikuti</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-muted-foreground">
        <p>© 2026 Fuse Cafe &amp; Grill — Batam.</p>
        <p className="opacity-70">
          Demo konsep independen, belum berafiliasi dengan pihak Fuse Cafe and Grill.
        </p>
      </div>
    </footer>
  );
}

// ─── FLOATING WA ─────────────────────────────────────────────────────────────

function FloatingWA() {
  return (
    <a
      href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-gold animate-float hover:scale-105 transition"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
    </a>
  );
}

// ─── shared ──────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}
