import { MenuItem } from './models/menu.model';

export const MENU_DATA: MenuItem[] = [
  {
    id: "1a1",
    title: "Executive Dashboard",
    route: "/ExecDash/dashboard",
  },
  {
    id: "2a1",
    title: "Assessments",
    expanded: false,
    children: [
      {
        id: "2b1",
        title: "Dashboard",
        route: "/assessments/dashboard"
      },
      {
        id: "2b2",
        title: "Score Assessment",
        route: "/assessments/score"
      },
      {
        id: "2b3",
        title: "Reports",
        expanded: false,
        children: [
          { id: "2c1", title: "Action Plan Status", route: "/assessments/reports/action-plan-status" },
          { id: "2c2", title: "Assessment Summary", route: "/assessments/reports/summary" },
          { id: "2c3", title: "Line Item Change History", route: "/assessments/reports/line-item" },
          { id: "2c4", title: "Rescore List", route: "/assessments/reports/rescore-list" },
          { id: "2c5", title: "Scoring Detail", route: "/assessments/reports/detail" },
          { id: "2c6", title: "Standard status by facility", route: "/assessments/reports/facility-status" },
        ]
      },
      {
        id: "2b4",
        title: "Corporate Reports",
        expanded: false,
        children: [
          { id: "2c7", title: "Average Scores", route: "/assessments/corporate/average-scores" },
          { id: "2c8", title: "Average Scores over Time", route: "/assessments/corporate/avg-time" },
          { id: "2c9", title: "Scoring Summary", route: "/assessments/corporate/scoring-summary" },
          { id: "2c10", title: "Standard Compliance", route: "/assessments/corporate/compliance" }
        ]
      },
      { id: "2b5", title: "Rescore", route: "/assessments/rescore" },
      { id: "2b6", title: "Action Plan", route: "/assessments/action-plan" },
      {
        id: "2b7",
        title: "Admin",
        expanded: false,
        children: [
          { id: "2c11", title: "Edit", route: "/assessments/admin/edit" },
          { id: "2c12", title: "Assessment tags", route: "/assessments/admin/tags" },
          { id: "2c13", title: "Service Health Check", route: "/assessments/admin/health" },
          { id: "2c14", title: "Exclude Links From BrokenLink", route: "/assessments/admin/exclude-links" },
          { id: "2c15", title: "Broken Link Details", route: "/assessments/admin/broken-links" }
        ]
      }
    ]
  },
  {
    id: "3a1",
    title: "Initiatives",
    expanded: false,
    children: [
      { id: "3b1", title: "Clinical Dashboard", route: "/initiatives/clinical-dashboard" },
      { id: "3b2", title: "Opportunities", route: "/initiatives/opportunities" },
      { id: "3b3", title: "Assigned Initiatives", route: "/initiatives/assigned" },
      { id: "3b4", title: "Savings Capture", route: "/initiatives/savings" },
      {
        id: "3b5",
        title: "Reports",
        expanded: false,
        children: [
          { id: "3c1", title: "Initiatives savings by month", route: "/initiatives/reports/monthly" },
          { id: "3c2", title: "Initiative summary", route: "/initiatives/reports/summary" }
        ]
      },
      {
        id: "3b6",
        title: "Corporate Reports",
        expanded: false,
        children: [
          { id: "3c3", title: "Unmapped Drugs", route: "/initiatives/corporate/unmapped-drugs" },
          { id: "3c4", title: "Budget Report", route: "/initiatives/corporate/budget" },
          { id: "3c5", title: "Sales Report", route: "/initiatives/corporate/sales" },
          { id: "3c6", title: "Initiative Management", route: "/initiatives/corporate/management" }
        ]
      }
    ]
  },
  {
    id: "4a1",
    title: "Purchasing Insights",
    expanded: false,
    children: [
      { id: "4b1", title: "Report Center", route: "/purchasinginsights/report-center" },
      { id: "4b2", title: "Day-to-Day Purchasing", route: "/purchasinginsights/day-to-day" },
      { id: "4b3", title: "Purchasing Trends", route: "/purchasinginsights/trends" },
      { id: "4b4", title: "Long-Term Purchasing", route: "/purchasinginsights/long-term" },
      { id: "4b5", title: "Antimicrobial Stewardship report", route: "/purchasinginsights/antimicrobial" },
      { id: "4b6", title: "Opioid Stewardship report", route: "/purchasinginsights/opioid" },
      { id: "4b7", title: "Biosimilars", route: "/purchasinginsights/biosimilars" },
      { id: "4b8", title: "Inflation", route: "/purchasinginsights/inflation" },
      { id: "4b9", title: "Historical Charts", route: "/purchasinginsights/historical" },
      { id: "4b10", title: "Comparative Charts", route: "/purchasinginsights/comparative" },
      { id: "4b11", title: "Metric Completion Report", route: "/purchasinginsights/metric-completion" },
      { id: "4b12", title: "Upload", route: "/purchasinginsights/upload" }
    ]
  },
  { id: "5a1", title: "Resources", route: "/resources" },
  {
    id: "6a1",
    title: "Metrics",
    expanded: false,
    children: [
      { id: "6b1", title: "Enter my Data", route: "/metrics/data" },
      { id: "6b2", title: "Term Definitions", route: "/metrics/terms" },
      { id: "6b3", title: "Dashboard", route: "/metrics/dashboard" },
      { id: "6b4", title: "Manage Site Metrics", route: "/metrics/manage" },
      {
        id: "6b5",
        title: "Admin",
        expanded: false,
        children: [
          { id: "6c1", title: "Create/Edit Metric", route: "/metrics/admin/create" },
          { id: "6c2", title: "Create/Edit Metric Set", route: "/metrics/admin/create-set" },
          { id: "6c3", title: "View/Delete Metric", route: "/metrics/admin/delete" },
          { id: "6c4", title: "View/Delete Metric Set", route: "/metrics/admin/delete-set" },
          { id: "6c5", title: "Metric Section", route: "/metrics/admin/section" },
          { id: "6c6", title: "Edit Term Definition", route: "/metrics/admin/terms" },
          { id: "6c7", title: "Metrics (no site)", route: "/metrics/admin/no-site" }
        ]
      }
    ]
  },
  {
    id: "7a1",
    title: "Settings",
    expanded: false,
    children: [
      { id: "7b1", title: "Home", route: "/settings/home" },
      {
        id: "7b2",
        title: "Manage",
        expanded: false,
        children: [
          { id: "7c1", title: "Organizations/LOB", route: "/settings/manage/orgs" },
          { id: "7c2", title: "Facilities/LOB", route: "/settings/manage/facilities" },
          { id: "7c3", title: "Facility User Assignments", route: "/settings/manage/facility-users" },
          { id: "7c4", title: "Users", route: "/settings/manage/users" }
        ]
      },
      {
        id: "7b3",
        title: "Apps",
        expanded: false,
        children: [
          { id: "7c5", title: "Applications", route: "/settings/apps/applications" },
          { id: "7c6", title: "App Roles", route: "/settings/apps/roles" },
          { id: "7c7", title: "Security Groups", route: "/settings/apps/security-groups" }
        ]
      }
    ]
  }
];
