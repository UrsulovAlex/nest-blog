import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string): string {
  const SALT = 10;
  return bcrypt.hashSync(rawPassword, SALT);
}
