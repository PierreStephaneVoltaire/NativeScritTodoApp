/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/


import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import {NoteModel } from './note-view-model';
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as labelModule from "tns-core-modules/ui/label";
import * as textFieldModule from "tns-core-modules/ui/text-field";
import * as textViewModule from "tns-core-modules/ui/text-view";
import * as dialogs from "tns-core-modules/ui/dialogs";
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new NoteModel();
} 