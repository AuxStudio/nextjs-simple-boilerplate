import getStorageRef from '../getStorageRef';

export default async ({ url, onFileDeleted, onError }) => {
  const storageRef = await getStorageRef();

  try {
    storageRef
      .child(url)
      .delete()
      .then(onFileDeleted)
      .catch(onError);
  } catch (error) {
    onError(error);
  }
};
