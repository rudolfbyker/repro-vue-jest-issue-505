import { createLocalVue, mount } from "@vue/test-utils";
import TestComponent from "../../TestComponent.vue";

test("TestComponent", async () => {
  const localVue = createLocalVue();
  const wrapper = mount(TestComponent, { localVue });
  await localVue.nextTick();
  expect(wrapper.text()).toEqual("Hello");
});
