import TestComponent from '@/test';
import List from '@/list';

import { mount } from '@vue/test-utils';

test('mount a vue component', ()=>{
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'Angelo'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('List Component', () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, 'endgame']})
  expect(wrapper).toMatchSnapshot();
});