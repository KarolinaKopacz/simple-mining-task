import parse from 'html-react-parser';
import { QuestionObjectType } from '../../_types';
import { useState } from 'react';
type FAQQuestionContentProps = {
  content: QuestionObjectType;
};

const handleQuestionIdInUrl = (questionId: string, isOpen: boolean) => {
  const openIds = window.location.hash
    .replace('#', '')
    .split(',')
    .filter(Boolean);

  if (isOpen) {
    openIds.push(questionId);
    window.location.hash = openIds.join(',');
  } else {
    // to pozostawi pusty znak # w przypadku gdy wszystkie pytania są zamknięte
    // aby to rozwiązać musimy manipulować history.pustState lub .href
    // sam # jednak nie wpływa na działanie programu
    window.location.hash = openIds.filter((id) => id !== questionId).join(',');
  }
};

const getInitialOpenState = (questionId: string) => {
  return window.location.hash.replace('#', '').split(',').includes(questionId);
};

const FAQQuestionContent = ({ content }: FAQQuestionContentProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(
    getInitialOpenState(content.id.toString())
  );

  const toggleAnswer = () => {
    const switchToVisible = !isAnswerVisible;
    setIsAnswerVisible(switchToVisible);
    handleQuestionIdInUrl(content.id.toString(), switchToVisible);
  };

  return (
    <div className="faq-question-content-container">
      <div>
        <button
          className="faq-question-content-button"
          onClick={() => toggleAnswer()}
        >
          {content.title}
        </button>
        {isAnswerVisible && <div>{parse(content.content)}</div>}
      </div>
    </div>
  );
};

export default FAQQuestionContent;
