import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalSelector from '../../src/ModalSelector';
import Selector from '../../src/Selector';
import {Button} from 'wix-style-react/Backoffice';

class ControlledSelector extends Component {

  constructor({isOpen = false}) {
    super();
    this.state = {
      isOpen,
      footerChecked: false
    };
  }

  render() {
    return (
      <div>

        <form className={styles.form}>
          <div className={styles.input}>
            <div className={styles.option}>
              <Label>Title</Label>>
              <div className={styles.flex}>
                <Input
                  size="small"
                  value={this.state.label.children}
                  onChange={e => this.setComponentState('label', {children: e.target.value})}
                  />
              </div>
            </div>
          </div>
        </form>
        <Selector
          title="TITLE TEXT"
          id={i}
          key={i}
          subTitle="SUBTITLE TEXT"
          imageSrc="http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY="
          imageSize="Cinema View"
          onToggle={this.selectorToggle}
          isSelected={x.selected}
          >
          {/* <Selector.ExtraText text="Extra Text"/> */}
          {/* <Selector.ExtraIcon name="add"/> */}
          {/*<Selector.ProgressBar progress={83}/>*/}
        </Selector>
      </div>
    );
  }
}

export default () =>
  <div>
    <ControlledSelector/>
  </div>;
