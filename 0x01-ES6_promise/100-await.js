import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => ({
      photo: { status: values[0].status, body: values[0].body },
      user: { firstName: values[1].firstName, lastName: values[1].lastName },
    }), () => ({ photo: null, user: null }));
}
