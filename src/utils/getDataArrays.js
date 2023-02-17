import moment from 'moment';
import millify from 'millify';

const getMonths = (obj) => {
  const dates = Object.keys(obj);
  let monthLabels = [];

  dates.map((dt) => {
    let m = moment(dt).format('MMM');
    monthLabels.push(m);
  });

  return monthLabels;
};

const getPercentage = (changeBy, lastMonthVisits) => {
  return (changeBy / lastMonthVisits) * 100;
};

const getMonthlyChange = (numberData) => {
  const lastMonthVisits = numberData[1];
  const thisMonthVisits = numberData[2];

  let monthlyChange = lastMonthVisits - thisMonthVisits;
  // console.log('last month:', lastMonthVisits);
  // console.log('this month:', thisMonthVisits);
  // console.log('Change:', monthlyChange);

  let changeBy = 0;
  let changePercentage = 0;
  let isPositive = true;

  if (monthlyChange >= 0) {
    // console.log('Decreased by', millify(Math.abs(monthlyChange)));
    changeBy = Math.abs(monthlyChange);
    changePercentage = getPercentage(changeBy, lastMonthVisits);
    isPositive = false;
  } else {
    // console.log('Increased by', millify(Math.abs(monthlyChange)));
    changeBy = Math.abs(monthlyChange);
    changePercentage = getPercentage(changeBy, lastMonthVisits);
  }

  // console.log('Change Percentage:', changePercentage.toFixed(2));
  // console.log('Change Percentage:', Math.ceil(changePercentage));

  return {
    monthlyChangePercentage: changePercentage.toFixed(2),
    isPositive,
  };
};

export { getMonths, getMonthlyChange };
