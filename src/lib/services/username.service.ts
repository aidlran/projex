/**
 * Takes the name part of the email (ignoring any alias) and strips it of non-alphanumeric values.
 *
 * @param {string} email An email address.
 *
 * @todo need to check if username exists & append a random number.
 */
export function generateUsernameFromEmail(email: string): string {
  return sanitizeUsername(email.split('@')[0].split('+')[0]);
}

/**
 * Strips the input of non-alphanumeric characters.
 */
export function sanitizeUsername(username: string): string {
  return username.replace(/[^0-9a-zA-Z]/gi, '');
}
