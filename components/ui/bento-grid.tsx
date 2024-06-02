import { cn } from "@/lib/utils";
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  src?: string | any;
}) => {
  return (
    <div
      className={cn(
        "row-span-1  bg-lighterMain rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black dark:border-white/[0.2]  border border-transparent justify-around items-start flex flex-col space-y-2",
        className
      )}
    >
      <Image
        src={src}
        alt="this image"
        className="  object-fill  w-full h-40"
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
