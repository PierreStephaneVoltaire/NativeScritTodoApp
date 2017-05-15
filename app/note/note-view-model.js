"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const dialogs = require("tns-core-modules/ui/dialogs");
var Sqlite = require("nativescript-sqlite");
var frameModule = require("ui/frame");
const note_component_1 = require("../utils/note-component");
const database_1 = require("../utils/database");
class NoteModel extends observable_1.Observable {
    constructor() {
        super();
        //database object
        this.db = new database_1.noteDatabase();
        this.title = null;
        this.tasks = null;
    }
    save() {
        let errMessage = "";
        if (this.title == null || this.title.trim().length <= 0 || this.title == "") {
            errMessage = "title can't be empty";
            dialogs.alert(errMessage).then(() => {
                console.log(errMessage);
            });
        }
        if (this.tasks == null || this.tasks.trim().length <= 0 || this.tasks == "") {
            errMessage = "tasks can't be empty";
        }
        dialogs.alert(errMessage).then(() => {
            console.log(errMessage);
        });
        if (errMessage.match("")) {
            let tempNote = new note_component_1.note();
            tempNote.setTitle(this.title);
            tempNote.setDescrition(this.tasks);
            this.db.insertNote(tempNote);
        }
    }
}
exports.NoteModel = NoteModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLHVEQUF1RDtBQUN2RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsNERBQTJDO0FBQzNDLGdEQUE2QztBQUM3QyxlQUF1QixTQUFRLHVCQUFVO0lBR3JDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixpQkFBaUI7UUFDZixPQUFFLEdBQWMsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFPekMsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQVEsSUFBSSxDQUFDO0lBRmQsQ0FBQztJQUdMLElBQUk7UUFDQSxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7UUFBQSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLFFBQVEsR0FBQyxJQUFJLHFCQUFJLEVBQUUsQ0FBQztZQUN4QixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0QsQ0FBQztDQUVBO0FBakNELDhCQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcbmltcG9ydHtub3RlfWZyb20gJy4uL3V0aWxzL25vdGUtY29tcG9uZW50JztcclxuaW1wb3J0e25vdGVEYXRhYmFzZX1mcm9tICcuLi91dGlscy9kYXRhYmFzZSc7XHJcbmV4cG9ydCBjbGFzcyBOb3RlTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIC8vZGF0YWJhc2Ugb2JqZWN0XHJcbiAgICAgIGRiOm5vdGVEYXRhYmFzZT1uZXcgbm90ZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG50aXRsZTpzdHJpbmc9bnVsbDtcclxudGFza3M6c3RyaW5nPW51bGw7XHJcbnNhdmUoKXtcclxuICAgIGxldCBlcnJNZXNzYWdlOnN0cmluZz1cIlwiO1xyXG5pZih0aGlzLnRpdGxlPT1udWxsfHx0aGlzLnRpdGxlLnRyaW0oKS5sZW5ndGg8PTB8fHRoaXMudGl0bGU9PVwiXCIpe1xyXG4gICAgZXJyTWVzc2FnZT1cInRpdGxlIGNhbid0IGJlIGVtcHR5XCI7XHJcbmRpYWxvZ3MuYWxlcnQoZXJyTWVzc2FnZSkudGhlbigoKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVyck1lc3NhZ2UpO1xyXG4gXHJcbn0pOyBcclxufVxyXG5pZih0aGlzLnRhc2tzPT1udWxsfHx0aGlzLnRhc2tzLnRyaW0oKS5sZW5ndGg8PTB8fHRoaXMudGFza3M9PVwiXCIpe1xyXG4gICAgZXJyTWVzc2FnZT1cInRhc2tzIGNhbid0IGJlIGVtcHR5XCI7fVxyXG5kaWFsb2dzLmFsZXJ0KGVyck1lc3NhZ2UpLnRoZW4oKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJNZXNzYWdlKTtcclxufSk7XHJcbmlmKGVyck1lc3NhZ2UubWF0Y2goXCJcIikpe1xyXG5sZXQgdGVtcE5vdGU9bmV3IG5vdGUoKTtcclxudGVtcE5vdGUuc2V0VGl0bGUodGhpcy50aXRsZSk7XHJcbnRlbXBOb3RlLnNldERlc2NyaXRpb24odGhpcy50YXNrcyk7XHJcbnRoaXMuZGIuaW5zZXJ0Tm90ZSh0ZW1wTm90ZSk7XHJcbn1cclxufVxyXG5cclxufSJdfQ==