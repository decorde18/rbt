import Card from "@/components/common/Card";
import { theme } from "@/styles/theme";
import {
  User,
  FileText,
  BarChart3,
  CheckSquare,
  Calendar,
  Plus,
  Clock,
  TrendingUp,
} from "lucide-react";
import Welcome from "./Welcome";

// --- Custom Theme Colors (Mapped from your theme.js) ---
const PRIMARY = "#091f3a";
const SECONDARY = "#274870";
const ACCENT = "#fdd835";
const TEXT = "#1a202c";
const LABEL = "#577190";
const SURFACE = "#ffffff";
const BORDER = "#e2e8f0"; // Using a lighter slate for general borders
const SUCCESS = "#10b981";
const WARNING = "#f59e0b"; // Used in original stats
const INFO = "#06b6d4"; // Used in original stats

// Mock data for the component to be runnable
const forms = [
  {
    id: 1,
    title: "Initial Intake Assessment",
    description:
      "Collect essential background and contact information from new clients.",
    icon: User,
    bg: SECONDARY,
    clientCount: 12,
    lastUsed: "2 days ago",
  },
  {
    id: 2,
    title: "Weekly Progress Check-in",
    description:
      "A quick form to track weekly mood, goals, and obstacles encountered.",
    icon: CheckSquare,
    bg: INFO,
    clientCount: 8,
    lastUsed: "1 hour ago",
  },
  {
    id: 3,
    title: "Financial Health Questionnaire",
    description:
      "In-depth questions about client assets, liabilities, and budgeting habits.",
    icon: BarChart3,
    bg: ACCENT,
    clientCount: 5,
    lastUsed: "1 week ago",
  },
];

const Dashboard = () => {
  // Helper component to apply the scaleIn animation with delay
  const AnimatedCard = ({ children, delay = "0s", className = "" }) => (
    <div
      className={`animate-scale-in ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );

  const StatIcon = ({ children, bg, color }) => (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
      style={{ backgroundColor: bg, color: color }}
    >
      {children}
    </div>
  );

  return (
    <>
      {/* Custom Animations
        We define the keyframes here since styled-components animations cannot be directly converted
        and we need to maintain the specific animation delays.
      */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
            animation-fill-mode: both;
          }
          .animate-scale-in {
            animation: scaleIn 0.4s ease-out;
            animation-fill-mode: both;
          }
        `}
      </style>

      {/* Content component equivalent */}
      <div className='p-8 md:p-12 animate-fade-in font-inter bg-[#f8fafc] '>
        <Welcome />
        {/* StatsGrid equivalent */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {/* StatCard 1 */}
          <AnimatedCard
            delay='0.1s'
            className='bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-2xl'
          >
            {/* StatHeader equivalent */}
            <div className='flex items-center justify-between mb-4'>
              <StatIcon bg='rgba(16, 185, 129, 0.1)' color={SUCCESS}>
                <User size={24} />
              </StatIcon>
              <TrendingUp size={20} color={SUCCESS} />
            </div>
            {/* StatValue equivalent */}
            <div className={`text-3xl font-bold text-[${TEXT}] mb-1`}>12</div>
            {/* StatLabel equivalent */}
            <div className={`text-sm text-[${LABEL}]`}>Active Clients</div>
          </AnimatedCard>

          {/* StatCard 2 */}
          <AnimatedCard
            delay='0.2s'
            className='bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-2xl'
          >
            <div className='flex items-center justify-between mb-4'>
              <StatIcon bg='rgba(245, 158, 11, 0.1)' color={WARNING}>
                <FileText size={24} />
              </StatIcon>
              <Clock size={20} color={WARNING} />
            </div>
            <div className={`text-3xl font-bold text-[${TEXT}] mb-1`}>8</div>
            <div className={`text-sm text-[${LABEL}]`}>Forms Due Today</div>
          </AnimatedCard>

          {/* StatCard 3 */}
          <AnimatedCard
            delay='0.3s'
            className='bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-2xl'
          >
            <div className='flex items-center justify-between mb-4'>
              <StatIcon
                bg='rgba(139, 92, 246, 0.1)'
                color={theme.colors.purple}
              >
                <CheckSquare size={24} />
              </StatIcon>
              <TrendingUp size={20} color={theme.colors.purple} />
            </div>
            <div className={`text-3xl font-bold text-[${TEXT}] mb-1`}>94%</div>
            <div className={`text-sm text-[${LABEL}]`}>Compliance Rate</div>
          </AnimatedCard>

          {/* StatCard 4 */}
          <AnimatedCard
            delay='0.4s'
            className='bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-2xl'
          >
            <div className='flex items-center justify-between mb-4'>
              <StatIcon bg='rgba(6, 182, 212, 0.1)' color={INFO}>
                <BarChart3 size={24} />
              </StatIcon>
              <Calendar size={20} color={INFO} />
            </div>
            <div className={`text-3xl font-bold text-[${TEXT}] mb-1`}>24</div>
            <div className={`text-sm text-[${LABEL}]`}>Sessions This Week</div>
          </AnimatedCard>
        </div>

        <h2 className={`text-xl md:text-2xl font-bold text-[${TEXT}] mb-6`}>
          Quick Access Forms
        </h2>

        {/* FormsGrid equivalent */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {forms.map((form, index) => (
            // FormCard equivalent
            // <AnimatedCard key={form.id} delay={`${0.1 * (index + 1)}s`}>
            //   <button
            //     onClick={() => {}}
            //     className={`w-full bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-left cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-[-4px] hover:shadow-2xl hover:scale-[1.01] hover:border-[${SECONDARY}] focus:outline-none focus:ring-2 focus:ring-[${SECONDARY}] focus:ring-opacity-50`}
            //   >
            //     {/* FormCardHeader equivalent */}
            //     <div className='flex items-start gap-4 mb-4'>
            //       {/* FormIcon equivalent */}
            //       <div
            //         className='w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0'
            //         style={{ backgroundColor: form.bg || PRIMARY }}
            //       >
            //         <form.icon size={28} />
            //       </div>
            //       <div>
            //         {/* FormTitle equivalent */}
            //         <h3 className={`text-xl font-semibold text-[${TEXT}] mb-1`}>
            //           {form.title}
            //         </h3>
            //         {/* FormDescription equivalent */}
            //         <p className={`text-sm text-[${LABEL}] leading-relaxed`}>
            //           {form.description}
            //         </p>
            //       </div>
            //     </div>

            //     {/* FormFooter equivalent */}
            //     <div
            //       className={`flex items-center justify-between mt-4 pt-4 border-t border-[${BORDER}]`}
            //     >
            //       {/* FormMeta equivalent */}
            //       <span className={`text-xs text-[${LABEL}]`}>
            //         {form.clientCount} clients • Last used {form.lastUsed}
            //       </span>

            //       {/* ActionButton equivalent */}
            //       <button
            //         className={`flex items-center bg-[${SECONDARY}] text-white border-none py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[${PRIMARY}] hover:scale-[1.05] shadow-md`}
            //       >
            //         <Plus size={16} className='mr-1' />
            //         New
            //       </button>
            //     </div>
            //   </button>
            // </AnimatedCard>
            <Card key={`card-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
