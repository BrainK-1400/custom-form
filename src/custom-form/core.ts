export class Form {
    widgets: Array<Widget> = [];
}

export class Widget {
    _id: Symbol = Symbol();

    isRequired: boolean = false;
    isEditable: boolean = true;

    type: string = '';
    field: string = '';
    label: string = '';
    form: Form | null = null;
}

export class DesignForm extends Form {
    selectedWidget: Widget | null = null;
}

export class DisplayForm extends Form {

}