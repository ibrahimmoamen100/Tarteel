import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import teacher from "@/public/images/teacher3.jpeg";
import kids from "@/public/images/teacher kids.jpeg";
import quran from "@/public/images/class.jpeg";

export function BentoGridDemo() {
  return (
    <div className=" bg-lighterMain py-14">
      <h1 className="md:text-2xl text-xl font-bold text-center px-2 bg-darkMain text-lightMain pt-20 pb-8  ">
        Online Arabic and Quran lessons for men, women, and Kids. <br />
        <span> You can explore them.</span>
      </h1>
      <div className=""></div>
      <BentoGrid className="max-w-7xl mx-auto pt-20 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            src={item.src}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Online Arabic Course",
    description:
      "Learn Arabic online at your own pace with our 16-level course, featuring 400+ hours of one-on-one sessions. Improve your skills with interactive tools and expert tutors.",
    src: teacher,
    icon: <IconClipboardCopy className="h-4 w-4 text-darkMain" />,
  },
  {
    title: "Online Quran With Tajweed Course",
    description:
      "This course teaches the Quran to non-Arabic speakers worldwide, includes Tajweed lessons, and is taught by Ijazah certified teachers over 13 levels.",
    src: quran,
    icon: <IconFileBroken className="h-4 w-4 text-darkMain" />,
  },
  {
    title: "Online Arabic Course For Kids",
    description:
      "This 24-level online Arabic course for kids, taught by specialized teachers, covers Primary, Intermediate, and Secondary stages in fun, child-friendly sessions.",
    src: kids,
    icon: <IconSignature className="h-4 w-4 text-darkMain" />,
  },
];
