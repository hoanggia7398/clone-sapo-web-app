// filepath: /Users/gia/Desktop/fpt-training/clone-sapo-web-app/src/components/Settings/SettingsHeader.tsx
import { Settings } from "lucide-react";

export default function SettingsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <Settings className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Cài đặt hệ thống</h1>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          Quản lý các cài đặt hệ thống và tùy chọn cá nhân
        </p>
      </div>
    </div>
  );
}
