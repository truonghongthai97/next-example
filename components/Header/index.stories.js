import Header from "./index";

export default {
  title: "Header",
  component: Header,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

export const HeaderCom = Template.bind({});

HeaderCom.args = {
  /*👇 The args you need here will depend on your component */
};
