import moment from 'moment';

const getMonths = (obj) => {
  const dates = Object.keys(obj);
  let monthLabels = [];

  dates.map((dt) => {
    let m = moment(dt).format('MMM');
    monthLabels.push(m);
  });

  return monthLabels;
};

export { getMonths };
