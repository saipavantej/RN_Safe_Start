import moment from 'moment';

export const formatDate = (isoDateTime: string) => {
  return moment(isoDateTime).format('MMMM DD, YYYY');
};

export const formatTime = (isoDateTime: string) => {
  return moment(isoDateTime).format('h:mm:ss A');
};
