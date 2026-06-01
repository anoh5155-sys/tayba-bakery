import Image from "next/image";

const whatsapp = "201112249139";
const hotline = "17548";

const branches = [
  { name: "العجوزة - الفرع الرئيسي والوحيد بالعجوزة", location: "https://maps.app.goo.gl/MKWJvoWvB1nLtnA2A" },
  { name: "المعادي", location: "https://maps.app.goo.gl/jPQXZ6oPAXsjT7Y27" },
  { name: "حدائق الأهرام", location: "https://maps.app.goo.gl/bTbkMvq96zJ2o2YF9" },
  { name: "إمبابة", location: "https://maps.app.goo.gl/DPLpZtsDNuzyX3vy6" },
  { name: "6 أكتوبر", location: "https://maps.app.goo.gl/bmsRjkVrk3X542t2A?g_st=iw" },
  { name: "المهندسين", location: "https://maps.app.goo.gl/YBK1daTYh87iH1fr8" },
];

const products = [
  { name: "علب مشكل", category: "حلويات غربية", image: "/images/box.jpg" },
  { name: "فينو طازة", category: "مخبوزات", image: "/images/school-fino.jpg" },
  { name: "كيزر", category: "مخبوزات", image: "/images/kaizer.jpg" },
  { name: "بسكويت", category: "بسكويت", image: "/images/biscuit.jpg" },
  { name: "بلح الشام", category: "حلويات شرقية", image: "/images/balah.jpg" },
  { name: "كنافة بورمة", category: "حلويات شرقية", image: "/images/kunafa-borma.jpg" },
  { name: "جولاش", category: "حلويات شرقية", image: "/images/goulash.jpg" },
  { name: "بقلاوة", category: "حلويات شرقية", image: "/images/baklava.jpg" },
  { name: "كوكيز", category: "بسكويت", image: "/images/cookies.jpg" },
];

const taybaVideos = ["/videos/tayba2.mp4"];
const marketVideos = ["/videos/market1.mp4"];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#120807] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(201,108,44,.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,78,139,.35),transparent_35%),linear-gradient(180deg,#170907,#090403)]" />

      <header className="sticky top-0 z-50 border-b border-[#c9a86a]/30 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Image src="/images/logo.png" alt="طيبة" width={170} height={80} className="h-14 w-auto rounded-xl bg-white/90 p-2 shadow-xl" priority />

          <nav className="hidden gap-6 font-black md:flex">
            <a href="#products" className="hover:text-[#ffd0a3]">الأصناف</a>
            <a href="#branches" className="hover:text-[#ffd0a3]">الفروع</a>
            <a href="#doctor" className="hover:text-[#ffd0a3]">الدكتور ماركت</a>
          </nav>

          <a href="https://wa.me/201112249139" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-5 py-3 font-black text-white shadow-2xl transition hover:scale-105">
            واتساب
          </a>
        </div>
      </header>

      <section className="relative min-h-[95vh] overflow-hidden">
        <Image src="/images/store.jpg" alt="واجهة طيبة" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl items-center px-4">
          <div className="max-w-3xl rounded-[2rem] border border-[#c9a86a]/40 bg-black/45 p-8 shadow-2xl backdrop-blur-md">
            <Image src="/images/rigosa.png" alt="Rigosa" width={230} height={230} className="mb-7 h-44 w-44 animate-pulse rounded-full bg-[#fff4e4] object-contain p-3 shadow-[0_0_50px_rgba(201,168,106,.8)]" />

            <p className="mb-5 inline-block rounded-full bg-[#c96b2c] px-5 py-2 text-lg font-black">
              Rigosa ع الأصل دور
            </p>

            <h1 className="text-5xl font-black leading-tight text-[#ffd0a3] md:text-7xl">
              طيبة من الفينو للجاتوه
            </h1>

            <p className="mt-5 text-2xl font-bold leading-10 text-white">
              اللمة عليك والحلو علينا
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/201112249139" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600 px-8 py-4 text-lg font-black text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105">
                اطلب الآن
              </a>

              <a href="tel:17548" className="rounded-full bg-[#c9a86a] px-8 py-4 text-lg font-black text-black shadow-2xl transition hover:-translate-y-1 hover:scale-105">
                الخط الساخن {hotline}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-4">
        {["جودة مضمونة", "طازة يوميًا", "طلبات واتساب", `الخط الساخن ${hotline}`].map((item) => (
          <div key={item} className="rounded-3xl border border-[#c9a86a]/30 bg-white/10 p-6 text-center shadow-xl transition hover:-translate-y-2">
            <h3 className="text-2xl font-black text-[#ffd0a3]">{item}</h3>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
  <h2 className="mb-8 text-center text-5xl font-black text-[#ffd0a3]">
    فيديوهات من داخل طيبة
  </h2>

  <video
    src="/videos/tayba1.mp4"
    controls
    muted
    preload="metadata"
    className="h-[750px] w-full rounded-[2rem] object-cover shadow-2xl"
  />
</section>
      <section id="products" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-5xl font-black text-[#ffd0a3]">
          أصنافنا
        </h2>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[2rem] bg-white text-[#24160f] shadow-2xl transition hover:-translate-y-3">
              <div className="relative h-72 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute right-4 top-4 rounded-full bg-[#6f4e8b] px-4 py-2 text-sm font-black text-white">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-[#6f4e8b]">{product.name}</h3>
                <p className="mt-2 text-gray-600">طازة يوميًا بجودة طيبة المعروفة.</p>
                <a href="https://wa.me/201112249139" target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-2xl bg-[#c96b2c] py-3 text-center font-black text-white">
                  اطلب المنتج
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="branches" className="bg-white px-4 py-16 text-[#24160f]">
        <h2 className="mb-10 text-center text-5xl font-black text-[#6f4e8b]">
          فروعنا
        </h2>

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <a key={branch.name} href={branch.location} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-[#fbefe4] p-6 text-center text-xl font-black shadow-lg transition hover:-translate-y-2 hover:bg-[#6f4e8b] hover:text-white">
              📍 {branch.name}
              <span className="mt-2 block text-sm">افتح اللوكيشن</span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-red-300 bg-red-50 p-6 text-center text-xl font-black text-red-700">
          تنويه هام: ليس لنا فروع أخرى بالعجوزة سوى الفرع الرئيسي فقط.
        </div>
      </section>

      <section id="doctor" className="mx-auto max-w-7xl px-4 py-16">
  <div className="rounded-[2rem] border border-[#c9a86a]/40 bg-gradient-to-br from-[#321226] to-[#160807] p-7 shadow-2xl">

    <h2 className="text-center text-5xl font-black text-[#ffd0a3]">
      الدكتور ماركت
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-9 text-white/80">
     بجوار طيبة من الفينو للجاتوه فرع العجوزة  ماركت تابع لنا 
      <strong className="text-[#ffd0a3]">
        {" "}الدكتور لتجارة المواد الغذائية
      </strong>
    </p>

    <video
      src="/videos/market1.mp4"
      controls
      muted
      preload="metadata"
      className="mt-8 h-[750px] w-full rounded-[2rem] object-cover shadow-2xl"
    />
  </div>
</section>

      <section className="px-4 py-16 text-center">
        <Image src="/images/rigosa.png" alt="Rigosa" width={220} height={220} className="mx-auto mb-7 h-44 w-44 rounded-full bg-[#fff4e4] object-contain p-3 shadow-[0_0_60px_rgba(201,168,106,.9)]" />

        <h2 className="text-4xl font-black text-[#ffd0a3]">
          الخط الساخن
        </h2>

        <p className="mt-4 text-7xl font-black text-[#c9a86a]">
          {hotline}
        </p>
      </section>

      <a href="https://wa.me/201112249139" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 left-5 z-50 rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-2xl transition hover:scale-110">
        واتساب
      </a>

      <footer className="border-t border-white/10 bg-black/60 px-4 py-8 text-center text-white/70">
        © 2026 طيبة من الفينو للجاتوه — Rigosa — الخط الساخن {hotline}
      </footer>
    </main>
  );
}