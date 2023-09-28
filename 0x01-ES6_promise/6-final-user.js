import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const resArr = [];

      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          resArr.push(value);
        } else {
          resArr.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return resArr;
    });
}
