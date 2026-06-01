import Image from "next/image";

const whatsapp = "201112249139";

const branches = [
  { name: "العجوزة", location: "https://maps.app.goo.gl/MKWJvoWvB1nLtnA2A" },
  { name: "المعادي", location: "https://maps.app.goo.gl/jPQXZ6oPAXsjT7Y27" },
  { name: "حدائق الأهرام", location: "https://maps.app.goo.gl/bTbkMvq96zJ2o2YF9" },
  { name: "إمبابة", location: "https://maps.app.goo.gl/DPLpZtsDNuzyX3vy6" },
  { name: "6 أكتوبر", location: "https://maps.app.goo.gl/bmsRjkVrk3X542t2A?g_st=iw" },
  { name: "المهندسين", location: "https://maps.app.goo.gl/YBK1daTYh87iH1fr8" },
];

const products = [
  { name: "علبة مشكل", category: "حلويات غربية", image: "/images/box.jpg" },
  { name: "دايمًا طازة فينو", category: "مخبوزات", image: "/images/school-fino.jpg" },
  { name: "دايمًا طازة كيزر", category: "مخبوزات", image: "/images/kaizer.jpg" },
  { name: "بسكويت", category: "بسكويت", image: "/images/biscuit.jpg" },
  { name: "بلح الشام", category: "حلويات شرقية", image: "/images/balah.jpg" },
  { name: "كنافة بورمة لوز", category: "حلويات شرقية", image: "/images/kunafa-borma.jpg" },
  { name: "جولاش حلو", category: "حلويات شرقية", image: "/images/goulash.jpg" },
  { name: "بقلاوة", category: "حلويات شرقية", image: "/images/baklava.jpg" },
  { name: "كوكيز", category: "بسكويت", image: "/images/cookies.jpg" },
  { name: "كرواسون وفروعنا", category: "مخبوزات", image: "/images/croissant-map.jpg" },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#150807] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(201,108,44,.45),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(111,78,139,.35),transparent_35%),linear-gradient(180deg,#220b08_0%,#120706_55%,#210d0b_100%)]" />
      <div className="fixed left-[-80px] top-20 -z-10 h-72 w-72 animate-pulse rounded-full bg-[#c96b2c]/30 blur-3xl" />
      <div className="fixed bottom-0 right-[-60px] -z-10 h-80 w-80 animate-pulse rounded-full bg-[#6f4e8b]/40 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120706]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="طيبة" width={150} height={70} className="h-12 w-auto rounded-xl bg-white/90 p-2 shadow-xl" priority />
            <span className="hidden text-sm font-black text-[#f5c08b] md:block">من الفينو للجاتوه</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-white/85 md:flex">
            <a href="#products" className="hover:text-[#f5c08b]">منتجاتنا</a>
            <a href="#branches" className="hover:text-[#f5c08b]">فروعنا</a>
            <a href="#contact" className="hover:text-[#f5c08b]">تواصل</a>
          </nav>
          <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("أرغب في عمل طلب من طيبة")}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:scale-105">
            اطلب واتساب
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden">
        <Image src="/images/store.jpg" alt="واجهة محل طيبة" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#150807]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 py-16">
          <div className="max-w-3xl rounded-[2.2rem] border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-10">
            <div className="mb-7 flex flex-wrap items-center gap-4">
              <Image src="/images/rigosa.png" alt="Rigosa" width={150} height={150} className="h-28 w-28 rounded-full bg-white/10 object-contain p-2 drop-shadow-2xl md:h-36 md:w-36" />
              <div>
                <p className="mb-3 inline-block rounded-full bg-[#c96b2c] px-5 py-2 text-sm font-black shadow-lg">Rigosa ع الأصل دور</p>
                <h1 className="text-4xl font-black leading-tight text-[#ffd0a3] drop-shadow-2xl md:text-7xl">طيبة من الفينو للجاتوه</h1>
              </div>
            </div>
            <p className="max-w-2xl text-xl font-bold leading-10 text-white md:text-2xl">اللمة عليك والحلو علينا — مخبوزات وحلويات شرقية وغربية طازة يوميًا.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("أرغب في عمل طلب من طيبة")}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-8 py-4 text-lg font-black text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105">اطلب دلوقتي</a>
              <a href="#branches" className="rounded-full border border-white/30 bg-white/15 px-8 py-4 text-lg font-black text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/25">شوف أقرب فرع</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["طازة يوميًا", "منتجات بتطلع من الفرن أول بأول"],
            ["طلبات واتساب", "اطلب بسرعة من غير تعقيد"],
            ["فروع قريبة", "اختار الفرع وافتح اللوكيشن مباشرة"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur transition hover:-translate-y-2">
              <h3 className="text-2xl font-black text-[#ffd0a3]">{title}</h3>
              <p className="mt-3 text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <p className="font-black text-[#c96b2c]">منتجاتنا</p>
          <h2 className="mt-2 text-4xl font-black text-[#ffd0a3] md:text-6xl">اختار اللي نفسك فيه</h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white text-[#24160f] shadow-2xl transition duration-500 hover:-translate-y-3 hover:shadow-[#c96b2c]/30">
              <div className="relative h-72 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-[#6f4e8b] px-4 py-2 text-sm font-black text-white shadow-lg">{product.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#6f4e8b]">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">طازة يوميًا بجودة طيبة المعروفة وطعم يناسب كل اللمة.</p>
                <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`أرغب في طلب ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-2xl bg-[#c96b2c] py-3 text-center font-black text-white transition hover:bg-[#a8511e]">اطلب المنتج</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="branches" className="relative bg-white px-4 py-16 text-[#24160f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(201,108,44,.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(111,78,139,.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="font-black text-[#c96b2c]">فروعنا</p>
            <h2 className="mt-2 text-4xl font-black text-[#6f4e8b] md:text-6xl">اضغط على الفرع وافتح اللوكيشن</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <a key={branch.name} href={branch.location} target="_blank" rel="noopener noreferrer" className="rounded-[1.6rem] bg-[#fbefe4] p-6 text-center text-xl font-black shadow-lg ring-1 ring-black/5 transition hover:-translate-y-2 hover:bg-[#6f4e8b] hover:text-white hover:shadow-2xl">
                📍 {branch.name}
                <span className="mt-2 block text-sm font-bold opacity-70">افتح على Google Maps</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 text-center">
        <Image src="/images/rigosa.png" alt="Rigosa" width={130} height={130} className="mx-auto mb-6 h-28 w-28 rounded-full object-contain drop-shadow-2xl" />
        <h2 className="text-4xl font-black text-[#ffd0a3]">جاهزين لطلبك</h2>
        <p className="mt-4 text-white/75">الخط الساخن: 17548 — واتساب: 01112249139</p>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block rounded-full bg-[#25D366] px-9 py-4 text-lg font-black text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105">كلمنا واتساب</a>
      </section>

      <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 left-5 z-50 rounded-full bg-[#25D366] px-6 py-4 font-black text-white shadow-2xl transition hover:scale-110">واتساب</a>

      <footer className="border-t border-white/10 bg-black/45 px-4 py-8 text-center text-white/70">
        <p>© 2026 طيبة من الفينو للجاتوه — Rigosa</p>
      </footer>
    </main>
  );
}
