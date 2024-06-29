import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid p-4 overflow-hidden  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  src,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  src?: string | any;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      href={"/programmes"}
      className={cn(
        "row-span-1 prog_card bg-lightMain rounded-xl group/bento hover:shadow-md transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2]  border border-transparent justify-around items-start flex flex-col space-y-4",
        className
      )}
    >
      <Image
        src={src}
        alt="this image"
        className="  object-fill  w-full h-40 rounded-t-xl"
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200 p-4">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {icon}
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};
