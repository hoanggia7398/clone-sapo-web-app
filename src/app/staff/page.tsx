import StaffHeader from "@/components/Staff/StaffHeader";
import StaffList from "@/components/Staff/StaffList";

export default function StaffPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <StaffHeader />
      <StaffList />
    </div>
  );
}
