export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  };

export const generateSixDigitCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};