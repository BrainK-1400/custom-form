import { Widget } from '@cf/core/Widget';

export default class TextArea extends Widget {
  label = '多行文本';
  defaultValue = '';
  placeholder = '';
  rows = 4;
  model = { value: '' };

  getValues(): any[] {
    return [this.model.value];
  }

  async validateModel() {
    let errors = [];
    if (this.isRequired && !this.model.value) {
      errors.push('指定了必填，但没有值');
    }
    return errors;
  }
}
