import { QuestionObjectType } from '../../_types';
import FAQQuestionContent from './FAQQuestionContent';

type FAQSectionProps = {
  data: { name: string; questions: QuestionObjectType[] };
};

const FAQSection = ({ data }: FAQSectionProps) => {
  return (
    <div>
      <div className="faq-section-title">
        <h2>{data.name}</h2>
      </div>
      {data.questions.map((question) => (
        <FAQQuestionContent content={question} />
      ))}
    </div>
  );
};

export default FAQSection;
