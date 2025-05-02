import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

// Color palette for charts
export const chartColors = {
  primary: "#4f46e5", // indigo
  blue: "#3b82f6",
  teal: "#14b8a6",
  green: "#10b981",
  yellow: "#eab308",
  orange: "#f97316",
  red: "#ef4444",
  purple: "#a855f7",
  pink: "#ec4899",
};

// Transparency utility
export const withOpacity = (color: string, opacity: number) => {
  // Convert hex to rgba
  if (color.startsWith("#")) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};

// Get a gradient for chart backgrounds
export const getGradient = (
  ctx: CanvasRenderingContext2D,
  chartArea: any,
  color: string
) => {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, withOpacity(color, 0.1));
  gradient.addColorStop(1, withOpacity(color, 0.5));
  return gradient;
};

// Format large numbers with suffix (K, M, B)
export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

// Get chart colors array for multiple datasets
export const getChartColorsArray = (count: number) => {
  const colorKeys = Object.keys(chartColors) as Array<keyof typeof chartColors>;
  return Array(count)
    .fill(0)
    .map((_, i) => chartColors[colorKeys[i % colorKeys.length]]);
};
