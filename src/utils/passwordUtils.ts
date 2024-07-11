import bcrypt from 'bcryptjs';

export const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};
