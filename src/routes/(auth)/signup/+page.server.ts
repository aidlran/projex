import { redirect } from '@sveltejs/kit';
import { SIGN_UP_CODE } from '$env/static/private';
import { jwtService } from '$lib/server/utils/context';

const COOKIE_NAME = 'sign_up_code';

export async function load({ cookies }) {
  const jwt = cookies.get('jwt');
  if (jwt)
    try {
      if (await jwtService.verify(jwt)) {
        throw redirect(303, '/dashboard');
      }
    } catch (e) {
      /* empty */
    }

  const signUpCode = cookies.get(COOKIE_NAME);
  if (signUpCode !== SIGN_UP_CODE) {
    cookies.delete(COOKIE_NAME);
    throw redirect(303, '/signup/code' + (signUpCode ? '?invalid' : ''));
  }
}
