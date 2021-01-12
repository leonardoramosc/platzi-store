import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe("<Footer />", () => {
  const footer = mount(<Footer />);

  test("Footer render", () => {
    expect(footer.length).toEqual(1);
  });

  test("It renders title", () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Stor");
  });
});

describe("Footer Snapshot", () => {
  test("check Footer UI", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  })
})