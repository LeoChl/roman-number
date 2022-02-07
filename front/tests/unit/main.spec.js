import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Main, {
    data: {
      input: 0,
      numberRoman: '',
      errorMsg: '',
    }
  })
});

afterEach(() => {
  wrapper.destroy();
});

describe('Main.vue', () => {
  it('has data', () => {
    expect(typeof Main.data).toBe('function');
  });

  it('set data on mount', () => {
    expect(wrapper.vm.input).toBe(0);
    expect(wrapper.vm.numberRoman).toBe('');
    expect(wrapper.vm.errorMsg).toBe('');
  });

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
})
