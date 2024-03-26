import React from "react";
import Teacher from "@/types/teacher";
import { Card } from "./card";

export const Teachers = () => {
    const teachers = getTeachers();

    return <>
        <div className="flex justify-center">
            <h2>Professores</h2>
        </div>
        {teachers.map((teacher, index) => <TeacherCard key={index} teacher={teacher} />)}
    </>
};

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
    const imgSrc = teacher.imgSrc;
    const imgAlt = teacher.name;
    const body = getTeacherBody(teacher);

    return <Card body={body} imgSrc={imgSrc} imgAlt={imgAlt} />;
}

const getTeacherBody = ({ name, course, description }: Teacher) => {
    return <>
        <div className="w-full basis-1/2">
            <h4 className="text-center pb-4">{name}</h4>
            <h5>{`Professor de ${course}`}</h5>
            <p>{description}</p>
        </div>
    </>;
}

const getTeachers = (): Array<Teacher> => {
    return [{
        name: "Gabriela Ferraz",
        course: "Desenvolvimento Web Full Stack",
        description: "Formada em Ciência da Computação pela Universidade Federal de Santa Catarina e pós-graduada em Especialização em Desenvolvimento Web pela Universidade Estadual de Santa Catarina. Possui mais de 15 anos de experiência na área, com foco em desenvolvimento web full stack e nas linguagens JavaScript, Python e PHP.",
        imgSrc: "/images/Professor 1.jpg"
    }, {
        name: "Juliana Monteiro",
        course: "Front-End Development e Acessibilidade",
        description: "Formada em Design Gráfico pela Universidade de São Paulo. Possui mais de 7 anos de experiência na área, com foco em frameworks modernos como React e Vue.js, e especialização em acessibilidade web (WCAG).",
        imgSrc: "/images/Professor 2.jpeg"
    }, {
        name: "Ricardo Belli",
        course: "Desenvolvimento Web Back-end",
        description: "Formado em Engenharia de Software pela Universidade Federal do Rio de Janeiro. Possui mais de 5 anos de experiência na área, com foco em desenvolvimento de APIs RESTful com Python e Node.js.",
        imgSrc: "/images/Professor 3.jpg"
    }]
}