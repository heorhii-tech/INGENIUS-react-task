import { useState } from "react";

const useLesson = () => {
  const [isTopicsOpen, setIsTopicsOpen] = useState<boolean>(false);
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  const handleShowTopics = (): void => {
    setIsTopicsOpen((prevState) => !prevState);
  };

  const handleShowContent = (): void => {
    setIsContentOpen((prevState) => !prevState);
  };
  return {
    isTopicsOpen,
    isContentOpen,
    handleShowTopics,
    handleShowContent,
  };
};
export default useLesson;
