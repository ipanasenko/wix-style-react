import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../README.md';
import TestsReadme from '../../docs/TESTS.md';
import Contribution from '../../docs/CONTRIBUTING.md';
import TPA from '../../src/TPA/README.md';
import AutoDocsReadme from '../../docs/AutoDocs.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

storiesOf('Introduction', {})
  .add('Getting started', () => <Markdown source={Readme}/>)
  .add('Testing', () => <Markdown source={TestsReadme}/>)
  .add('Contribution', () => <Markdown source={Contribution}/>)
  .add('TPA', () => <Markdown source={TPA}/>)
  .add('AutoDocs', () => <Markdown source={AutoDocsReadme}/>)
  .add('Usage Without Yoshi', () => <Markdown source={UsageWithoutYoshiReadme}/>);
