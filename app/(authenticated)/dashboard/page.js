// Dashboard/index.jsx

import Welcome from "./Welcome";
import StatsCard from "@/components/common/StatsCard";
import FormCard from "@/components/common/FormCard";
import { theme } from "@/styles/theme";
import { DASHBOARD_CARDS, DASHBOARD_STATS } from "@/utils/config";

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
        {DASHBOARD_STATS.map((stat, index) => (
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
        {DASHBOARD_CARDS.map((form, index) => (
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
