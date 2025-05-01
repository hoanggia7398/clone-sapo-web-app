import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  previousValue: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
}

export default function StatsCard({
  title,
  value,
  change,
  previousValue,
  icon,
  iconBgColor,
  iconColor,
}: StatsCardProps) {
  // Format change value to include the sign
  const formattedChangeValue = change.isPositive
    ? change.value
    : `-${change.value}`;

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50 transition-all duration-200 hover:shadow-md hover:border-gray-100 group">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500 mb-1 text-sm">{title}</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
          <div
            className={`flex items-center ${
              change.isPositive ? "text-green-500" : "text-red-500"
            } text-sm mt-2`}
          >
            {change.isPositive ? (
              <ArrowUp size={14} className="mr-1" />
            ) : (
              <ArrowDown size={14} className="mr-1" />
            )}
            <span className="font-medium">{formattedChangeValue}</span>
            <span className="text-gray-500 ml-1 text-xs">so với hôm qua</span>
          </div>
        </div>
        <div
          className={`${iconBgColor} h-12 w-12 flex items-center justify-center rounded-full ${iconColor} transition-transform group-hover:scale-110`}
        >
          {icon}
        </div>
      </div>
      <p className="text-gray-400 text-xs mt-4 border-t border-gray-50 pt-2">
        Hôm qua: {previousValue}
      </p>
    </div>
  );
}
