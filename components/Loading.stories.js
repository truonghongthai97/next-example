import Hello from "/components/hello";

export default {
  title: "Button",
  component: Hello,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Hello {...args} />;

export const ButtonPrimary = Template.bind({});
export const ButtonSecondary = Template.bind({});

ButtonPrimary.args = {
  /*👇 The args you need here will depend on your component */
};
