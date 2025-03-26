import { User, GridIcon } from "lucide-react";

export type MenuItem = {
    name?: string;
    icon?: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; beta?: boolean; new?: boolean }[];
    isDivider?: boolean;
};


export const sidebarItems: MenuItem[] = [
    {
        name: "Dashboard",
        icon: <GridIcon size={18} />,
        subItems: [
            { name: "Home", path: "/dashboard", beta: true },
            { name: "Ecommerce", path: "/dashboard/ecommerce", new: true },
        ],
    },
    {
        name: "Jobs",
        icon: <GridIcon size={18} />,
        path: "/dashboard/jobs",
    },
    {
        name: "Profile",
        icon: <User size={18} />,
        subItems: [
            { name: "Edit Profile", path: "/dashboard/profile", },
            { name: "Settings", path: "/dashboard/settings" },
            { name: "Log Out", path: "/dashboard/authentication" },
        ],
    }
];


export const profileItems: MenuItem[] = [
    {
        isDivider: true,
    },
    {
        name: "Edit Profile",
        icon: <User size={18} />,
        path: "/dashboard/profile",
    },
    {
        name: "Settings",
        icon: <GridIcon size={18} />,
        path: "/dashboard/settings",
    },
    {
        name: "Log Out",
        icon: <GridIcon size={18} />,
        path: "/dashboard/authentication",
    },
];

export const customerItems: MenuItem[] = [
    {
        isDivider: true,
    },
    {
        name: "Customer Function",
        icon: <User size={18} />,
        path: "/dashboard/profile",
    },
    ...profileItems,
];

export const soleTraderItems: MenuItem[] = [
    {
        isDivider: true,
    },
    {
        name: "Sole Trader Function",
        icon: <User size={18} />,
        path: "/dashboard/profile",
    },
    ...profileItems,
];