import Image from "next/image";

const products = [
  {
    name: "豆腐猫砂",
    desc: "以豌豆、玉米等植物纤维为原料，天然环保、低粉尘，遇水快速结团，可直接冲厕所，清理方便，对猫咪呼吸道友好。",
    image: "/images/product-1.jpg",
    tags: ["天然环保", "可冲厕", "低粉尘"],
  },
  {
    name: "膨润土猫砂",
    desc: "采用天然矿物原料，吸水性强、结团紧实牢固，除臭效果好，用量省、性价比高，猫咪接受度高。",
    image: "/images/product-3.jpg",
    tags: ["高性价比", "强结团", "除臭好"],
  },
  {
    name: "混合猫砂",
    desc: "结合豆腐砂与膨润土砂优点，结团更牢、不易粘底，除臭更强、粉尘更少，是目前主流热销款。",
    image: "/images/product-5.jpg",
    tags: ["热销款", "双重优势", "粉尘少"],
  },
  {
    name: "水晶猫砂",
    desc: "硅胶颗粒材质，干爽不结团，靠吸附除臭，耐用持久、不易带出，干净整洁。",
    image: "/images/product-4.jpg",
    tags: ["干爽洁净", "耐用持久", "不易带出"],
  },
  {
    name: "松木/木薯猫砂",
    desc: "天然松木、木薯等植物制成，环保可降解，气味清新、粉尘极低，对敏感猫咪友好。",
    image: "/images/product-6.jpg",
    tags: ["环保降解", "气味清新", "敏感友好"],
  },
];

const salesChannels = [
  {
    icon: "🏪",
    title: "线下批发",
    desc: "量大从优，稳定供货，满足大中型客户的采购需求",
  },
  {
    icon: "🌏",
    title: "区域代理",
    desc: "诚邀各地区域代理商，共同开拓市场、互利共赢",
  },
  {
    icon: "🛒",
    title: "电商供货",
    desc: "为各大电商平台商家提供稳定货源和有竞争力的价格",
  },
  {
    icon: "🏬",
    title: "商超供货",
    desc: "与各类商超合作，铺设零售终端渠道",
  },
  {
    icon: "🐱",
    title: "宠物店合作",
    desc: "为宠物店提供品类齐全的猫砂产品和优质售后服务",
  },
  {
    icon: "🏭",
    title: "OEM/ODM",
    desc: "支持贴牌代工、定制包装、批量定制等多种合作模式",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="font-bold text-lg text-[var(--primary)]">
                常久株式会社
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a
                href="#about"
                className="hover:text-[var(--primary)] transition-colors"
              >
                关于我们
              </a>
              <a
                href="#products"
                className="hover:text-[var(--primary)] transition-colors"
              >
                产品中心
              </a>
              <a
                href="#sales"
                className="hover:text-[var(--primary)] transition-colors"
              >
                合作模式
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--primary)] transition-colors"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
                🐾 宠物用品专业经销商
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                常久株式会社
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-lg">
                专注宠物用品进口和销售，主营各类高品质猫砂产品。
                货源稳定、品类齐全、性价比高。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  查看产品 →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  联系合作
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full">
                  <Image
                    src="/images/product-7.jpg"
                    alt="常久株式会社产品"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64 C360,120 720,0 1440,64 L1440,120 L0,120 Z"
              fill="var(--background)"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              关于我们
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                常久株式会社专注于宠物用品进口和销售，是专业从事猫砂及宠物用品经销批发的综合服务商。主营各类豆腐猫砂、木薯猫砂、混合猫砂等主流产品，货源稳定、品类齐全、性价比高。
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                公司深耕宠物用品市场多年，与多家正规猫砂生产厂家建立长期合作，严格把控产品品质，为宠物店、电商商家、商超及区域代理商提供一站式采购、稳定供货、售后无忧的服务。
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                始终坚持<strong>诚信经营、客户至上</strong>
                的理念，以优质产品和高效配送，助力合作伙伴轻松备货、稳定盈利，致力成为本地及全国客户信赖的宠物用品专业经销商。
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    多年
                  </div>
                  <div className="text-sm text-gray-500 mt-1">行业深耕</div>
                </div>
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    5+
                  </div>
                  <div className="text-sm text-gray-500 mt-1">猫砂品类</div>
                </div>
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    全国
                  </div>
                  <div className="text-sm text-gray-500 mt-1">供货网络</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="/images/company-intro-1.jpg"
                  alt="公司介绍"
                  width={700}
                  height={970}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg card-hover mt-8">
                <Image
                  src="/images/company-intro-2.jpg"
                  alt="公司介绍"
                  width={740}
                  height={972}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-[var(--section-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              产品中心
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              品类齐全、品质稳定，所有产品均经过严格质检，安全可靠
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              >
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-[var(--warm-white)] text-[var(--primary)] text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra product images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["product-2.jpg", "product-7.jpg", "product-8.jpg", "product-6.jpg"].map(
              (img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md card-hover aspect-square relative"
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`产品展示 ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sales Channels Section */}
      <section id="sales" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              Cooperation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              合作模式
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              销售方式灵活多样，坚持量大从优、稳定供货、售后完善
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesChannels.map((channel, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm card-hover text-center"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-lg font-bold text-[var(--primary)] mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-500 text-sm">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="hero-gradient relative py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            诚邀合作，共创共赢
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            无论您是宠物店经营者、电商商家、商超采购、还是区域代理商，我们都将竭诚为您提供优质的猫砂产品和专业的服务支持。欢迎各地客商洽谈合作！
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📞</div>
              <div className="font-semibold mb-1">电话咨询</div>
              <div className="text-white/70 text-sm">欢迎来电洽谈</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-semibold mb-1">邮件联系</div>
              <div className="text-white/70 text-sm">随时回复咨询</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏢</div>
              <div className="font-semibold mb-1">到访洽谈</div>
              <div className="text-white/70 text-sm">欢迎实地考察</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐾</span>
              <span className="font-bold text-white">常久株式会社</span>
            </div>
            <div className="text-sm">
              © 2025 常久株式会社. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-white transition-colors">
                关于我们
              </a>
              <a
                href="#products"
                className="hover:text-white transition-colors"
              >
                产品中心
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                联系合作
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
