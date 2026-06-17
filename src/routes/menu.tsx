import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Search, MessageCircle, Flame } from "lucide-react";
import { MENU } from "@/data/menu";
import { RESTAURANT, waLink } from "@/data/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu Lengkap — Fuse Cafe & Grill Batam" },
      {
        name: "description",
        content:
          "Menu lengkap Fuse Cafe & Grill Batam: steak premium, pasta, rice bowl, kopi, mocktail dan lainnya. Cari dan filter dengan mudah.",
      },
      { property: "og:title", content: "Menu Lengkap — Fuse Cafe & Grill Batam" },
      { property: "og:description", content: "Steak premium, pasta, kopi, mocktail dan banyak lagi." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) =>
          (activeCat === "all" || activeCat === cat.id) &&
          (q === "" ||
            i.name.toLowerCase().includes(q) ||
            (i.desc?.toLowerCase().includes(q) ?? false)),
      ),
    })).filter((c) => c.items.length > 0);
  }, [query, activeCat]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-gold" />
            <span className="font-display text-lg font-semibold">
              Fuse <span className="text-gold">&</span> Grill
            </span>
          </Link>
          <a
            href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
            target="_blank"
            rel="noreferrer"
            aria-label="Reservasi via WhatsApp"
            className="inline-flex items-center justify-center h-9 w-9 sm:h-auto sm:w-auto sm:px-4 sm:py-2 rounded-full bg-gold text-ink text-sm font-medium hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Reservasi</span>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Menu Lengkap
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Seluruh menu kami.
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
            Cari berdasarkan nama atau pilih kategori di bawah.
          </p>
        </div>

        {/* Search + filter */}
        <div className="sticky top-[60px] z-30 -mx-5 px-5 py-3 mt-8 bg-background/85 backdrop-blur-xl border-y border-border">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <label htmlFor="menu-search" className="sr-only">Cari menu</label>
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari menu, mis. sirloin, latte, mojito..."
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/60"
            />
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Chip active={activeCat === "all"} onClick={() => setActiveCat("all")}>Semua</Chip>
            {MENU.map((c) => (
              <Chip key={c.id} active={activeCat === c.id} onClick={() => setActiveCat(c.id)}>
                {c.name}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-14">
          {results.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              Tidak ada menu yang cocok dengan pencarian.
            </p>
          ) : (
            results.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-gold">{cat.name}</h2>
                    {cat.blurb && (
                      <p className="mt-1 text-sm text-muted-foreground max-w-xl">{cat.blurb}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{cat.items.length} item</span>
                </div>
                <ul className="divide-y divide-border border-y border-border">
                  {cat.items.map((i) => (
                    <li key={i.name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 items-start">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-medium font-sans">{i.name}</h3>
                          {i.tag && (
                            <span className="text-[10px] uppercase tracking-wider text-gold border border-gold/40 rounded-full px-1.5 py-0.5">
                              {i.tag}
                            </span>
                          )}
                        </div>
                        {i.desc && (
                          <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-gold whitespace-nowrap">
                        {i.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8 text-center">
          <h2 className="font-display text-2xl">Siap pesan meja?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Hubungi kami langsung via WhatsApp untuk reservasi atau pertanyaan menu.
          </p>
          <a
            href={waLink("Halo Fuse Cafe & Grill, saya ingin reservasi meja.")}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Reservasi via WhatsApp
          </a>
          <p className="mt-5 text-xs text-muted-foreground">
            {RESTAURANT.shortAddress} · {RESTAURANT.hours}
          </p>
        </div>
      </section>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium border transition ${
        active
          ? "bg-gold border-gold text-ink"
          : "border-border text-muted-foreground hover:border-gold/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
