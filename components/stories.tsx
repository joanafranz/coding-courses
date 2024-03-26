import React from "react";
import Story from "@/types/story";
import { Card } from "./card";

export const Stories = () => {
    const stories = getStories();

    return <>
        <div className="flex justify-center">
            <h2>Depoimentos</h2>
        </div>
        {stories.map((story, index) => <StoryCard key={index} story={story} />)}
    </>
};

const StoryCard = ({ story }: { story: Story }) => {
    const imgSrc = story.imgSrc;
    const imgAlt = story.student;
    const body = getStoryBody(story);

    return <Card body={body} imgSrc={imgSrc} imgAlt={imgAlt} />;
}

const getStoryBody = ({ student, course, description }: Story) => {
    return <>
        <div className="w-full basis-1/2">
            <h4 className="text-center pb-4">{student}</h4>
            <h5>{`Estudante de ${course}`}</h5>
            <p>{description}</p>
        </div>
    </>;

}

const getStories = (): Array<Story> => {
    return [{
        student: "Michele Almeida",
        course: "Arquitetura de software",
        description: "Optei pelo Agora por conta da flexibilidade. Tenho a liberdade de estudar em qualquer hora e local, basta ter acesso à internet.",
        imgSrc: "/images/Depoimento1.jpg"
    }, {
        student: "João Cardoso",
        course: "Banco de dados",
        description: "Estava há 16 anos no mesmo emprego. Nunca tinha me passado pela cabeça voltar a estudar agora. Me sinto empolgado nessa nova etapa.",
        imgSrc: "/images/Depoimento2.jpg"
    }]
}