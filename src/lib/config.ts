import type { SideBarNavItem } from "@/lib/types";

type DashboardConfig = {
  sideBarNav: SideBarNavItem[];
};

const links = {
  github: "https://github.com/blackOw1/vortex",
};

export const routes = {
  home: "/",
  signIn: "/signin",
  signUp: "/signup",
  dashboard: "/dashboard",
  bills: "/dashboard/bills",
  subscriptions: "/dashboard/subscriptions",
  settings: "/dashboard/settings",
};

export const dashboardConfig: DashboardConfig = {
  sideBarNav: [
    {
      title: "Dashboard",
      href: routes.dashboard,
    },
    {
      title: "Bills",
      href: routes.bills,
    },
    {
      title: "Subscriptions",
      href: routes.subscriptions,
    },
    {
      title: "Settings",
      href: routes.settings,
    },
  ],
};

export const siteConfig = {
  name: "Vortex",
  description: "A site to view and manage your bills and subscriptions.",
  url: null,
  image: null,
  links,
};
