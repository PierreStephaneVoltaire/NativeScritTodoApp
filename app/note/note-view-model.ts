import { Observable } from 'data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
var Sqlite = require("nativescript-sqlite");
var frameModule = require("ui/frame");
import{note}from '../utils/note-component';
import{noteDatabase}from '../utils/database';
export class NoteModel extends Observable {
    //database object
      db:noteDatabase=new noteDatabase();
    constructor() {
        super();



    }
title:string=null;
tasks:string=null;
save(){
    let errMessage:string="";
if(this.title==null||this.title.trim().length<=0||this.title==""){
    errMessage="title can't be empty";
dialogs.alert(errMessage).then(()=> {
    console.log(errMessage);
 
}); 
}
if(this.tasks==null||this.tasks.trim().length<=0||this.tasks==""){
    errMessage="tasks can't be empty";}
dialogs.alert(errMessage).then(()=> {
    console.log(errMessage);
});
if(errMessage.match("")){
let tempNote=new note(this.title,this.tasks);
this.db.insertNote(tempNote);
}
}

}