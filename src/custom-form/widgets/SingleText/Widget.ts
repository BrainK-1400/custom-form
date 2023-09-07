import { Widget } from '@cf/core/Widget';

export default class SingleText extends Widget {
  label = '单行文本';
  placeholder = '';
  defaultValue = '';
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
