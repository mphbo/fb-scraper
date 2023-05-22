export const groupsPage = async (page: any) => {
  // Selectors
  const shambhalaGroupButton = await page.waitForSelector(
    "::-p-text(The NEW-ISH Shambhala Ticket Exchange 2.0)"
  );

  // actions
  const clickShambhalaGroupButton = async () =>
    await shambhalaGroupButton?.click();

  return {
    clickShambhalaGroupButton,
  };
};
