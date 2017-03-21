import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import buttonHeaderDriverFactory from './ButtonHeader.driver';
import {createDriverFactory} from '../../test-common';
import ButtonHeader from './ButtonHeader';
import {buttonTestkitFactory, buttonHeaderTestkitFactory} from '../../../testkit';
import {buttonHeaderTestkitFactory as enzymeButtonHeaderTestkitFactory} from '../../../testkit/enzyme';
import {mount} from 'enzyme';

describe('ButtonHeader', () => {
  const createDriver = createDriverFactory(buttonHeaderDriverFactory);

  it('should have a title', () => {
    const driver = createDriver(<ButtonHeader buttonOnClick={() => {}} buttonTitle="Click me" title="Header Title"/>);
    expect(driver.title()).toBe('Header Title');
  });

  it('should have a subtitle', () => {
    const driver = createDriver(<ButtonHeader buttonOnClick={() => {}} buttonTitle="Click me" subtitle="Header Subtitle" title="Header Title"/>);
    expect(driver.subtitle()).toBe('Header Subtitle');
  });

  it('should have a button testKit', () => {
    const driver = createDriver(<ButtonHeader buttonOnClick={() => {}} buttonTitle="Click me" subtitle="Header Subtitle" title="Header Title"/>);
    const buttonDriverTestkit = buttonTestkitFactory({wrapper: driver.element(), dataHook: driver.buttonDataHook()});
    expect(buttonDriverTestkit.getButtonTextContent()).toBe('Click me');
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><ButtonHeader buttonOnClick={() => {}} buttonTitle="Click me" title="Header Title" dataHook={dataHook}/></div>));
      const buttonHeaderTestkit = buttonHeaderTestkitFactory({wrapper, dataHook});
      expect(buttonHeaderTestkit.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<ButtonHeader buttonOnClick={() => {}} buttonTitle="Click me" title="Header title" dataHook={dataHook}/>);
      const buttonDriverTestkit = enzymeButtonHeaderTestkitFactory({wrapper, dataHook});
      expect(buttonDriverTestkit.exists()).toBeTruthy();
    });
  });
});