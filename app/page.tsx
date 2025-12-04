const highlights = [
  {
    title: "مصادقة فورية",
    description: "الهوية الوطنية أو النفاذ الموحد قبل إرسال أي طلب.",
  },
  {
    title: "مسار واحد واضح",
    description: "نموذج مختصر يضمن وصول الرسالة إلى الجهة المناسبة بلا تشتت.",
  },
  {
    title: "تنبيهات محدثة",
    description: "إشعارات بالحالة بدلاً من الانتظار أو الاتصالات المتكررة.",
  },
];

const steps = [
  {
    label: "٠١",
    title: "إرسال موحّد",
    body: "يختار المواطن نوع الطلب ويكتب رسالته في دقائق مع مرفقات اختيارية.",
  },
  {
    label: "٠٢",
    title: "مراجعة وتحقّق",
    body: "تتم المصادقة، وإضافة الأختام الزمنية، وتوجيه الطلب للجهة المختصة.",
  },
  {
    label: "٠٣",
    title: "متابعة مبسّطة",
    body: "تصل تحديثات الحالة للمواطن وللجهة التنفيذية حتى إغلاق الطلب.",
  },
];

const stats = [
  { label: "الاستجابة المستهدفة", value: "٤٨ ساعة" },
  { label: "الجهات المشاركة", value: "٤ جهات" },
  { label: "القنوات المستبدلة", value: "١٠+" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20 lg:py-24">
        <section className="rounded-3xl bg-white px-8 py-12 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] lg:px-16 lg:py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-600">
                منصة حكومية للمراسلات الرسمية
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                  قناة رقمية موثوقة تربط المواطن بالقيادة.
                </h1>
                <p className="text-lg text-slate-600">
                  عابر يختصر الرحلة إلى رسالة واحدة واضحة، ويتم توجيهها ومتابعتها دون ازدحام في الإجراءات أو تضارب في القنوات.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#0a84ff] px-6 py-3 text-base font-medium text-white transition hover:bg-[#0060df]"
                >
                  جرّب النسخة التجريبية
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-medium text-slate-800 transition hover:border-slate-300"
                >
                  كيف تعمل المنصة؟
                </a>
              </div>
            </div>
            <dl className="grid gap-4 rounded-3xl bg-slate-50 p-6 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div key={item.label} className={`space-y-2 ${index !== 0 ? "border-r border-slate-200 pr-6" : ""}`}>
                  <dt className="text-xs text-slate-500">{item.label}</dt>
                  <dd className="text-2xl font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="benefits" className="space-y-8 rounded-3xl border border-slate-100 bg-white px-8 py-10 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] lg:px-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-500">ماذا تقدم عابر؟</p>
            <h2 className="text-3xl font-semibold text-slate-900">ثلاث مزايا أساسية تختصر الوقت.</h2>
            <p className="text-base text-slate-600">
              أزلنا التفاصيل المشتتة وركّزنا على رحلة قصيرة يمكن لكل مواطن فهمها واتباعها دون مساعدة.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="space-y-3 rounded-2xl bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{highlight.title}</h3>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-slate-200 bg-white px-8 py-10 shadow-[0px_15px_40px_rgba(15,23,42,0.05)] lg:px-12">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-500">كيف تعمل المنصة؟</p>
              <h2 className="text-3xl font-semibold text-slate-900">ثلاث خطوات واضحة بلا ازدحام.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="space-y-3 rounded-2xl border border-slate-100 p-5">
                  <span className="text-xs font-semibold text-slate-400">{step.label}</span>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-[#0a84ff] to-[#4c9dff] px-8 py-12 text-white lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                جاهزون للإطلاق
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                انضم إلى الدفعة الأولى من الجهات الحكومية المطبِّقة لعابر.
              </h2>
              <p className="mt-4 text-base text-white/90">
                نستقبل حالياً عدداً محدوداً من الوزارات والمكاتب التنفيذية للمشاركة في التصميم المشترك للتجربة. شاركنا احتياجاتك لنُعد خطة نشر مخصّصة لجهتك.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني الوظيفي"
                  className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white px-4 py-3 text-base font-semibold text-[#0a84ff] transition hover:bg-slate-100"
                >
                  طلب جلسة تعريفية
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
