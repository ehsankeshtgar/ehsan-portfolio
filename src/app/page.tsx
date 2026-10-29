import Link from "next/link";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpLeft,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "توسعه نرم‌افزار",
    description: "C#، .NET، ASP.NET Core و EF Core",
  },
  {
    icon: Database,
    title: "پایگاه داده",
    description: "SQL Server، طراحی داده و T-SQL",
  },
  {
    icon: Globe,
    title: "توسعه وب",
    description: "Next.js، React، Tailwind CSS و WordPress",
  },
  {
    icon: Layers3,
    title: "راهکارهای سازمانی",
    description: "ERP، CRM، گردش کار و تحلیل فرایندها",
  },
];

const contactLinks = [
  {
    icon: Phone,
    label: "شماره تماس",
    value: "09150631994",
    href: "tel:09150631994",
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: "ehsankeshtgar@gmail.com",
    href: "mailto:ehsankeshtgar@gmail.com",
  },
  {
    icon: Send,
    label: "تلگرام",
    value: "@ehsankr",
    href: "https://t.me/ehsankr",
  },
  {
    icon: MessageCircle,
    label: "بله",
    value: "@ehsankr",
    href: "https://ble.ir/ehsankr",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container-main flex h-[76px] items-center justify-between gap-5">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2540] text-lg font-black text-white">
              EK
            </span>
            <span>
              <span className="block font-extrabold text-[#0A2540]">
                احسان کشتگر
              </span>
              <span className="text-xs text-slate-500">
                توسعه نرم‌افزار و وب
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-[#E65100]" href="#home">
              خانه
            </a>
            <a className="transition hover:text-[#E65100]" href="#skills">
              مهارت‌ها
            </a>
            <a className="transition hover:text-[#E65100]" href="#projects">
              نمونه‌کارها
            </a>
            <a className="transition hover:text-[#E65100]" href="#about">
              درباره من
            </a>
          </nav>

          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-[#E65100] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#bf4300]"
          >
            <span>تماس با من</span>
            <ArrowLeft size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-[#0A2540] text-white">
        <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="container-main relative grid items-center gap-12 py-16 md:grid-cols-[1.3fr_0.7fr] md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-100">
              <Sparkles size={16} className="text-orange-400" />
              <span>تجربه در فناوری اطلاعات و راهکارهای سازمانی</span>
            </div>

            <h1 className="max-w-3xl text-4xl leading-[1.55] font-black tracking-tight sm:text-5xl lg:text-6xl">
              سلام، من <span className="text-orange-400">احسان کشتگر</span> هستم
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-9 text-slate-300 sm:text-lg">
              متخصص فناوری اطلاعات و توسعه راهکارهای نرم‌افزاری؛ با تمرکز بر
              توسعه وب، سیستم‌های سازمانی، ERP و CRM. علاقه‌مند به تبدیل مسائل
              پیچیده کسب‌وکار به راهکارهای کاربردی و قابل توسعه.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E65100] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#bf4300]"
              >
                مشاهده نمونه‌کارها
                <ArrowLeft size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                بیشتر درباره من
                <ArrowLeft size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-400" />
                مشهد، ایران
              </span>
              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={16} className="text-orange-400" />
                توسعه و تحلیل راهکارهای سازمانی
              </span>
            </div>
          </div>

          {/* Profile visual — can be replaced with a real photo */}
          <div className="mx-auto w-full max-w-[340px]">
            <div className="relative rounded-[32px] border border-white/15 bg-white/[0.05] p-4 shadow-2xl shadow-black/20">
              <div className="relative flex aspect-[4/4.5] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#164A73] via-[#123b60] to-[#071a2d]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-white/40" />
                  <div className="absolute bottom-8 left-5 h-44 w-44 rounded-full border border-white/20" />
                </div>

                <div className="relative flex h-36 w-36 items-center justify-center rounded-[36px] border border-white/20 bg-white/10 text-5xl font-black text-white shadow-xl">
                  EK
                </div>

                <h2 className="relative mt-7 text-2xl font-extrabold">
                  احسان کشتگر
                </h2>
                <p className="relative mt-2 text-sm text-blue-100">
                  Software & IT Solutions
                </p>

                <div className="relative mt-7 flex flex-wrap justify-center gap-2">
                  {[".NET", "SQL Server", "Next.js"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 pt-4">
                <span className="text-sm text-slate-300">
                  از ایده تا راهکار
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-space">
        <div className="container-main">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold text-[#E65100]">
              تخصص و توانمندی‌ها
            </p>
            <h2 className="section-title">مهارت‌های من</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              ترکیبی از تجربه فنی، شناخت نیازهای کسب‌وکار و نگاه فرایندمحور
              برای طراحی و توسعه راهکارهای نرم‌افزاری.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2540] text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0A2540]">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {skill.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-space bg-white">
        <div className="container-main">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="portfolio-card overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`مشاهده جزئیات پروژه ${project.name}`}
                  className="block"
                >
                  <div className="portfolio-preview relative flex h-44 items-center justify-center bg-gradient-to-br from-[#164A73] to-[#0A2540]">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-black text-white shadow-xl backdrop-blur">
                        {project.symbol}
                      </div>

                      <span className="mt-3 text-sm font-semibold text-white/90">
                        {project.domain}
                      </span>
                    </div>

                    <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0A2540]">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {project.category}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#1565C0]">
                        <ArrowUpLeft size={18} />
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-[#1565C0]">
                      مشاهده جزئیات پروژه
                      <ArrowLeft size={18} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.domain}
                className="portfolio-card overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`مشاهده وب‌سایت ${project.name}`}
                  className="block"
                >
                  <div
                    className={`portfolio-preview flex h-44 items-center justify-center bg-gradient-to-br ${project.color}`}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-black text-white shadow-xl backdrop-blur">
                        {project.symbol}
                      </div>
                      <span className="mt-3 text-sm font-semibold text-white/90">
                        {project.domain}
                      </span>
                    </div>

                    <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0A2540]">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {project.category}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#1565C0] transition group-hover:bg-blue-50">
                        <ExternalLink size={18} />
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-[#1565C0]">
                      مشاهده وب‌سایت
                      <ArrowUpLeft size={18} />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-space">
        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#0A2540] p-8 text-white sm:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                <Layers3 size={28} />
              </div>
              <h3 className="text-2xl font-black leading-relaxed">
                فناوری باید مسئله‌ای واقعی را حل کند.
              </h3>
              <p className="mt-4 leading-8 text-slate-300">
                نگاه من به توسعه نرم‌افزار، فراتر از نوشتن کد است؛ شناخت نیاز،
                تحلیل فرایند و ساخت راهکاری قابل نگهداری اهمیت زیادی دارد.
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-bold text-[#E65100]">
                درباره من
              </p>
              <h2 className="section-title">ترکیب تجربه فنی و نگاه کسب‌وکاری</h2>

              <p className="mt-5 leading-9 text-slate-600">
                در حوزه فناوری اطلاعات، توسعه وب و راهکارهای سازمانی فعالیت
                داشته‌ام. تجربه کار با پایگاه داده، توسعه نرم‌افزار، سیستم‌های
                ERP و CRM و همچنین طراحی و بهبود وب‌سایت‌ها به من کمک کرده است
                تا مسائل را هم از دید فنی و هم از دید کاربران و فرایندهای سازمان
                بررسی کنم.
              </p>

              <p className="mt-4 leading-9 text-slate-600">
                هدفم ساخت راهکارهایی است که علاوه بر عملکرد مناسب، استفاده از
                آن‌ها ساده باشد و در آینده نیز بتوان آن‌ها را توسعه داد.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#1565C0] transition hover:text-[#E65100]"
              >
                برای همکاری گفت‌وگو کنیم
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-space bg-[#0A2540] text-white">
        <div className="container-main">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold text-orange-400">
              شروع یک همکاری
            </p>
            <h2 className="text-3xl leading-relaxed font-black sm:text-4xl">
              با من در ارتباط باشید
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              برای مشاوره، همکاری در پروژه‌های نرم‌افزاری یا بررسی یک ایده،
              می‌توانی از راه‌های زیر با من ارتباط بگیری.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-orange-400/50 hover:bg-white/[0.09]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                    <Icon size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm text-slate-300">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-bold text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
            <p>احسان کشتگر | توسعه نرم‌افزار و راهکارهای سازمانی</p>
            <p>© 2026 تمامی حقوق محفوظ است.</p>          </div>
        </div>
      </section>
    </main>
  );
}