const highlights = [
  {
    title: "هوية موثقة بالكامل",
    description:
      "يتم التحقق من كل رسالة عبر الهوية الرقمية أو البيانات الحيوية لضمان موثوقية المصدر.",
  },
  {
    title: "تسليم آمن",
    description:
      "مسارات مشفّرة تمنع العبث وتوفر سجل تدقيق لحظي يطابق معايير الأرشفة الوطنية.",
  },
  {
    title: "رؤى قابلة للتنفيذ",
    description:
      "لوحات متابعة تُظهر مستوى الإلحاح والمشاعر والسجل التاريخي لاتخاذ قرارات أسرع.",
  },
];

const steps = [
  {
    label: "٠١",
    title: "اكتب رسالتك",
    body: "يمرّ المواطن بنموذج موجه يوضح الهدف والسياق والمرفقات الداعمة.",
  },
  {
    label: "٠٢",
    title: "تحقق وتوجيه",
    body: "تتم مصادقة الهوية، وإضافة الأختام الزمنية، وتوجيه الطلب للجهة الأنسب تلقائياً.",
  },
  {
    label: "٠٣",
    title: "تابع الأثر",
    body: "تستجيب القيادة وتظهر تحديثات الحالة بشفافية حتى اكتمال الإجراء.",
  },
];

const stats = [
  { label: "متوسط زمن الاستجابة المستهدف", value: "أقل من ٤٨ ساعة" },
  { label: "القنوات المستبدلة", value: "أكثر من ١٠" },
  { label: "الجهات المشاركة في التجربة", value: "٤" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20 lg:py-24">
        <section className="rounded-3xl bg-white px-8 py-12 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] lg:px-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                منصة الرسائل الوطنية
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                قناة آمنة تربط كل مواطن بالقيادة الوطنية.
          </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                تستبدل عابر الرسائل الورقية والصناديق المجهولة بتجربة رقمية
                موثقة، مخصّصة للبلاغات العاجلة والتواصل المباشر مع أصحاب
                القرار.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#0a84ff] px-6 py-3 text-base font-semibold text-white shadow-[0px_20px_35px_rgba(10,132,255,0.25)] transition hover:bg-[#0060df]"
                >
                  اطلب الوصول المبكر
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  استعرض سير العمل
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-5">
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-8">
              <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0a84ff]/10 text-[#0a84ff]">
                  ✦
                </span>
                ثقة حكومية شاملة
              </div>
              <ul className="mt-8 space-y-6 text-slate-700">
                <li className="flex gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0a84ff]" />
                  توثيق بالهوية الوطنية أو القياسات الحيوية قبل قبول أي رسالة.
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0a84ff]" />
                  قواعد توجيه ذكية تُبقي صناديق القيادة مركزة على الأولويات.
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0a84ff]" />
                  سجلات تدقيق لحظية تطابق الاشتراطات الوطنية للأرشفة.
                </li>
              </ul>
              <div className="mt-10 rounded-2xl bg-white p-6 shadow-[0px_20px_45px_rgba(15,23,42,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  جهات التشغيل التجريبي
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    الديوان الملكي
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    الدفاع المدني
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    وزارة الداخلية
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    النيابة العامة
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                لماذا عابر؟
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                مصممة لتعزيز الثقة الوطنية وتسريع المتابعة.
              </h2>
            </div>
            <p className="text-base text-slate-600 lg:max-w-xl">
              تُطلع عابر القيادات على الصورة الكاملة وفي الوقت نفسه تمنح المواطنين
              وضوحاً حول ما يحدث لرسائلهم، دون انتظار طويل أو قنوات غامضة.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0px_18px_35px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a84ff]/10 text-xl text-[#0a84ff]">
                  ●
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-base text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="rounded-3xl border border-slate-100 bg-white px-8 py-12 shadow-[0px_25px_60px_rgba(15,23,42,0.08)] lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                سير العمل
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                حلقة اتصال سريعة وشفافة.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#0a84ff] transition hover:text-[#0060df]"
            >
              شاهد العرض التوضيحي →
            </a>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {step.label}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-slate-600">{step.body}</p>
              </div>
            ))}
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
                نستقبل حالياً عدداً محدوداً من الوزارات والمكاتب التنفيذية
                للمشاركة في التصميم المشترك للتجربة. شاركنا احتياجاتك لنُعد خطة
                نشر مخصّصة لجهتك.
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
