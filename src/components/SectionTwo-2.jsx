import React from 'react';
import millify from 'millify';
import ReChartTest from './ReChartTest';

const SectionTwo = ({
  direct,
  referrals,
  search,
  social,
  mail,
  totalVisits,
  bounceRate,
  pagePerVisit,
  avgVisitDuration,
}) => {
  console.log('Direct', direct);
  return (
    <>
      <article className='text-content py-5 mx-5'>
        <h3>amazon.com Traffic and Engagement Analysis</h3>
        <p>
          <small>
            amazon.com's traffic has decreased by 8.30% compared to last month
            (Desktop). Click below to reveal how well amazon.com meets visitor
            expectations and captures their interest.
          </small>
        </p>
      </article>
      <article className='other-content container'>
        <div className='row'>
          <div className='col-md-3'>
            <h6 className='text-center'>Traffic & Engagement Last Month</h6>
            <aside className='p-5 rounded'>
              <span className='text-block mb-5'>
                <small>Total Visits</small>
                <h5>{millify(totalVisits)}</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Last Month Change</small>
                <h5>Not Sure</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Avg Visit Duration</small>
                <h5>{millify(avgVisitDuration / 60)} min</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Bounce Rate</small>
                <h5>{millify(bounceRate * 100)}%</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Page per Visit</small>
                <h5>{millify(pagePerVisit)}</h5>
              </span>
            </aside>
          </div>
          <div className='col-md-6'>
            <ReChartTest />
          </div>
          <div className='col-md-3'>
            <h6 className='text-center'>Traffic Sources</h6>
            <aside className='p-5 rounded'>
              <span className='text-block mb-5'>
                <small>Direct</small>
                <h5>{millify(direct * 100)}</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Referrals</small>
                <h5>{millify(referrals * 100)}</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Search</small>
                <h5>{millify(search * 100)}</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Social</small>
                <h5>{millify(social * 100)}</h5>
              </span>
              <span className='text-block mb-5'>
                <small>Mail</small>
                <h5>{millify(mail * 100)}</h5>
              </span>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default SectionTwo;
