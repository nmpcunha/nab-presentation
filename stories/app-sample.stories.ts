import { html, TemplateResult } from 'lit';
import '../src/app-sample.js';

export default {
  title: 'AppSample',
  component: 'app-sample',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <app-sample
    style="--app-sample-background-color: ${backgroundColor}"
    .header=${header}
  ></app-sample>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
