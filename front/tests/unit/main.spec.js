import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Main, {
    data: {
      input: 0,
      response: {
        number: '',
        error: ''
      },
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
    expect(wrapper.vm.response.number).toBe('');
    expect(wrapper.vm.response.error).toBe('');
  });

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
})
