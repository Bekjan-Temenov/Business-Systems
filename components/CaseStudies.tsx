import React from "react";
import { ArrowUpRight} from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Section } from "./Section";
import { Project } from "../types";
import {Link} from "react-router-dom"


const projects: Project[] = [
  {
    id: "ort-kg",
    title: "Ort.kg",
    category: "AI EdTech / State Exams",
    description:
      "Интеллектуальная платформа для подготовки к общереспубликанскому тестированию (ОРТ). Внедрена ИИ-система адаптивного обучения и анализа слабых зон абитуриента.",
    stats: "AI-Powered Analysis",
    img: "/assets/ort.kg.webp",
    link: "https://ort.kg",
  },
  {
    id: "aimektep",
    title: "AiMektep",
    category: "AI Gamified EdTech",
    description:
      "Интерактивная среда для обучения детей математике. Использует игровые механики на базе ИИ и систему умных тестов для вовлечения учащихся.",
    stats: "50k+ DAU",
    img: "/assets/Screenshot 2026-02-14 185618.png",
    link: "https://aimektep.com",
  },
  {
    id: "edupath",
    title: "EduPath",
    category: "Education Marketplace & LMS",
    description:
      "Экосистема для продажи онлайн и офлайн курсов. Включает продвинутую админ-панель для управления контентом, потоками студентов и финансовой отчетностью.",
    stats: "All-in-one Sales Tool",
    img: "/assets/edupath.png",
    link: "https://edupath-alpha.vercel.app",
  },
  {
    id: "leafy",
    title: "Leafy",
    category: "AI HealthTech / Telegram Bot",
    description:
      "ИИ-нутрициолог в Telegram. Помогает фитнес-тренерам автоматизировать контроль питания клиентов и обучение нутрициологии.",
    stats: "AI Assistant",
    link: "https://t.me/caloryss_bot",
    video: "/assets/1019 (1).mp4",
  },
  {
    id: "sporthub",
    title: "SportHub",
    category: "B2B Aggregator",
    description:
      "Масштабируемый B2B агрегатор для поиска и бронирования спортивных площадок любых видов во всех городах страны.",
    stats: "National Coverage",
    img: "/assets/sporthub.jpg",
    link: "https://sport-hub-ia62.vercel.app/",
  },
  {
    id: "safe-clinic",
    title: "Safe Clinic",
    category: "MedTech",
    description:
      "Система автоматизации медицинских центров. Управление записями пациентов, электронные медкарты и оптимизация работы регистратуры.",
    stats: "Zero Wait-list Logic",
    img: "/assets/safe-clinic.webp",
    link: "https://safeclinic.kg",
  },
  {
    id: "kvadrat-kg",
    title: "Kvadrat.kg",
    category: "PropTech / Marketplace",
    description:
      "Высоконагруженная площадка для купли-продажи недвижимости с системой верификации объявлений и глубокими фильтрами поиска.",
    stats: "High-Load Real Estate",
    img: "/assets/kvadrat.kg.webp",
    link: "https://kvadrat.kg",
  },
  {
    id: "drivecar",
    title: "DriveCar",
    category: "Auto Marketplace",
    description:
      "Платформа для коммерческой продажи автомобилей с интеграцией дилерских инструментов и систем оценки авто.",
    stats: "Automotive Retail",
    img: "/assets/drive_car.jpg",
    link: "https://drive-car-pqz2.vercel.app/",
  },
  {
    id: "crm-lms-internal",
    title: "Enterprise CRM/LMS",
    category: "Internal Operations",
    description:
      "Собственная разработка для контроля операционной деятельности, снизившая административные расходы на 40% через автоматизацию аналитики.",
    stats: "-40% Admin Cost",
    img: "/assets/crm.webp",
    link: "https://kaitech-lending.vercel.app/",
  },
  {
    id: "la-pizza",
    title: "LaPizza",
    category: "F&B / E-commerce",
    description:
      "Разработка систем онлайн-заказов и доставки для международных и локальных сетей пиццерий. Оптимизация пути клиента от выбора до оплаты.",
    stats: "Seamless Checkout",
    img: "/assets/la-pizza.jpg",
    link: "https://lapizza.kg",
  },
  {
    id: "wfdesign",
    title: "WFDESIGN",
    category: "Design-to-Code Framework",
    description:
      "Внутренний фреймворк для ускорения фронтенд-разработки. Стандартизация UI-компонентов для быстрого вывода бизнес-интерфейсов на рынок.",
    stats: "2x Dev Velocity",
    img: "/assets/Screenshot 2026-02-14 185305.png",
    link: "https://wfdesign-8ox9.vercel.app/",
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <Section
      id="work"
      className="bg-gradient-to-b from-transparent to-neutral-950/30 rounded-3xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2 text-white">
            Selected Implementations
          </h2>
          <p className="text-neutral-400">
            Engineering solutions for scale and reliability.
          </p>
        </div>
      </div>

      <div className="grid  gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <Card className="overflow-hidden bg-neutral-900/20 border-neutral-800 hover:border-neutral-700 transition-all duration-300">
              <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-full md:w-1/3 aspect-video bg-neutral-900 rounded-md border border-neutral-800 flex items-center justify-center relative overflow-hidden group-hover:bg-neutral-800/80 transition-colors">
                  {project.img ? (
                    <img src={project.img} alt={project.title} />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                      {project.category}
                    </span>
                    {project.stats && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                        {project.stats}
                      </span>
                    )}
                  </div>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h3>
                  </Link>
                  <p className="text-neutral-400 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
