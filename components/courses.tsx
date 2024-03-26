import React from "react";
import Course from "@/types/course";
import { Card } from "./card";
import { Button } from "@nextui-org/react";

const currencyFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

export const Courses = () => {
    const frontendCourses = getFrontendCourses();
    const backendCourses = getBackendCourses();
    const fullstackCourses = getFullstackCourses();

    const toCards = (courses: Array<Course>) => courses.map((course, index) => <CourseCard key={index} course={course} />);

    return <>
        <div className="flex justify-center">
            <h2>Cursos</h2>
        </div>
        <div>
            <h4>Front-end</h4>
            {toCards(frontendCourses)}
        </div>
        <div>
            <h4>Back-end</h4>
            {toCards(backendCourses)}
        </div>
        <div>
            <h4>Full-stack</h4>
            {toCards(fullstackCourses)}
        </div>
    </>
};

const CourseCard = ({ course }: { course: Course }) => {
    const imgAlt = course.name;
    const imgSrc = course.imgSrc;
    const body = getCourseBody(course);

    return <Card body={body} imgSrc={imgSrc} imgAlt={imgAlt} />;
}

const getCourseBody = ({ name, description, price }: Course) => {
    return <>
        <div className="space-y-4">
            <h3 className="text-center pb-4">{name}</h3>
            <p>{description}</p>
            <p>{`Valor: ${currencyFormat(price)}`}</p>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
            <Button color="primary">COMPRAR</Button>
        </div>
    </>;
}

const getFrontendCourses = (): Array<Course> => {
    return [{
        name: "HTML e CSS",
        description: "Do básico ao avançado, você vai aprender a criar o cabeçalho, conteúdo e rodapé de páginas web. Além da sua estilização. Entenda como conectar o HTML e CSS.",
        price: 29.90,
        imgSrc: "/images/1_Front_HTML_CSS.jpg"
    }, {
        name: "JavaScript",
        description: "O JS vai te permitir criar conteúdo que se atualiza dinamicamente, controlar multimídias e imagens animadas.",
        price: 29.90,
        imgSrc: "/images/2_Front_JavaScript.jpg"
    }, {
        name: "Bootstrap e Frameworks CSS",
        description: "Você vai aprender a utilizar ferramentas para otimizar o desenvolvimento front-end. Crie interfaces web responsivas e código mais limpo.",
        price: 29.90,
        imgSrc: "/images/3_Front_Bootstrap.png"
    }, {
        name: "React e Angular",
        description: "Com essas aulas, você vai aprender sobre as interfaces de usuário interativas e dinâmicas.",
        price: 32.90,
        imgSrc: "/images/4_Front_Angular_ReactJS.png"
    }]
}

const getBackendCourses = (): Array<Course> => {
    return [{
        name: "Linguagens de Programação",
        description: "Aqui você aprende sobre os fundamentos da programação e linguagens como Python, Java ou C++.",
        price: 45.90,
        imgSrc: "/images/5_Back_Linguadem_Programacao.jpeg"
    }, {
        name: "Banco de Dados",
        description: "Aprenda como administrar e manipular o banco de dados com tecnologias como MySQL, PostgreSQL e MongoDB.",
        price: 38.90,
        imgSrc: "/images/6_Back_Banco_Dados.png"
    }, {
        name: "Frameworks",
        description: "Aprenda como utilizar estruturas pré-definidas para agilizar o desenvolvimento de software. Saiba como as tecnologias Spring Boot, Django e Laravel podem te ajudar em aplicações web complexas e eficientes.",
        price: 44.90,
        imgSrc: "/images/7_Back_Framework.png"
    }, {
        name: "APIs",
        description: "Descubra o que são APIs e como funcionam.  Aprenda a usar ferramentas como Postman, REST e GraphQL. Saiba como escolher o estilo certo para sua API.",
        price: 44.90,
        imgSrc: "/images/8_Back_APIs.png"
    }]
}

const getFullstackCourses = (): Array<Course> => {
    return [{
        name: "Integração Front-end e Back-end",
        description: "Entenda como conectar a parte visual de um sistema com a parte lógica e de dados. Te ensinamos como conectar tecnologias como HTML, CSS e JavaScript com o Python, Java e PHP.",
        price: 27.90,
        imgSrc: "/images/9_Full_Integracao_Front_Back.png"
    }, {
        name: "Arquitetura de Software",
        description: "Iniciamos com padrões e estilos de arquitetura até chegar na análise de requisitos, implementação e testes. Aprenda a construir sistemas mais robustos e com alta qualidade.",
        price: 38.90,
        imgSrc: "/images/10_Full_Arquitetura_Software.jpg"
    }, {
        name: "Testes",
        description: "Saiba como garantir a qualidade de sites e aplicações web através de ferramentas como Selenium, Postman, Jmeter e Burp Suite. Aumente a qualidade dos seus sistemas, reduzindo bugs e falhas.",
        price: 35.90,
        imgSrc: "/images/11_Full_Teste.png"
    }, {
        name: "Desenvolvimento Ágil",
        description: "Aprenda a usar metodologias ágeis para gerenciar e desenvolver projetos. Descubra como funcionam ferramentas como Scrum, Kanban e Lean para organizar seu trabalho e equipe.",
        price: 27.90,
        imgSrc: "/images/12_Full_Metodologia_Agil.jpg"
    }]
}