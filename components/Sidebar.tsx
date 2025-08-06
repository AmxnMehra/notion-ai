import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
function Sidebar() {

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* my documents   */}
      {/* list  */}

      {/* shared with me */}
      {/* list... */}

    </>
  )

  return (
    <div className="relative bg-gray-200 p-2 md:p-5">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              className="relative rounded-lg p-2 hover:opacity-30 md:p-5"
              size={40}
            />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}
export default Sidebar;
