import { HoverEffect } from "@/components/ui/card-hover-effect";
import svgimage from "@/public/images/learning-teacher-svgrepo-com.svg";
import teacher from "@/public/images/teacher-svgrepo-com.svg";
import material from "@/public/images/books-and-sand-clock-svgrepo-com.svg";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <h1 className="md:text-4xl text-2xl  text-center text-darkMain py-8 font-bold font-[Poppins] block m-auto  max-w-xl ">
        We Provides a Comfortable Learning Environment
        <span className="w-56 h-2 bg-secondMain block mx-auto translate-x-6 border-2 border-ligtherMain"></span>
        <span className="w-56 h-2 bg-secondMain block  mx-auto  border-2 border-ligtherMain"></span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Professional native Arabic tutors",
    description:
      "Our teachers are native Arabic speakers who are highly certified in teaching Arabic and Quran.",
    link: "",
    img: teacher,
  },
  {
    title: "One-on-one class",
    description:
      "TarteeL Academy classes are based on direct interaction between the teacher and his student which allows for better progress and follow-up. Individual and group sessions are available.",
    link: "",
    img: svgimage,
  },
  {
    title: "24/7 material access",
    description:
      "The educational material at TarteeL Academy platform is available all the time for our students.",
    link: "",
    img: material,
  },
  {
    title: "Timely mistakes correction",
    description:
      "Mistakes are the door to perfection. We believe students have the right to make mistakes and get corrected through their learning journey.",
    link: "",
    img: svgimage,
  },
  {
    title: "Certificate per level or course",
    description:
      "Qualified students are certified for passing each level at our courses to encourage their learning progress.",
    link: "",
    img: svgimage,
  },
  {
    title: "Interactive exercises",
    description:
      "TarteeL Academy  learning sessions provide interactive exercises to ensure students fully understand and are able to practice the discussed teaching material during the session.",
    link: "",
    img: svgimage,
  },
];
