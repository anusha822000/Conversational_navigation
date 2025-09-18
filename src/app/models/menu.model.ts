export interface MenuItem {
  id: string;                  // unique identifier
  title: string;               // menu title
  route?: string;              // optional route for navigation
  children?: MenuItem[];       // optional nested submenus
  expanded?: boolean;          // track open/closed state for menus with children
  icon?: string;
}
