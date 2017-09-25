import React, {Component} from 'react';
import Selector from '../../src/Selector';
import {Container, Row, Col, Card} from '../../src/Grid';
import TextField from '../../src/TextField';
import Label from '../../src/Label';
import Input from '../../src/Input';
import RadioGroup from '../../src/RadioGroup';
import Image from '../../src/Selector/Image';
import * as styles from './ExampleStandard.scss';

const extraTypes = ['text', 'icon', 'progress'];

class ControlledSelector extends Component {

  constructor() {
    super();

    this.state = {
      id: 1,
      title: 'Title',
      subtitle: 'Subtitle',
      selected: false,
      imageSize: Image.types[0],
      extra: ''
    };
  }

  render() {
    return (
      <form className={styles.container}>
        <Container>
          <Row>
            <Col span={8}>
              <Card>
                <Card.Header title="Controls"/>
                <Card.Content>
                  <Row>
                    <Col span={3}>
                      <TextField>
                        <Label>Title</Label>
                        <Input
                          size="small"
                          value={this.state.title}
                          onChange={e => this.setState({title: e.target.value})}
                          />
                      </TextField>
                    </Col>
                    <Col span={3}>
                      <TextField>
                        <Label>Subtitle</Label>
                        <Input
                          size="small"
                          value={this.state.subtitle}
                          onChange={e => this.setState({subtitle: e.target.value})}
                          />
                      </TextField>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <div className={styles.label}><Label>Image size</Label></div>
                      <RadioGroup
                        value={this.state.imageSize}
                        display="horizontal"
                        onChange={imageSize => this.setState({imageSize})}
                        >
                        {Image.types.map((type, index) => <RadioGroup.Radio key={index} value={type}>{type}</RadioGroup.Radio>)}
                      </RadioGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <div className={styles.label}><Label>Extra</Label></div>
                      <RadioGroup
                        value={this.state.extra}
                        display="horizontal"
                        onChange={extra => this.setState({extra})}
                        >
                        {extraTypes.map((type, index) => <RadioGroup.Radio key={index} value={type}>{type}</RadioGroup.Radio>)}
                      </RadioGroup>
                    </Col>
                  </Row>
                </Card.Content>  
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Card.Header title="Preview"/>
                <Card.Content>
                  <Selector
                    title={this.state.title}
                    id={this.state.id}
                    subTitle={this.state.subtitle}
                    imageSrc="http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY="
                    imageSize={this.state.imageSize}
                    isSelected={this.state.selected}
                    onToggle={this.selectorToggle}
                    >
                    {this.state.extra === 'text' ? <Selector.ExtraText text="Extra Text"/> : ''}
                    {this.state.extra === 'icon' ? <Selector.ExtraIcon name="Add"/> : ''}
                    {this.state.extra === 'progress' ? <Selector.ProgressBar progress={83}/> : ''}
                  </Selector>
                </Card.Content>  
              </Card>
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
}

export default () =>
  <div>
    <ControlledSelector/>
  </div>;
