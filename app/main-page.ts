/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/


import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as listViewModule from "tns-core-modules/ui/list-view";
import * as observableArray from "tns-core-modules/data/observable-array";
import * as labelModule from "tns-core-modules/ui/label";
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
     
    page.bindingContext = new HelloWorldModel();
}