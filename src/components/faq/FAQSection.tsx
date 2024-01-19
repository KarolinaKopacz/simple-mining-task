import { memo } from 'react';
import { QuestionObjectType } from '../../_types';
import FAQQuestionContent from './FAQQuestionContent';
import isEqual from 'react-fast-compare';

type FAQSectionProps = {
  data: { name: string; questions: QuestionObjectType[] };
};

const FAQSection = memo(({ data }: FAQSectionProps) => {
  return (
    <div>
      <div className="faq-section-title">
        <h2>{data.name}</h2>
      </div>
      {data.questions.map((question) => (
        <FAQQuestionContent content={question} key={question.id} />
      ))}
    </div>
  );
}, isEqual);

export default FAQSection;
