import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table";

import Badge from "./ui/Badge";

interface Activity {
  id: number;
  action: {
    method: string;
    url: string;
  };
  time: string;
  device: string;
  status: string;
}



const activityData: Activity[] = [
  {
    id: 1,
    action: { method: "GET", url: "/api/users" },
    time: "2023-03-01 10:15 AM",
    device: "Chrome - Windows",
    status: "Success",
  },
  {
    id: 2,
    action: { method: "POST", url: "/api/orders" },
    time: "2023-03-01 11:30 AM",
    device: "Firefox - macOS",
    status: "Pending",
  },
  {
    id: 3,
    action: { method: "DELETE", url: "/api/products/123" },
    time: "2023-03-01 01:45 PM",
    device: "Safari - iOS",
    status: "Failed",
  },
  {
    id: 4,
    action: { method: "PUT", url: "/api/settings" },
    time: "2023-03-01 03:20 PM",
    device: "Edge - Windows",
    status: "Success",
  },
  {
    id: 5,
    action: { method: "PATCH", url: "/api/profile" },
    time: "2023-03-01 04:50 PM",
    device: "Chrome - Android",
    status: "Success",
  },
];

export default function RecentActivityTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
              {["", "Action", "Time", "Device", "Status"].map((column) => (
                <TableCell
                key={column}
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                {column}
                </TableCell>
              ))}
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {activityData.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {activity.id}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {activity.action.method}
                      </span>
                      <span className="block text-gray-500 text-theme-sm dark:text-gray-400">
                        {activity.action.url}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {activity.time}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {activity.device}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        activity.status === "Success"
                          ? "success"
                          : activity.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
