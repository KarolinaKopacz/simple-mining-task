import './App.css';
import FAQSection from './components/faq/FAQSection';
import JSONdata from '../src/data/02-faq.json';
import { useMemo, useState } from 'react';
import useGetMappedData from './hooks/useGetMappedData';
import SearchInput from './components/inputs/SearchInput';

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const { getMappedData } = useGetMappedData(searchKeyword);

  const columnLeft = useMemo(
    () => getMappedData(JSONdata.groups.left),
    [getMappedData]
  );
  const columnRight = useMemo(
    () => getMappedData(JSONdata.groups.right),
    [getMappedData]
  );

  return (
    <div className="app">
      <SearchInput searchValue={(value: string) => setSearchKeyword(value)} />
      <div className="faq-section-container">
        <div>
          {columnLeft.map((section, indexKey) => (
            <FAQSection data={section} key={indexKey} />
          ))}
        </div>
        <div>
          {columnRight.map((section, indexKey) => (
            <FAQSection data={section} key={indexKey} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
