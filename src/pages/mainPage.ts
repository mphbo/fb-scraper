export const mainPage = async (page: any) => {
  // Selectors
  const groupsButton = await page.waitForSelector("::-p-text(Groups)");

  // actions
  const clickGroupsButton = async () => await groupsButton?.click();

  return {
    clickGroupsButton,
  };
};
