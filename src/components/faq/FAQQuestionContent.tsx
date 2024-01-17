import parse from 'html-react-parser';
import { QuestionObjectType } from '../../_types';
import { useState } from 'react';

type FAQQuestionContentProps = {
  content: QuestionObjectType;
};

const FAQQuestionContent = ({ content }: FAQQuestionContentProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div>
      <p onClick={() => toggleAnswer()}>{content.title}</p>
      {isAnswerVisible && <p>{parse(content.content)}</p>}
    </div>
  );
};

export default FAQQuestionContent;
