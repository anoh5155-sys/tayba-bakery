import Image from "next/image";

type Product = {
  name: string;
  category: string;
  image: string;
};

const whatsapp = "201112249139";

const products: Product[] = [
  { name: "علبة مشكل", category: "حلويات غربية", image: "/images/box.jpg" },
  { name: "دايمًا طازة فينو", category: "مخبوزات", image: "/images/school-fino.jpg" },
  { name: "دايمًا طازة كيزر", category: "مخبوزات", image: "/images/kaizer.jpg" },
  { name: "بسكويت", category: "بسكويت", image: "/images/biscuit.jpg" },
  { name: "بلح الشام", category: "حلويات شرقية", image: "/images/balah.jpg" },
  { name: "كنافة بورمة لوز", category: "حلويات شرقية", image: "/images/kunafa-borma.jpg" },
  { name: "جولاش حلو", category: "حلويات شرقية", image: "/images/goulash.jpg" },
  { name: "بقلاوة", category: "حلويات شرقية", image: "/images/baklava.jpg" },
  { name: "كوكيز", category: "بسكويت", image: "/images/cookies.jpg" },
];

const branches = [
  { name: "العجوزة", location: "https://goo.gl/maps/xyz1" },
  { name: "المعادي", location: "https://goo.gl/maps/xyz2" },
  { name: "المهندسين", location: "https://goo.gl/maps/xyz3" },
  { name: "حدائق الأهرام", location: "https://goo.gl/maps/xyz4" },
  { name: "إمبابة", location: "https://goo.gl/maps/xyz5" },
  { name: "6 أكتوبر", location: "https://goo.gl/maps/xyz6" },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fbefe4] text-[#24160f]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#6f4e8b]/90 backdrop-blur shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/shop-front.jpg" // صورة المحل من بره
              alt="محل طيبة"
              width={120}
              height={80}
              className="h-14 w-auto rounded-lg object-cover shadow-lg animate-pulse"
            />
          </div>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#c9a86a] px-5 py-2 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#b8925f]"
          >
            اطلب واتساب
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6f4e8b] via-[#7d5b99] to-[#c9a86a] px-4 py-20 text-center text-white animate-fadeIn">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/20 bg-white/20 p-8 shadow-2xl backdrop-blur-lg">
          <Image
            src="/images/rigosa.png"
            alt="Rigosa Logo"
            width={300}
            height={150}
            className="mx-auto mb-6 h-auto w-80 object-contain drop-shadow-2xl animate-bounce"
          />

          <h1 className="text-4xl font-black md:text-6xl drop-shadow-lg">
            طيبة من الفينو للجاتوه
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold md:text-2xl">
            اللمة عليك والحلو علينا — مخبوزات وحلويات طازة يوميًا
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("أرغب في عمل طلب من طيبة")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-[#6f4e8b] shadow-xl transition hover:scale-110 hover:translate-y-1"
          >
            اطلب الآن
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-9 text-center">
          <p className="font-bold text-[#c47b4b]">منتجاتنا</p>
          <h2 className="text-3xl font-black text-[#6f4e8b] md:text-5xl">اختار اللي نفسك فيه</h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[#6f4e8b] px-4 py-2 text-sm font-bold text-white">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-[#6f4e8b]">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  طازة يوميًا بجودة طيبة المعروفة وطعم يناسب كل اللمة.
                </p>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`أرغب في طلب ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-2xl bg-[#6f4e8b] py-3 text-center font-bold text-white transition hover:bg-[#5b3e75]"
                >
                  اطلب المنتج
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRANCHES */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-7xl grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-[#c47b4b]">فروعنا</p>
            <h2 className="mt-2 text-4xl font-black text-[#6f4e8b]">
              قريبين منك في كل مكان
            </h2>
            <p className="mt-4 leading-8 text-gray-700">
              اضغط على أي فرع للوصول للـ Location الخاص به على الخرائط
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {branches.map((branch) => (
              <a
                key={branch.name}
                href={branch.location}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-[#fbefe4] p-5 font-bold shadow text-center transition hover:scale-105 hover:shadow-2xl"
              >
                {branch.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 rounded-full bg-green-600 px-6 py-4 font-bold text-white shadow-2xl hover:scale-110 transition"
      >
        واتساب
      </a>

      {/* FOOTER */}
      <footer className="bg-[#6f4e8b] px-4 py-10 text-center text-white">
        <Image
          src="/images/rigosa.png"
          alt="Rigosa"
          width={90}
          height={90}
          className="mx-auto mb-4 h-20 w-20 object-contain animate-bounce"
        />
        <p className="text-2xl font-black">طيبة من الفينو للجاتوه</p>
        <p className="mt-2">واتساب: 01112249139</p>
      </footer>
    </main>
  );
}