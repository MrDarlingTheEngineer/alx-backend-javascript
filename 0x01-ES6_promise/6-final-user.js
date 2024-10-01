import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName)
    .then((data) => ({
      status: 'fulfilled',
      value: data,
    }))
    .catch((err) => ({
      status: 'rejected',
      value: err.toString(),
    }));

  const upload = await uploadPhoto(fileName)
    .then((data) => ({
      status: 'fulfilled',
      value: data,
    }))
    .catch((err) => ({
      status: 'rejected',
      value: err.toString(),
    }));

  return Promise.all([user, upload]);
}
