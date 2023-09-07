import { Widget } from '@cf/core/Widget';

export default class Switch extends Widget {
  label = '开关';
  defaultValue = false;
  activeText = '';
  inactiveText = '';
  model = { value: false };
}
