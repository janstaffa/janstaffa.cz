import { isPhoneRegExp } from '../constants';

export const isServer = () => !window || !document;
export const isPhone = () => {
  if (isServer()) return false;
  return isPhoneRegExp.test(navigator.userAgent);
};
