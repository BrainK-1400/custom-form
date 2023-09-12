import { Form } from "./Form";
import { merge } from 'lodash-es';

export class Widget {
  _key = Symbol();
  field = this.createRandomField();
  type = '';
  label?: string;
  description = '';

  form!: Form;
  model?: { [key: string]: any };

  _isRequired = false;
  _isEditable = true;
  _isHidden = false;
  isRequired = false;
  isEditable = true;
  isHidden = false;

  //设计页面保存时验证控件的配置属性
  validate(): string | Array<string> | void { }

  //提交时验证控件的model的值
  async validateModel(): Promise<string | Array<string> | void> { }

  init(data: any) {
    merge(this, data);
  }

  getModel() {
    return this.model;
  }

  getPlainData() {
    const ingoreProperties = ['form', 'model', 'isRequired', 'isEditable', 'isHidden'];
    let newData = {};
    for (let [key, value] of Object.entries(this)) {
      // 下划线开头的属性为私有属性，不进行序列化
      if (!key.startsWith('_') && !ingoreProperties.includes(key)) {
        Reflect.set(newData, key, value);
      }
    }
    return newData;
  }
  createRandomField() {
    return (((1 + Math.random()) * 0x1000000000) | 0).toString(16).substring(1);
  }
}

export interface Option {
  label: string,
  value: any
}

export interface DataSource {
  mode: 'options' | 'remoteKey';
  options: Array<Option>;
  defaultValue?: any;
  remoteKey: string | null;
}

export class WidgetWithDataSource extends Widget {
  options = [] as Array<Option>;
  dataSource = {
    mode: 'options',
    options: [],
    defaultValue: null,
    remoteKey: null,
  } as DataSource;

  validate() {
    let errors = [];
    if (
      (this.dataSource.mode == 'options' && this.dataSource.options.length == 0) ||
      (this.dataSource.mode == 'remoteKey' && !this.dataSource.remoteKey)
    ) {
      errors.push(`‘${this.label}’控件没有指定数据源`);
    }
    return errors;
  }

  async initOptionsAsync() {
    console.log('initOptionsAsync', this);
    this.options = [];
    if (this.dataSource.mode == 'options') {
      this.options = this.dataSource.options;
    } else if (this.dataSource.remoteKey) {
      // this.options = await $get('CustomWidgetDataSource/GetByRemoteKey', {
      //   remoteKey: this.dataSource.remoteKey,
      // });
    } else {
      console.error(`不支持类型为${this.dataSource.mode}的数据源`);
    }
  }
}
