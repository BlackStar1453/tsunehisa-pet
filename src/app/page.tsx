import Image from "next/image";

const products = [
  {
    name: "おから猫砂",
    desc: "えんどう豆やトウモロコシなどの植物繊維を原料に使用。天然素材で低粉塵、素早く固まりトイレに流せます。猫ちゃんの呼吸器にもやさしい設計です。",
    image: "/images/tofu-litter.jpg",
    tags: ["天然素材", "トイレに流せる", "低粉塵"],
  },
  {
    name: "ベントナイト猫砂",
    desc: "天然鉱物を原料に、優れた吸水力としっかりした固まりを実現。消臭効果が高くコストパフォーマンスに優れ、猫ちゃんの受け入れも良好です。",
    image: "/images/bentonite-litter.jpg",
    tags: ["高コスパ", "しっかり固まる", "消臭力"],
  },
  {
    name: "ミックス猫砂",
    desc: "おから砂とベントナイト砂の長所を兼ね備えた人気商品。固まりが強く底付きしにくい、消臭力が高く粉塵も少ない、市場で最も売れ筋のタイプです。",
    image: "/images/product-5.jpg",
    tags: ["売れ筋No.1", "W効果", "粉塵少"],
  },
  {
    name: "シリカゲル猫砂",
    desc: "シリカゲル粒子素材で常にサラサラ。吸着による消臭方式で長持ち、飛び散りにくく清潔な環境を保てます。",
    image: "/images/crystal-litter.jpg",
    tags: ["サラサラ", "長持ち", "飛び散りにくい"],
  },
  {
    name: "キャッサバ猫砂",
    desc: "キャッサバ由来の天然素材を使用。環境にやさしく粒子が細かい、粉塵が極めて少なく敏感な猫ちゃんにも安心です。",
    image: "/images/cassava-litter.jpg",
    tags: ["エコ素材", "細粒タイプ", "敏感肌対応"],
  },
];

const salesChannels = [
  {
    icon: "🏪",
    title: "卸売販売",
    desc: "大量注文で割引対応、安定した供給体制で大口のお客様をサポート",
  },
  {
    icon: "🌏",
    title: "地域代理店",
    desc: "各地域の代理店様を募集中。共に市場を開拓し、Win-Winの関係を構築",
  },
  {
    icon: "🛒",
    title: "EC向け供給",
    desc: "各ECプラットフォーム出店者様へ安定した仕入れと競争力のある価格をご提供",
  },
  {
    icon: "🏬",
    title: "量販店・スーパー",
    desc: "各種小売店舗と連携し、店頭販売チャネルを展開",
  },
  {
    icon: "🐱",
    title: "ペットショップ",
    desc: "ペットショップ様向けに豊富な猫砂ラインナップと充実のアフターサービスをご提供",
  },
  {
    icon: "🏭",
    title: "OEM / ODM",
    desc: "自社ブランドでの製造委託、パッケージカスタマイズ、ロット別注文に対応",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ナビゲーション */}
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
                会社概要
              </a>
              <a
                href="#products"
                className="hover:text-[var(--primary)] transition-colors"
              >
                取扱商品
              </a>
              <a
                href="#sales"
                className="hover:text-[var(--primary)] transition-colors"
              >
                販売形態
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--primary)] transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="hero-gradient relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
                🐾 ペット用品専門卸売商社
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                常久株式会社
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-lg">
                ペット用品の輸入・販売を専門とし、各種高品質猫砂を取り扱っております。安定供給・豊富な品揃え・高コストパフォーマンス。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  商品を見る →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  お問い合わせ
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
                    alt="常久株式会社の商品"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* 会社概要 */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              会社概要
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                常久株式会社はペット用品の輸入・販売を専門とする総合卸売商社です。おから猫砂、キャッサバ猫砂、ミックス猫砂をはじめとする各種猫砂を取り扱い、安定した供給・豊富な品揃え・高いコストパフォーマンスでお客様のニーズにお応えします。
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                長年にわたりペット用品市場に携わり、複数の正規メーカーと長期的なパートナーシップを構築。厳格な品質管理のもと、ペットショップ・EC事業者・量販店・地域代理店の皆様にワンストップでの仕入れ・安定供給・万全のアフターサポートをご提供しています。
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong>誠実な経営とお客様第一</strong>を常に心がけ、高品質な商品と迅速な配送で、お取引先様の効率的な仕入れと安定した利益を支援いたします。
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    多年
                  </div>
                  <div className="text-sm text-gray-500 mt-1">業界実績</div>
                </div>
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    5+
                  </div>
                  <div className="text-sm text-gray-500 mt-1">猫砂カテゴリ</div>
                </div>
                <div className="text-center p-4 bg-[var(--warm-white)] rounded-xl">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    全国
                  </div>
                  <div className="text-sm text-gray-500 mt-1">供給ネットワーク</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="/images/company-intro-1.jpg"
                  alt="会社紹介"
                  width={700}
                  height={970}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg card-hover mt-8">
                <Image
                  src="/images/company-intro-2.jpg"
                  alt="会社紹介"
                  width={740}
                  height={972}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 取扱商品 */}
      <section id="products" className="py-20 md:py-28 bg-[var(--section-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              取扱商品
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              豊富なラインナップと安定した品質。全商品、厳格な品質検査済みで安心・安全です。
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

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["product-2.jpg", "product-7.jpg", "product-8.jpg", "product-6.jpg"].map(
              (img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md card-hover aspect-square relative"
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`商品写真 ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 販売形態 */}
      <section id="sales" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest">
              Cooperation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--primary)]">
              販売形態
            </h2>
            <div className="w-16 h-1 gold-shimmer rounded-full mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              柔軟な販売方式で、大量発注割引・安定供給・充実のアフターサポートをお約束します
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

      {/* お問い合わせ */}
      <section id="contact" className="hero-gradient relative py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お気軽にご相談ください
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            ペットショップ経営者様、EC事業者様、量販店バイヤー様、地域代理店様など、あらゆるお客様に高品質な猫砂と確かなサービスをご提供いたします。お取引のご相談を心よりお待ちしております。
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📱</div>
              <div className="font-semibold mb-1">携帯電話</div>
              <a href="tel:090-6885-1501" className="text-white/90 text-sm hover:text-white transition-colors">090-6885-1501</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-semibold mb-1">メール</div>
              <a href="mailto:changjunlong110@gmail.com" className="text-white/90 text-sm hover:text-white transition-colors">changjunlong110@gmail.com</a>
            </div>
          </div>
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto">
            <div className="text-3xl mb-3">🏢</div>
            <div className="font-semibold mb-1">所在地</div>
            <div className="text-white/90 text-sm">〒543-0043 大阪府大阪市天王寺区寺田町2丁目6番10号 エステイ寺田町むつみ605号</div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-[#1a1a2e] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐾</span>
              <span className="font-bold text-white">常久株式会社</span>
            </div>
            <div className="text-sm">
              © 2025 常久株式会社 All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-white transition-colors">
                会社概要
              </a>
              <a
                href="#products"
                className="hover:text-white transition-colors"
              >
                取扱商品
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
