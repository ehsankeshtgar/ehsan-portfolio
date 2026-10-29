export type Project = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  image: string;
  symbol: string;
  description: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "elahieh",
    name: "الهیه",
    domain: "elahieh.com",
    url: "https://elahieh.com",
    category: "وب‌سایت شرکتی",
    image: "/images/projects/elahieh.jpg",
    symbol: "E",
    description:
      "معرفی مجموعه، خدمات و اطلاعات سازمانی در بستر وب.",
    details: [
      "معرفی کسب‌وکار و خدمات",
      "ارائه اطلاعات به مخاطبان وب‌سایت",
      "دسترسی ساده به بخش‌های مختلف سایت",
    ],
  },
  {
    slug: "zarsa",
    name: "زرسا",
    domain: "zarsagroup.com",
    url: "https://zarsagroup.com",
    category: "وب‌سایت سازمانی",
    image: "/images/projects/zarsa.jpg",
    symbol: "Z",
    description:
      "بستر آنلاین برای معرفی مجموعه و ارائه اطلاعات و خدمات آن.",
    details: [
      "معرفی مجموعه و حوزه فعالیت",
      "ارائه اطلاعات موردنیاز مخاطبان",
      "ایجاد مسیر ارتباطی برای متقاضیان همکاری",
    ],
  },
  {
    slug: "fannegar",
    name: "فن‌نگار",
    domain: "fannegar.net",
    url: "https://fannegar.net",
    category: "وب‌سایت شرکتی",
    image: "/images/projects/fannegar.jpg",
    symbol: "F",
    description:
      "وب‌سایتی برای معرفی کسب‌وکار و دسترسی به اطلاعات خدمات.",
    details: [
      "معرفی مجموعه",
      "نمایش اطلاعات و خدمات",
      "دسترسی آنلاین به محتوای وب‌سایت",
    ],
  },
  {
    slug: "tarkino",
    name: "ترکینو",
    domain: "tarkino.app",
    url: "https://tarkino.app",
    category: "محصول دیجیتال",
    image: "/images/projects/tarkino.jpg",
    symbol: "T",
    description:
      "محصولی تحت وب که از طریق دامنه اختصاصی در دسترس است.",
    details: [
      "معرفی محصول دیجیتال",
      "دسترسی از طریق وب",
      "ارائه اطلاعات محصول به کاربران",
    ],
  },
  {
    slug: "emerdent",
    name: "امر دنت",
    domain: "emerdent.com",
    url: "https://emerdent.com",
    category: "وب‌سایت تخصصی",
    image: "/images/projects/emerdent.jpg",
    symbol: "ED",
    description:
      "وب‌سایتی تخصصی برای ارائه اطلاعات مرتبط با حوزه فعالیت مجموعه.",
    details: [
      "معرفی مجموعه و حوزه فعالیت",
      "ارائه محتوای تخصصی",
      "دسترسی آنلاین به اطلاعات",
    ],
  },
  {
    slug: "pitechgroup",
    name: "Pitech Group",
    domain: "pitechgroup.com",
    url: "https://pitechgroup.com",
    category: "وب‌سایت شرکتی",
    image: "/images/projects/pitechgroup.jpg",
    symbol: "P",
    description:
      "وب‌سایت مجموعه برای معرفی فعالیت‌ها و ارائه اطلاعات سازمانی.",
    details: [
      "معرفی کسب‌وکار",
      "ارائه اطلاعات خدمات",
      "ایجاد مسیر دسترسی به اطلاعات مجموعه",
    ],
  },
  {
    slug: "jovein",
    name: "جوین",
    domain: "jovein.com",
    url: "https://jovein.com",
    category: "وب‌سایت سازمانی",
    image: "/images/projects/jovein.jpg",
    symbol: "J",
    description:
      "وب‌سایت آنلاین برای معرفی مجموعه و فعالیت‌های آن.",
    details: [
      "معرفی مجموعه",
      "ارائه اطلاعات سازمانی",
      "دسترسی آنلاین به محتوای سایت",
    ],
  },
  {
    slug: "ahanjavidan",
    name: "آهن جاویدان",
    domain: "ahanjavidan.com",
    url: "https://ahanjavidan.com",
    category: "وب‌سایت تجاری",
    image: "/images/projects/ahanjavidan.jpg",
    symbol: "AJ",
    description:
      "بستر آنلاین برای معرفی کسب‌وکار و فعالیت‌های تجاری مجموعه.",
    details: [
      "معرفی کسب‌وکار",
      "ارائه اطلاعات به مشتریان",
      "دسترسی آنلاین به اطلاعات مجموعه",
    ],
  },
  {
    slug: "rahmatolahtayebi",
    name: "رحمت‌الله طیبی",
    domain: "rahmatolahtayebi.ir",
    url: "https://rahmatolahtayebi.ir",
    category: "وب‌سایت شخصی",
    image: "/images/projects/rahmatolahtayebi.jpg",
    symbol: "RT",
    description:
      "وب‌سایتی شخصی برای معرفی و انتشار اطلاعات در فضای آنلاین.",
    details: [
      "معرفی شخصی",
      "ارائه اطلاعات و محتوا",
      "دسترسی مستقیم به وب‌سایت",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}