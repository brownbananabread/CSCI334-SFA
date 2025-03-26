import { fetchRequest } from './fetchRequest';

/**
 * Fetch function to handle form submission for the landing page.
 *
 * @param email - Users email address.
 *
 * @returns - JSON-parsed response body.
 **/

export const handleLandingFormSubmit = async (email: string) => {
    const { status, body } = await fetchRequest({
      method: 'POST',
      url: 'http://localhost:5174/api/validate',
      data: { email },
    });
    console.log(body);
    return status === 200;
};

/**
 * Fetch function to handle form submission for the login page.
 *
 * @param email - Users email address.
 * @param password - Users password.
 *
 * @returns - JSON-parsed response body.
 **/

export const handleLoginFormSubmit = async (email: string, password: string) => {
  const { status, body } = await fetchRequest({
    method: 'POST',
    url: 'http://localhost:5174/api/login',
    data: { email, password },
  });
  console.log(body);
  return status === 200;
};

/**
 * Fetch function to handle form submission for the register page.
 *
 * @param firstName - Users first name.
 * @param lastName - Users last name.
 * @param email - Users email address.
 * @param password - Users password.
 * @param isBusinessAccount - Boolean to check if user is a business account.
 *
 * @returns - JSON-parsed response body.
 **/

export const handleRegisterFormSubmit = async (
  firstName: string,
  lastName: string,
  email: string, 
  password: string,
  isBusinessAccount: boolean
) => {
  const { status, body } = await fetchRequest({
    method: 'POST',
    url: 'http://localhost:5174/api/register',
    data: { firstName, lastName, email, password, isBusinessAccount },
  });
  console.log(body);
  return status === 200;
};