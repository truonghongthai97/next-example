import Loading from "./index";

export default {
  title: "Loading",
  component: Loading,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Loading {...args} />;

export const LoadingCom = Template.bind({});

LoadingCom.args = {
  /*👇 The args you need here will depend on your component */
};
