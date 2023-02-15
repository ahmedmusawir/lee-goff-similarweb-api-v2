import React, { useState } from 'react';
import data from '../data';
// import data from '../data2';
// import data from '../data3';
import SectionOne from '../../components/SectionOne';
import SectionTwo from '../../components/SectionTwo';

function HomePage() {
  // console.log('Data:', data[0]);
  const [apiData, setApiData] = useState(data[0]);
  // console.log('ApiData:', apiData);

  return (
    <main className='container-fluid main-container'>
      <header className='container bg-dark py-5 mb-5'>
        <div className='row'>
          <section className='col-md-8 mx-auto'>
            <div className='row header-top-section mx-auto'>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control get-estimate-input'
                  placeholder='Enter your domain URL or traffic count'
                />
              </div>
              <div className='col-sm-4'>
                <button className='btn btn-block btn-info get-estimate-btn'>
                  Get Estimate
                </button>
              </div>
            </div>
            <div className='row header-bottom-section mt-5'>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>10,236</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>2,046</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </div>
          </section>
        </div>
      </header>
      <div className='container'>
        <div className='row section-1'>
          {apiData && (
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
          )}
        </div>
        <div className='row section-2 mt-5'>
          {apiData && (
            <SectionTwo
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
          )}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
