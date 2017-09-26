const modalSelectorDriverFactory = component => {
  const getSearchInput = () => component.$('input');

  return {
    inputDriver: {
      exists: () => getSearchInput().isPresent(),
      isVisible: () => getSearchInput().isDisplayed(),
      getValue: () => getSearchInput().getAttribute('value'),
      click: () => getSearchInput().click(),
      pressEnterKey: () => getSearchInput().sendKeys(protractor.Key.ENTER),
      pressEscKey: () => getSearchInput().sendKeys(protractor.Key.ESCAPE),
      pressTabKey: () => getSearchInput().sendKeys(protractor.Key.TAB),
      pressArrowRightKey: () => getSearchInput().sendKeys(protractor.Key.ARROW_RIGHT),
    }
  };
};

export default modalSelectorDriverFactory;
