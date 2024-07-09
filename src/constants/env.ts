export enum EnvType {
  DEV = 'development',
  PROD = 'production',
}

const getEnv = () => {
  if (import.meta.env.DEV) {
    return EnvType.DEV;
  }
  return EnvType.PROD;
};

export const isDev = () => {
  return getEnv() === EnvType.DEV;
};

export const isProduction = () => {
  return getEnv() === EnvType.PROD;
};
