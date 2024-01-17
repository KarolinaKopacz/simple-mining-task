import './App.css';
import FAQSection from './components/faq/FAQSection';
import JSONdata from '../src/data/02-faq.json';
import { useMemo, useState } from 'react';
import useGetMappedData from './hooks/useGetMappedData';

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('rig SMOS');

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
      <div>
        {columnLeft.map((section) => (
          <FAQSection data={section} />
        ))}
      </div>
      <div>
        {columnRight.map((section) => (
          <FAQSection data={section} />
        ))}
      </div>
    </div>
  );
};

export default App;
