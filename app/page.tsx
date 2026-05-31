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

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fbefe4] text-[#24160f]">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#6f4e8b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="طيبة من الفينو للجاتوه"
              width={150}
              height={70}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#c9a86a] px-5 py-2 font-bold text-white shadow-lg transition hover:scale-105"
          >
            اطلب واتساب
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#6f4e8b] via-[#7d5b99] to-[#c9a86a] px-4 py-20 text-center text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_25%),radial-gradient(circle_at_80%_30%,white_0,transparent_20%)]" />

        <div className="relative mx-auto max-w-5xl">
          <Image
            src="/images/logo.png"
            alt="Tiba Logo"
            width={360}
            height={170}
            className="mx-auto mb-8 h-auto w-72 rounded-3xl bg-white/90 p-5 shadow-2xl"
            priority
          />

          <h1 className="text-4xl font-black md:text-6xl">
            طيبة من الفينو للجاتوه
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold md:text-2xl">
            اللمة عليك والحلو علينا — مخبوزات وحلويات طازة يوميًا
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("أرغب في عمل طلب من طيبة")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 text-lg font-bold text-[#6f4e8b] shadow-xl transition hover:scale-105"
          >
            اطلب الآن
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-9 text-center">
          <p className="font-bold text-[#c47b4b]">منتجاتنا</p>
          <h2 className="text-3xl font-black text-[#6f4e8b] md:text-5xl">
            اختار اللي نفسك فيه
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-2 hover:shadow-2xl"
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
                <h3 className="text-2xl font-black text-[#6f4e8b]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  طازة يوميًا بجودة طيبة المعروفة وطعم يناسب كل اللمة.
                </p>

                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                    `أرغب في طلب ${product.name}`
                  )}`}
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

      <section className="bg-white px-4 py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-[#c47b4b]">فروعنا</p>
            <h2 className="mt-2 text-4xl font-black text-[#6f4e8b]">
              قريبين منك في كل مكان
            </h2>
            <p className="mt-4 leading-8 text-gray-700">
              اطلب من أقرب فرع عبر واتساب أو الخط الساخن.
            </p>
            <p className="mt-6 rounded-3xl bg-[#fbefe4] p-5 text-xl font-bold text-[#6f4e8b]">
              الخط الساخن: 17548
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {["العجوزة", "المعادي", "المهندسين", "حدائق الأهرام", "إمبابة", "6 أكتوبر"].map(
              (branch) => (
                <div key={branch} className="rounded-2xl bg-[#fbefe4] p-5 font-bold shadow">
                  {branch}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 rounded-full bg-green-600 px-6 py-4 font-bold text-white shadow-2xl"
      >
        واتساب
      </a>

      <footer className="bg-[#6f4e8b] px-4 py-10 text-center text-white">
        <Image
          src="/images/rigosa.png"
          alt="Rigosa"
          width={90}
          height={90}
          className="mx-auto mb-4 h-20 w-20 object-contain"
        />
        <p className="text-2xl font-black">طيبة من الفينو للجاتوه</p>
        <p className="mt-2">واتساب: 01112249139</p>
      </footer>
    </main>
  );
}
