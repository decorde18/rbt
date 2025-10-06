"use client";
// ============================================
// components/ui/Tabs.jsx
// ============================================
// USAGE:
// const tabs = [
//   { label: "Profile", content: <div>Profile content</div> },
//   { label: "Settings", content: <div>Settings content</div> },
//   { label: "Notifications", content: <div>Notifications content</div> },
// ];

// <Tabs
//   tabs={tabs}
//   defaultTab={0}
//   onChange={(index) => console.log("Tab changed to:", index)}
// />;

import { cn } from "@/lib/utils";
import { tabsVariants, tabsDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Tabs = ({ defaultTab = 0, tabs = [], className, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  return (
    <div className={cn(tabsDefaults.container, className)}>
      <div
        className={tabsDefaults.tabList}
        style={{ borderBottom: `2px solid ${tabsDefaults.borderColor}` }}
      >
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={tabsDefaults.tab}
            style={{
              color:
                activeTab === idx
                  ? tabsDefaults.activeColor
                  : tabsDefaults.inactiveColor,
              borderBottom:
                activeTab === idx
                  ? `2px solid ${tabsDefaults.activeColor}`
                  : "none",
              marginBottom: "-2px",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== idx) {
                e.currentTarget.style.color = tabsDefaults.textColor;
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== idx) {
                e.currentTarget.style.color = tabsDefaults.inactiveColor;
              }
            }}
            onClick={() => handleTabChange(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={tabsDefaults.tabPanel}>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
