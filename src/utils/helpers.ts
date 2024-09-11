export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  return "http://localhost:3000";
};

export const transformToArray = <T extends Record<string, Record<string, any>>>(
  obj: T,
): Array<{ name: string } & T[keyof T]> => {
  const arrayValue = Object.entries(obj).map(([key, value]) => ({
    name: key,
    ...value,
  }));

  return arrayValue as Array<{ name: string } & T[keyof T]>;
};

export const getThumbnailForYTVideos = (url: string) => {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length == 11) {
    const videoId = match[2];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  } else {
    return `https://img.youtube.com/vi/123/0.jpg`;
  }
};
