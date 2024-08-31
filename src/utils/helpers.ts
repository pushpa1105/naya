export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
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
