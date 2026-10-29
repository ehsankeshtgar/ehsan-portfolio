import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpLeft,
  CheckCircle2,
  ExternalLink,
  Globe,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "پروژه پیدا نشد" };
  }

  return {
    title: `${project.name} | نمونه‌کارهای احسان کشتگر`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[76px] w-[min(1120px,calc(100%-36px))] items-center justify-between gap-4">
          <Link
            href="/"
            className="font-extrabold text-[#0A2540]"
          >
            احسان کشتگر
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1565C0] hover:text-[#E65100]"
          >
            <ArrowRight size={18} />
            بازگشت به نمونه‌کارها
          </Link>
        </div>
      </header>

      <section className="bg-[#0A2540] py-14 text-white sm:py-20">
        <div className="mx-auto w-[min(1000px,calc(100%-36px))]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100">
            <Globe size={16} className="text-orange-400" />
            {project.category}
          </div>

          <h1 className="text-4xl font-black sm:text-5xl">
            {project.name}
          </h1>

          <p className="mt-4 text-slate-300" dir="ltr">
            {project.domain}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-9 text-slate-200 sm:text-lg">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E65100] px-6 py-3.5 font-bold text-white transition hover:bg-[#bf4300]"
          >
            مشاهده وب‌سایت اصلی
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <section className="mx-auto w-[min(1000px,calc(100%-36px))] py-12 sm:py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#164A73] to-[#0A2540]">
            <Image
              src={project.image}
              alt={`تصویر پیش‌نمایش وب‌سایت ${project.name}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_300px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#0A2540]">
              درباره پروژه
            </h2>

            <p className="mt-4 leading-9 text-slate-600">
              {project.description}
            </p>

            <h3 className="mt-8 text-lg font-extrabold text-[#0A2540]">
              حوزه‌های مرتبط
            </h3>

            <ul className="mt-4 space-y-4">
              {project.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 leading-7 text-slate-600"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#E65100]"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-extrabold text-[#0A2540]">
              اطلاعات پروژه
            </h2>

            <div className="mt-5 border-b border-slate-100 pb-4">
              <p className="text-sm text-slate-500">نام پروژه</p>
              <p className="mt-1 font-bold text-slate-800">
                {project.name}
              </p>
            </div>

            <div className="mt-4 border-b border-slate-100 pb-4">
              <p className="text-sm text-slate-500">دسته‌بندی</p>
              <p className="mt-1 font-bold text-slate-800">
                {project.category}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-slate-500">آدرس وب‌سایت</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block break-all font-semibold text-[#1565C0] hover:text-[#E65100]"
                dir="ltr"
              >
                {project.domain}
              </a>
            </div>

            <Link
              href="/#projects"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-bold text-[#0A2540] transition hover:border-[#E65100] hover:text-[#E65100]"
            >
              سایر نمونه‌کارها
              <ArrowUpLeft size={18} />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}