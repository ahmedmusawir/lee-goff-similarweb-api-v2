import React, { useState, useEffect } from 'react';
// import data from './data';
// import data from './data2';
// import data from './data3';
import data from './data.amazon';
// import data from './data5';
import Header from '../components/Header';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';

function HomePage() {
  const [apiData, setApiData] = useState(data[0]);
  const [isNumber, setIsNumber] = useState(false);
  const [rapidApiKey, setRapidApiKey] = useState('');
  const [emailApiKey, setEmailApiKey] = useState('');

  // console.log('ApiData:', apiData);
  // console.log('Data:', data[0]);

  useEffect(() => {
    const getKeys = async () => {
      await setRapidApiKey(
        '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd'
      );
    };

    getKeys();
  }, []);

  return (
    <main className='container-fluid main-container'>
      <header className='container bg-dark py-5 mb-5'>
        {apiData && (
          <Header
            totalVisits={apiData?.Engagments?.Visits}
            generatedLeads={apiData?.Engagments?.Visits * 0.2}
            setApiData={setApiData}
            setIsNumber={setIsNumber}
            rapidApiKey={rapidApiKey}
            emailApiKey={emailApiKey}
          />
        )}
      </header>
      <div className='container'>
        {apiData && !isNumber && (
          <div className='row section-1'>
            <SectionOne
              siteName={apiData?.SiteName}
              imgUrl={apiData?.LargeScreenshot}
              globalRank={apiData?.GlobalRank?.Rank}
              countryRank={apiData?.CountryRank?.Rank}
              categoryRank={apiData?.CategoryRank?.Rank}
              category={apiData?.CategoryRank?.Category}
              totalVisits={apiData?.Engagments?.Visits}
              bounceRate={apiData?.Engagments?.BounceRate}
              pagePerVisit={apiData?.Engagments?.PagePerVisit}
              avgVisitDuration={apiData?.Engagments?.TimeOnSite}
            />
          </div>
        )}
        {apiData && !isNumber && (
          <div className='row section-2 mt-5'>
            <SectionTwo
              siteName={apiData?.SiteName}
              direct={apiData?.TrafficSources?.Direct}
              referrals={apiData?.TrafficSources?.Referrals}
              search={apiData?.TrafficSources?.Search}
              social={apiData?.TrafficSources?.Social}
              mail={apiData?.TrafficSources?.Mail}
              totalVisits={apiData?.Engagments?.Visits}
              bounceRate={apiData?.Engagments?.BounceRate}
              pagePerVisit={apiData?.Engagments?.PagePerVisit}
              avgVisitDuration={apiData?.Engagments?.TimeOnSite}
              monthlyTotalVisits={apiData?.EstimatedMonthlyVisits}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default HomePage;
