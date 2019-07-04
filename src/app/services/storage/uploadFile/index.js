import getStorageRef from '../getStorageRef';

export default async ({ url, file, onProgress, onError, onFileUploaded }) => {
  const storageRef = await getStorageRef();
  const uploadTask = storageRef.child(url).put(file);

  try {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const progress = (100 * bytesTransferred) / totalBytes;

        return onProgress(progress);
      },
      onError,
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(onFileUploaded)
          .catch(onError);
      },
    );
  } catch (error) {
    onError(error);
  }
};
