import { Observable } from 'data/observable';
import{noteDatabase}from './utils/database';
var frameModule = require("ui/frame");
import{note}from './utils/note-component';
import {ObservableArray} from 'tns-core-modules/data/observable-array'
export class HelloWorldModel extends Observable {
    //database object
   myItems = new ObservableArray();
   db:noteDatabase;
    constructor() {
        super();
        let db:noteDatabase=new noteDatabase();
        db.createTable();
        this.db = db
        db.pushAllNotes(this.myItems)

    }
   

    textSource = "stuff";
    

    goToNote() {
        let topmost = frameModule.topmost();
        topmost.navigate("note/note-page");
    };

}