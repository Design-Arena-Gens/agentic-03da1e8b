export default function Home() {
  const focusAreas = [
    {
      title: "تجربة رقمية مدهشة",
      description:
        "تصاميم عصرية تعكس هوية علامتك وتمنح زوار موقعك تجربة سلسة وممتعة.",
    },
    {
      title: "أداء سريع وآمن",
      description:
        "نستخدم أحدث تقنيات الويب لضمان سرعة التحميل والحماية المتكاملة.",
    },
    {
      title: "جاهز للنمو",
      description:
        "بنية قابلة للتوسع والتطوير المستمر لمواكبة توسع عملك عبر الإنترنت.",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "استكشاف الرؤية",
      detail: "جلسة تعريفية لفهم أهدافك والجمهور المستهدف.",
    },
    {
      step: "02",
      title: "تصميم وتجربة",
      detail: "نموذج تفاعلي يصور رحلة المستخدم والهوية البصرية.",
    },
    {
      step: "03",
      title: "إطلاق وتشغيل",
      detail: "نشر فوري على Vercel مع مراقبة الأداء والتحديثات.",
    },
  ];

  const testimonials = [
    {
      name: "سارة محمود",
      role: "مديرة التسويق - هالة ستوديو",
      quote:
        "التعاون كان سلساً والنتيجة فاقت التوقعات. الموقع يعكس شخصيتنا ويحقق نتائج ملموسة.",
    },
    {
      name: "عبدالله الحربي",
      role: "مؤسس منصة نَمو",
      quote:
        "أطلقنا موقعنا خلال أيام، ومع ذلك حافظنا على أعلى جودة وتجربة استخدام مثالية.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-surface text-foreground">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-3xl opacity-70" />
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 md:px-10 lg:px-16">
        <header className="relative z-10 flex flex-col gap-6 text-center md:text-right">
          <span className="mx-auto w-fit rounded-full border border-primary/40 bg-white/70 px-5 py-2 text-sm font-semibold text-primary shadow-soft backdrop-blur-sm md:mx-0">
            أهلاً بك في مساحتك الرقمية
          </span>
          <h1 className="text-balance text-4xl font-bold leading-snug text-foreground md:text-5xl">
            نصمم تجارب ويب عربية متميزة تلامس طموحك وتشعل حضورك على الإنترنت
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground md:ml-auto md:mr-0">
            فريق متكامل يبني منصات حديثة تعتمد على Next.js، Tailwind، وواجهات
            عربية متكاملة الاتجاه. نعتني بكل التفاصيل من الفكرة وحتى الإطلاق
            السلس على Vercel.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <a
              href="#journey"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-primary transition hover:-translate-y-0.5 hover:shadow-primary-strong"
            >
              ابدأ رحلتك الآن
            </a>
            <a
              href="#focus"
              className="rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              اكتشف خدماتنا
            </a>
          </div>
        </header>

        <section
          id="focus"
          className="relative grid gap-6 md:grid-cols-3"
          aria-labelledby="focus-title"
        >
          <div className="md:col-span-3 md:text-right">
            <h2
              id="focus-title"
              className="text-2xl font-semibold text-foreground md:text-3xl"
            >
              ركائز نجاح منصتك
            </h2>
            <p className="mt-2 max-w-2xl text-balance text-muted-foreground md:ml-auto md:text-lg">
              حلول متكاملة تجمع بين التصميم الأخاذ، الأداء المتقدم، والأتمتة
              الذكية لرحلة مستخدم مثالية.
            </p>
          </div>
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 text-right shadow-soft backdrop-blur-md transition hover:-translate-y-1 hover:shadow-primary-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="journey"
          className="grid gap-8 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-soft backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr]"
          aria-labelledby="journey-title"
        >
          <div>
            <h2
              id="journey-title"
              className="text-2xl font-semibold text-foreground md:text-3xl"
            >
              رحلة بناء منصتك خطوة بخطوة
            </h2>
            <p className="mt-3 text-balance text-muted-foreground">
              عملية مدروسة تضمن الوضوح، السرعة، والتعاون المستمر مع فريقك لضمان
              تجربة مدهشة من البداية وحتى الإطلاق.
            </p>
            <ul className="mt-8 space-y-6">
              {journey.map((item) => (
                <li
                  key={item.step}
                  className="flex flex-1 items-start gap-4 rounded-2xl border border-dashed border-primary/40 bg-white/60 p-5 shadow-inner-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-primary">
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-1 text-right">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 text-right shadow-primary">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                لماذا نستخدم Next.js و Vercel؟
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                البنية الهجينة لـ Next.js تمنحك أفضل ما في عالم الواجهات السريعة
                والتوليد المسبق للصفحات. ومع Vercel، تحصل على نشر لحظي، توزيع
                عالمي، وأداء متفوق بدون مجهود إضافي.
              </p>
            </div>
            <dl className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/60 px-4 py-3 shadow-soft">
                <dt className="font-semibold text-foreground">
                  متوسط زمن الإطلاق
                </dt>
                <dd className="font-semibold text-primary">خمسة أيام عمل</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/60 px-4 py-3 shadow-soft">
                <dt className="font-semibold text-foreground">تحسين الأداء</dt>
                <dd className="font-semibold text-primary">
                  +45% في Core Web Vitals
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className="grid gap-6 md:grid-cols-[1fr_1fr]"
          aria-labelledby="testimonials-title"
        >
          <div className="flex flex-col justify-center rounded-3xl border border-white/60 bg-white/80 p-8 text-right shadow-soft backdrop-blur-md">
            <h2
              id="testimonials-title"
              className="text-2xl font-semibold text-foreground md:text-3xl"
            >
              ماذا يقول شركاؤنا؟
            </h2>
            <p className="mt-3 text-balance text-muted-foreground">
              آراء عملائنا تعكس مدى التزامنا بالجودة والتجربة المبهرة في كل مشروع
              ننفذه.
            </p>
          </div>
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-3xl border border-white/50 bg-white/70 p-6 text-right shadow-soft backdrop-blur"
              >
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <div className="text-base font-semibold text-foreground">
                    {item.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/25 via-primary/15 to-white/80 p-10 text-right shadow-primary-strong backdrop-blur-xl">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/60 blur-3xl" />
          <div className="absolute -bottom-24 right-8 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              جاهز للبدء؟
            </h2>
            <p className="max-w-2xl text-balance text-muted-foreground md:ml-auto">
              شاركنا فكرتك وسنتواصل معك خلال 24 ساعة بخطة تنفيذ واضحة، جدول
              زمني، وتقدير استثماري شفاف.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <a
                href="mailto:hello@agentic-studio.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5 hover:shadow-primary"
              >
                hello@agentic-studio.com
              </a>
              <span className="text-xs text-muted-foreground">
                متاحون يومياً من 9 صباحاً حتى 6 مساءً بتوقيت الرياض
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
