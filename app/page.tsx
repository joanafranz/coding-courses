import { Courses } from "@/components/courses";
import { Stories } from "@/components/stories";
import { Teachers } from "@/components/teachers";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center space-y-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center pb-12">
                <p className="text-xl">Educação para todos</p>
            </div>
            <section className="w-full bg-lime-800 p-10 md:p-12 lg:p-16 xl:p-20 2xl:p-24 rounded-[3.5rem] md:rounded-[4.2rem] lg:rounded-[5.5rem] xl:rounded-[7rem] 2xl:rounded-[8.5rem] relative">
                <Courses />
            </section>
            <section className="w-full bg-lime-800 p-10 md:p-12 lg:p-16 xl:p-20 2xl:p-24 rounded-[3.5rem] md:rounded-[4.2rem] lg:rounded-[5.5rem] xl:rounded-[7rem] 2xl:rounded-[8.5rem] relative">
                <Stories />
            </section>
            <section className="w-full bg-lime-800 p-10 md:p-12 lg:p-16 xl:p-20 2xl:p-24 rounded-[3.5rem] md:rounded-[4.2rem] lg:rounded-[5.5rem] xl:rounded-[7rem] 2xl:rounded-[8.5rem] relative">
                <Teachers />
            </section>
        </section>
    );
}
