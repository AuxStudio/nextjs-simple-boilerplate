import { getRef } from '..';

export default async (url, onFileDelete, onError) => {
  const storageRef = await getRef();

  try {
    storageRef
      .child(url)
      .delete()
      .then(onFileDelete)
      .catch(onError);
  } catch (error) {
    onError(error);
  }
};
