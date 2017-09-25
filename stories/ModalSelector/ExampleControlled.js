import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalSelector from '../../src/ModalSelector';
import Selector from '../../src/Selector';
import {Button} from 'wix-style-react/Backoffice';

const optionsList = [
  {
    selected: false,
    title: 'Lake Briashire',
    subtitle: '04 May 2017',
    extraText: '22% Off',
    imageSrc: 'http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY='
  },
  {
    selected: false,
    title: 'Tristinchester',
    subtitle: '25 Dec 2017',
    extraText: '12% Off',
    imageSrc: 'http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY='
  },
  {
    selected: false,
    title: 'South Phoebe',
    subtitle: '02 Aug 2017',
    extraText: '18% Off',
    imageSrc: 'http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY='
  },
  {
    selected: false,
    title: 'South Adaborough',
    subtitle: '08 Aug 2017',
    extraText: '75% Off',
    imageSrc: 'http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY='
  },
];

class ControlledModalSelector extends Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  constructor({isOpen = false}) {
    super();
    this.state = {
      isOpen,
      footerChecked: false,
      optionsList
    };
  }

  generateSetState = state => () => this.setState(state);

  close = this.generateSetState({isOpen: false});
  open = this.generateSetState({isOpen: true});

  toggleSelector = id => {
    const optionsList = this.state.optionsList;
    const newToggleState = !optionsList[id].selected;

    optionsList[id].selected = newToggleState;

    this.setState({optionsList});
    this.setFooterText();
  }

  setFooterText = () => {
    const numOfSelected = optionsList.filter(x => x.selected).length;
    this.setState({
      footerText: numOfSelected ?
        `Deselect (${numOfSelected})` :
        `Select All (${optionsList.length})`,
      footerChecked: !!numOfSelected
    });
  }

  toggleFooterStatus = () => {
    const numOfSelected = optionsList.filter(x => x.selected).length;

    optionsList.forEach(x => x.selected = !numOfSelected);

    this.setFooterText();
  }

  search(text) {
    if (!text) {
      this.setState({optionsList});
    } else {
      const filtered = optionsList.filter(({title}) => title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
      this.setState({optionsList: filtered});
    }
  }

  componentWillMount() {
    this.setFooterText();
  }

  render() {
    const searchInput = (<ModalSelector.Search
      onChange={text => this.search(text)}
      minimumChars={1}
      delayTime={300}
      />);

    const footerStatus = (<ModalSelector.FooterStatus
      checked={this.state.footerChecked}
      text={this.state.footerText}
      onCheckBoxClick={() => this.toggleFooterStatus()}
      />);

    return (
      <div>
        <Button onClick={this.open}>Open Modal Selector</Button>
        <ModalSelector
          isOpen={this.state.isOpen}
          onOk={this.close}
          onCancel={this.close}
          onClose={this.close}
          enableOk={this.state.footerChecked}
          modalHeight="540px"
          prefixContent={searchInput}
          footerStatus={footerStatus}
          >
          {this.state.optionsList.map((x, i) => <Selector
            id={i}
            key={i}
            title={x.title}
            subTitle={x.subtitle}
            imageSrc={x.imageSrc}
            imageSize="Large Square"
            onToggle={id => this.toggleSelector(id)}
            isSelected={x.selected}
            >
            <Selector.ExtraText text={x.extraText}/>
            {/* <Selector.ExtraIcon name="Add"/> */}
            {/*<Selector.ProgressBar progress={83}/>*/}
          </Selector>)}
        </ModalSelector>
      </div>
    );
  }
}

export default () =>
  <div>
    <ControlledModalSelector/>
  </div>;
