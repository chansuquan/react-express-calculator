import request from 'app/utils/request';

export const handleCalculation = (data) => {
  return request({ url: '/calculate', data, method: 'post' });
};