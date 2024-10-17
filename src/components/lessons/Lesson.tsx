import React, { FC, useState } from "react";
import { LessonProps } from "../../types/types";
import Topic from "./Topic";
import Content from "./Content";
import useLesson from "../hooks/useLesson";
import FullDivider from "../dividers/FullDivider";

const Lesson: FC<LessonProps> = ({ lesson }) => {
  const { isTopicsOpen, isContentOpen, handleShowTopics, handleShowContent } =
    useLesson();
  return (
    <div className="lesson">
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>
      <button className="lesson__button" onClick={handleShowTopics}>
        {isTopicsOpen ? "Hide Topics" : "Show Topics"}
      </button>
      {isTopicsOpen &&
        lesson.topics.map((topic, index) => (
          <Topic key={index} topic={topic} />
        ))}
      <button className="lesson__button" onClick={handleShowContent}>
        {isContentOpen ? "Hide Content" : "Show Content"}
      </button>
      {isContentOpen &&
        lesson.content.map((content, index) => (
          <Content key={index} content={content} />
        ))}
      <FullDivider />
    </div>
  );
};

export default Lesson;
