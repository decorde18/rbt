import {
  User,
  FileText,
  BarChart3,
  Calendar,
  Settings,
  CheckSquare,
  ClipboardList,
  FileSearch,
  GraduationCap,
  ShieldCheck,
  Users,
  Clock,
  TrendingUp,
  Plus,
  BookOpen,
  AlertTriangle,
  MessageSquare,
  ClipboardCheck,
  CalendarDays,
} from "lucide-react";

import { BacbIcon } from "@/components/icons/BacbIcon";
import { theme } from "@/styles/theme";

export const navItems = [
  { id: "/dashboard", label: "Dashboard", icon: BarChart3 },
  // { id: "/forms", label: "Forms", icon: FileText },
  { id: "/clients", label: "Clients", icon: User },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    // icon: Calendar,
    link: "https://outlook.office.com/calendar/view/week?login_hint=O.CiRkM2RiMDRjMC0zNzU2LTQxZWQtOTFlZi03M2JhYWJlOTE4YmISJGNhMTczMWRjLWVmZDctNGViNy05YjcwLTdlZTA0ZWJiNTFhMxoPZGF2aWRjM0B3Y3MuZWR1IJkB",
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: Clock,
    link: "https://wcs0-my.sharepoint.com/:x:/r/personal/landry_chiles_wcs_edu/_layouts/15/Doc.aspx?sourcedoc=%7BDE2BAED5-4E2E-49A7-936D-CAE718E7AF90%7D&file=2025-2026.Schedule.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&web=1.com",
  },

  {
    id: "/bacb",
    label: "BACB",
    icon: BacbIcon,
  },
  { id: "/settings", label: "Settings", icon: Settings },
];

// Dashboard Configuration
export const DASHBOARD_STATS = [
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
];
export const DASHBOARD_CARDS = [
  {
    id: "intake-assessment",
    title: "Initial Intake Assessment",
    description:
      "Collect essential background and contact information from new clients.",
    link: null,
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
    link: null,
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
    link: null,
    icon: BarChart3,
    iconColor: theme.colors.accent || "#fdd835",
    clientCount: 5,
    lastUsed: "1 week ago",
  },

  // === New Cards ===
  {
    id: "DC",
    title: "Data Collection",
    description:
      "Track and log client data across sessions, including behavior frequency, intensity, and duration.",
    link: "/data",
    icon: ClipboardList,
    iconColor: theme.colors.info || "#06b6d4",
    clientCount: 10,
    lastUsed: "Today",
  },
  {
    id: "SN",
    title: "Session Notes",
    description:
      "Record detailed notes for each session, including objectives, progress, and follow-up actions.",
    link: "/notes",
    icon: FileText,
    iconColor: theme.colors.secondary || "#274870",
    clientCount: 5, // number of clients with notes this week
    lastUsed: "Today", // dynamic value later
  },
  {
    id: "PA",
    title: "Assessments",
    description:
      "Conduct and review assessments to evaluate progress, set baselines, and determine goals.",
    link: "/assessments",
    icon: FileSearch,
    iconColor: theme.colors.warning || "#f59e0b",
    clientCount: 7,
    lastUsed: "3 days ago",
  },
  {
    id: "SA",
    title: "Skill Acquisition",
    description:
      "Plan, track, and measure progress on skill-building programs tailored to each client.",
    link: "/training",
    icon: GraduationCap,
    iconColor: theme.colors.success || "#10b981",
    clientCount: 9,
    lastUsed: "Yesterday",
  },
  {
    id: "PF",
    title: "Procedural Fidelity",
    description:
      "Ensure staff follow intervention procedures correctly to maintain treatment integrity.",
    link: "/pf",
    icon: ShieldCheck,
    iconColor: theme.colors.purple || "#8b5cf6",
    clientCount: 4,
    lastUsed: "Last week",
  },
  {
    id: "IA",
    title: "Intraobserver Agreement",
    description:
      "Measure consistency in data recording across observers to ensure reliability.",
    link: "/ia",
    icon: Users,
    iconColor: theme.colors.accent || "#fdd835",
    clientCount: 6,
    lastUsed: "5 days ago",
  },
  // ===OPTIONAL CARDS===
  {
    id: "ST",
    title: "Staff Training",
    description:
      "Track staff training sessions, competencies, and procedural integrity checks.",
    link: null,
    icon: BookOpen,
    iconColor: theme.colors.purple || "#8b5cf6",
    clientCount: 0,
    lastUsed: "N/A",
  },
  {
    id: "BI",
    title: "Behavior Incidents",
    description:
      "Log incidents, triggers, responses, and outcomes for behavior tracking and analysis.",
    link: null,
    icon: AlertTriangle,
    iconColor: theme.colors.error || "#ef4444",
    clientCount: 2,
    lastUsed: "Yesterday",
  },
  {
    id: "TPR",
    title: "Treatment Plan Review",
    description:
      "Review, update, and document treatment plans in compliance with requirements.",
    link: null,
    icon: ClipboardCheck,
    iconColor: theme.colors.warning || "#f59e0b",
    clientCount: 3,
    lastUsed: "1 month ago",
  },
  {
    id: "PTF",
    title: "Parent/Teacher Feedback",
    description:
      "Gather feedback from parents or teachers to support treatment planning and generalization.",
    link: null,
    icon: MessageSquare,
    iconColor: theme.colors.info || "#06b6d4",
    clientCount: 6,
    lastUsed: "Last week",
  },
];
