import {
  ArrowUp,
  ArrowDown,
  BarChart2,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  previousValue: string;
  icon: string | React.ReactNode; // Updated to accept string or React.ReactNode
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

  // Render the appropriate icon component based on the icon name
  const renderIcon = () => {
    if (typeof icon === "string") {
      switch (icon) {
        case "DollarSign":
          return <DollarSign size={24} />;
        case "FileText":
          return <FileText size={24} />;
        case "Users":
          return <Users size={24} />;
        case "BarChart2":
          return <BarChart2 size={24} />;
        default:
          return null;
      }
    }
    return icon;
  };

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
          {renderIcon()}
        </div>
      </div>
      <p className="text-gray-400 text-xs mt-4 border-t border-gray-50 pt-2">
        Hôm qua: {previousValue}
      </p>
    </div>
  );
}
