import { Staff } from "@/mockData/staff";

declare module "./StaffList" {
  export default function StaffList(): JSX.Element;
}

declare module "./StaffDetail" {
  export interface StaffDetailProps {
    staff: Staff;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  export default function StaffDetail(props: StaffDetailProps): JSX.Element;
}

declare module "./StaffForm" {
  export interface StaffFormProps {
    staff?: Staff;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    mode: "add" | "edit";
  }
  export default function StaffForm(props: StaffFormProps): JSX.Element;
}

declare module "./DeleteStaffDialog" {
  export interface DeleteStaffDialogProps {
    staff: Staff;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  export default function DeleteStaffDialog(
    props: DeleteStaffDialogProps
  ): JSX.Element;
}
