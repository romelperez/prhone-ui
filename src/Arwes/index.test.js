import React from 'react';
import testSetup from '../test-setup';
import Arwes from './Arwes';

const { mount } = testSetup(Arwes);

describe('Arwes', function () {

  it('Should render without crashing', function () {
    mount();
  });

});