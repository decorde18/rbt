import {
  User,
  FileText,
  BarChart3,
  Calendar,
  Settings,
  Newspaper,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export const navItems = [
  { id: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "/forms", label: "Forms", icon: FileText },
  { id: "/clients", label: "Clients", icon: User },
  { id: "/calendar", label: "Calendar", icon: Calendar },
  {
    id: "schedule",
    label: "Schedule",
    icon: Calendar,
    link: "https://wcs0-my.sharepoint.com/:x:/r/personal/landry_chiles_wcs_edu/_layouts/15/Doc.aspx?sourcedoc=%7BDE2BAED5-4E2E-49A7-936D-CAE718E7AF90%7D&file=2025-2026.Schedule.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&web=1.com",
  },
  {
    id: "notes",
    label: "Session Notes Entry",
    icon: Calendar,
    link: "https://forms.office.com/pages/responsepage.aspx?id=3DEXytfvt06bcH7gTrtRo8AE29NWN-1Bke9zuqvpGLtUOURDVEFHRkU5V005QlA2NkUwUzJaTUE1Sy4u&route=shorturl",
  },
  { id: "/sbt/entry", label: "SBT", icon: Settings },
  { id: "/settings", label: "Settings", icon: Settings },
];
