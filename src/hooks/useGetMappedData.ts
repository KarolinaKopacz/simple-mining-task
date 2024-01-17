import { useCallback } from 'react';
import { GroupSidesType } from '../_types';
import JSONdata from '../../src/data/02-faq.json';

const stripHTML = (text: string) => text.replace(/<\/?[^>]+(>|$)/g, '');

const useGetMappedData = (searchKeyword: string) => {
  const getMappedData = useCallback(
    (data: GroupSidesType[]) => {
      return data
        .map((group) => {
          return {
            name: group.name,
            questions: JSONdata.questions.filter((question) => {
              const searchKeywords = searchKeyword.split(' ');

              const isThisGroup = question.groupId === group.id;
              const isSearchValid = !searchKeywords.length
                ? true
                : searchKeywords.every(
                    (keyword) =>
                      question.title.includes(keyword) ||
                      stripHTML(question.content).includes(keyword)
                  );

              return isThisGroup && isSearchValid;
            }),
          };
        })
        .filter((group) => group.questions.length !== 0);
    },
    [searchKeyword]
  );

  return {
    getMappedData,
  };
};

export default useGetMappedData;
