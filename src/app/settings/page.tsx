// filepath: /Users/gia/Desktop/fpt-training/clone-sapo-web-app/src/app/settings/page.tsx
import SettingsHeader from "@/components/Settings/SettingsHeader";
import SettingsTabs from "@/components/Settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <SettingsHeader />
      <SettingsTabs />
    </div>
  );
}
