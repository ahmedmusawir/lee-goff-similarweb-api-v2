import React, { useState } from 'react';
import millify from 'millify';
// import data from '../pages/data3';
// import data from '../pages/data4';
import data from '../pages/data5';

const Header = ({ totalVisits, generatedLeads, setApiData, setIsNumber }) => {
  const [domainName, setDomainName] = useState('');
  const [error, setError] = useState('');
  const [totalVisitsByUser, setTotalVisitsByUser] = useState(null);
  const [generatedLeadsByUsers, setGeneratedLeadsByUsers] = useState(null);

  const validateData = (e) => {
    if (domainName) {
      if (isNaN(domainName)) {
        setIsNumber(false);
        console.log('Input is text');
        setApiData(data[0]);
      } else {
        console.log('Input is a number');
        setIsNumber(true);
        setTotalVisitsByUser(domainName);
        setGeneratedLeadsByUsers(domainName * 0.2);
      }
    } else {
      setError('Input is requied!');
    }
  };

  return (
    <div className='row'>
      <section className='col-md-8 mx-auto'>
        <div className='row header-top-section mx-auto'>
          <div className='col-sm-8 header-inputs'>
            <input
              type='text'
              className='form-control get-estimate-input'
              placeholder='Enter your domain URL or traffic count'
              onChange={(e) => setDomainName(e.target.value)}
            />
          </div>
          <div className='col-sm-4 header-inputs'>
            <button
              className='btn btn-block btn-info get-estimate-btn'
              onClick={validateData}
            >
              Get Estimate
            </button>
          </div>
        </div>
        <div className='row header-bottom-section mt-5'>
          {!totalVisitsByUser && (
            <>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(totalVisits)}</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(generatedLeads)}</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </>
          )}
          {totalVisitsByUser && (
            <>
              <div className='col-sm-6'>
                <article className='left-blue-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(totalVisitsByUser)}</h2>
                  <h5>Unique Visitors</h5>
                </article>
              </div>
              <div className='col-sm-6'>
                <article className='right-orange-box estimate-box estimate-box d-flex flex-column align-items-center justify-content-center'>
                  <h2>{millify(generatedLeadsByUsers)}</h2>
                  <h5>Lead Gaurantee</h5>
                </article>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;
