import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import GetSession from "./GetSession";

export function MenuNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-darkMain hover:bg-lightMain text-white hover:text-darkMain border-darkMain border-2">
          <BsList className="text-xl  " />
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col py-12 text-center sm:text-left ">
        <Link
          className="p-2 font-semibold  border-darkMain  border-2 rounded-lg hover:bg-darkMain hover:text-lightMain"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="p-2 font-semibold  border-darkMain  border-2 rounded-lg hover:bg-darkMain hover:text-lightMain"
          href={"/"}
        >
          Home
        </Link>
      </SheetContent>
    </Sheet>
  );
}
