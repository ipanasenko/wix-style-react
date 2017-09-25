import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const selectorDriverFactory = ({element, wrapper, component}) => {
  const el = $(element);

  return {
    exists: () => !!element,
    isChecked: () => el.find('input[type="checkbox"]').hasClass('checked'),
    getTitle: () => el.find('[data-hook="title"] > span').text(),
    getSubTitle: () => el.find('[data-hook="subtitle"] > span').text(),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default selectorDriverFactory;

