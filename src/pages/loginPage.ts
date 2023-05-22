export const loginPage = async (page: any) => {
  // Selectors
  const loginPageContainer = await page.waitForSelector(
    '[data-testid="royal_login_form"]'
  );
  const usernameField = await loginPageContainer.waitForSelector(
    '[data-testid="royal_email"'
  );
  const passwordField = await loginPageContainer.waitForSelector(
    '[data-testid="royal_pass"'
  );
  const loginButton = await loginPageContainer.waitForSelector(
    '[data-testid="royal_login_button"'
  );

  // actions
  const typeUsername = async (username: string) =>
    await usernameField?.type(username);

  const typePassword = async (password: string) =>
    await passwordField?.type(password);

  const clickLoginButton = async () => await loginButton.click();

  return {
    typeUsername,
    typePassword,
    clickLoginButton,
  };
};
