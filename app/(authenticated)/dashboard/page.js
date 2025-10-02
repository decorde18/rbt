// Dashboard/index.jsx
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
import StatsCard from "@/components/common/StatsCard";
import FormCard from "@/components/common/FormCard";
import { theme } from "@/styles/theme";

// Dashboard Configuration
const DASHBOARD_CONFIG = {
  stats: [
    {
      id: "active-clients",
      icon: User,
      iconColor: theme.colors.success || "#10b981",
      value: 12,
      label: "Active Clients",
      trend: { icon: TrendingUp, color: theme.colors.success },
    },
    {
      id: "forms-due",
      icon: FileText,
      iconColor: theme.colors.warning || "#f59e0b",
      value: 8,
      label: "Forms Due Today",
      trend: { icon: Clock, color: theme.colors.warning },
    },
    {
      id: "compliance",
      icon: CheckSquare,
      iconColor: theme.colors.purple || "#8b5cf6",
      value: "94%",
      label: "Compliance Rate",
      trend: { icon: TrendingUp, color: theme.colors.purple },
    },
    {
      id: "sessions",
      icon: BarChart3,
      iconColor: theme.colors.info || "#06b6d4",
      value: 24,
      label: "Sessions This Week",
      trend: { icon: Calendar, color: theme.colors.info },
    },
    {
      id: "notes",
      icon: Plus,
      iconColor: theme.colors.secondary || "#274870",
      value: 5,
      label: "Session Notes Entry",
      trend: { icon: Clock, color: theme.colors.secondary },
    },
  ],

  forms: [
    {
      id: "intake-assessment",
      title: "Initial Intake Assessment",
      description:
        "Collect essential background and contact information from new clients.",
      icon: User,
      iconColor: theme.colors.secondary || "#274870",
      clientCount: 12,
      lastUsed: "2 days ago",
    },
    {
      id: "progress-checkin",
      title: "Weekly Progress Check-in",
      description:
        "A quick form to track weekly mood, goals, and obstacles encountered.",
      icon: CheckSquare,
      iconColor: theme.colors.info || "#06b6d4",
      clientCount: 8,
      lastUsed: "1 hour ago",
    },
    {
      id: "financial-health",
      title: "Financial Health Questionnaire",
      description:
        "In-depth questions about client assets, liabilities, and budgeting habits.",
      icon: BarChart3,
      iconColor: theme.colors.accent || "#fdd835",
      clientCount: 5,
      lastUsed: "1 week ago",
    },
  ],
};

const Dashboard = () => {
  const handleFormClick = (formId) => {
    console.log("Opening form:", formId);
    // Navigate or open form logic here
  };

  return (
    <div className='p-8 md:p-12 bg-gray-50'>
      <Welcome />

      {/* Stats Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12'>
        {DASHBOARD_CONFIG.stats.map((stat, index) => (
          <StatsCard
            key={stat.id}
            icon={stat.icon}
            iconColor={stat.iconColor}
            value={stat.value}
            label={stat.label}
            trend={stat.trend}
            delay={`${(index + 1) * 0.1}s`}
          />
        ))}
      </div>

      {/* Forms Section */}
      <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-6'>
        Quick Access Forms
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {DASHBOARD_CONFIG.forms.map((form, index) => (
          <FormCard
            key={form.id}
            title={form.title}
            description={form.description}
            icon={form.icon}
            iconColor={form.iconColor}
            clientCount={form.clientCount}
            lastUsed={form.lastUsed}
            onClick={() => handleFormClick(form.id)}
            delay={`${(index + 1) * 0.15}s`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
