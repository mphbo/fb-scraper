export const shambhalaPage = async (page: any) => {
  // Selectors
  const feed = await page.waitForSelector('[role="feed"]');
  const firstTime = await feed.waitForSelector(".x4k7w5x");

  // actions
  //   const clickShambhalaGroupButton = async () =>
  //     await shambhalaGroupButton?.click();

  return {
    firstTime,
  };
};
