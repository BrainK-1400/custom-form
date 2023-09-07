import { isString } from "lodash-es";
import { Widget } from "./Widget";
import { createWidget } from "../widgets";

export abstract class Form {
  widgets: Array<Widget> = [];

  clear() {
    this.widgets.splice(0, this.widgets.length);
  }

  init(plainFormData: { widgets: Array<Widget> }) {
    this.clear();
    plainFormData.widgets.forEach((w) => {
      let widget = createWidget(this, w.type, w);
      if (widget) {
        widget.form = this;
        this.widgets.push(widget);
      }
    });
  }

  getFlattenWidgets() {
    return this.widgets;
  }

  findWidgetByLabel(label: string): Widget | undefined {
    if (!label) {
      return undefined;
    }
    return this.getFlattenWidgets().find((w) => w.label == label);
  }

  findWidgetsByType(...types: string[]): Array<Widget> {
    return this.getFlattenWidgets().filter((w) => types.includes(w.type));
  }

  findWidgetByField(field: string): Widget | undefined {
    return this.getFlattenWidgets().find((w) => w.field == field);
  }

  onWidgetModelChanged(widget: Widget) { }
}

export class DesignForm extends Form {
  selectedWidget: Widget | null = null;

  constructor(plainData?: { widgets: Array<Widget> }) {
    super();
    if (plainData) {
      this.init(plainData);
    }
  }

  init(plainFormData: { widgets: Array<Widget> }) {
    super.init(plainFormData);
  }

  clear() {
    super.clear();
    this.selectedWidget = null;
  }

  validate() {
    let errors = [] as string[];
    this.widgets.forEach((w) => {
      let res = w.validate();
      if (Array.isArray(res)) {
        errors.push(...res);
      } else if (isString(res)) {
        errors.push(res);
      }
    });
    return errors;
  }

  getPlainData() {
    return {
      widgets: this.widgets.map((w) => w.getPlainData()),
    };
  }

  //删除指定控件
  removeWidget(widget: Widget) {
    let index = this.widgets.findIndex((w) => w == widget);
    if (index != -1) {
      this.widgets.splice(index, 1);
    }
  }
}

export class DisplayForm extends Form {
  constructor(plainData?: { widgets: Array<Widget> }) {
    super();
    if (plainData) {
      this.init(plainData);
    }
  }

  init(plainFormData: { widgets: Array<Widget> }) {
    super.init(plainFormData);

    this.getFlattenWidgets().forEach((w) => {
      //保存所有控件条件属性的原始值
      w._isEditable = w.isEditable;
      w._isRequired = w.isRequired;
      w._isHidden = w.isHidden;
    });
  }

  getWidgetModelInfos() {
    let arr = [] as Array<any>;
    let flattenWidgets = this.getFlattenWidgets().filter((w) => w.type != 'Placeholder');
    flattenWidgets.forEach((widget) => {
      arr.push({
        field: widget.field,
        model: widget.getModel(),
      });
    });
    return arr;
  }

  async validate() {
    let flattenWidgets = this.getFlattenWidgets();
    let errors = [];
    for (let w of flattenWidgets.filter((w) => w.type != 'ObjectProperty')) {
      if (w.isHidden || !w.isEditable || !w.validateModel) {
        continue;
      }
      var result = await w.validateModel();
      if (result) {
        if (Array.isArray(result)) {
          result.forEach((e) => {
            errors.push(`控件“${w.label}”：${e}`);
          });
        } else if (typeof result == 'string') {
          errors.push(`控件“${w.label}”：${result}`);
        }
      }
    }
    return errors;
  }
}