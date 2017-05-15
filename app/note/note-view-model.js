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
            let tempNote = new note_component_1.note(this.title, this.tasks);
            this.db.insertNote(tempNote);
        }
    }
}
exports.NoteModel = NoteModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLHVEQUF1RDtBQUN2RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsNERBQTJDO0FBQzNDLGdEQUE2QztBQUM3QyxlQUF1QixTQUFRLHVCQUFVO0lBR3JDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixpQkFBaUI7UUFDZixPQUFFLEdBQWMsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFPekMsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQVEsSUFBSSxDQUFDO0lBRmQsQ0FBQztJQUdMLElBQUk7UUFDQSxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7UUFBQSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLFFBQVEsR0FBQyxJQUFJLHFCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNELENBQUM7Q0FFQTtBQS9CRCw4QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcclxudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5pbXBvcnR7bm90ZX1mcm9tICcuLi91dGlscy9ub3RlLWNvbXBvbmVudCc7XHJcbmltcG9ydHtub3RlRGF0YWJhc2V9ZnJvbSAnLi4vdXRpbHMvZGF0YWJhc2UnO1xyXG5leHBvcnQgY2xhc3MgTm90ZU1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICAvL2RhdGFiYXNlIG9iamVjdFxyXG4gICAgICBkYjpub3RlRGF0YWJhc2U9bmV3IG5vdGVEYXRhYmFzZSgpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcblxyXG5cclxuICAgIH1cclxudGl0bGU6c3RyaW5nPW51bGw7XHJcbnRhc2tzOnN0cmluZz1udWxsO1xyXG5zYXZlKCl7XHJcbiAgICBsZXQgZXJyTWVzc2FnZTpzdHJpbmc9XCJcIjtcclxuaWYodGhpcy50aXRsZT09bnVsbHx8dGhpcy50aXRsZS50cmltKCkubGVuZ3RoPD0wfHx0aGlzLnRpdGxlPT1cIlwiKXtcclxuICAgIGVyck1lc3NhZ2U9XCJ0aXRsZSBjYW4ndCBiZSBlbXB0eVwiO1xyXG5kaWFsb2dzLmFsZXJ0KGVyck1lc3NhZ2UpLnRoZW4oKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJNZXNzYWdlKTtcclxuIFxyXG59KTsgXHJcbn1cclxuaWYodGhpcy50YXNrcz09bnVsbHx8dGhpcy50YXNrcy50cmltKCkubGVuZ3RoPD0wfHx0aGlzLnRhc2tzPT1cIlwiKXtcclxuICAgIGVyck1lc3NhZ2U9XCJ0YXNrcyBjYW4ndCBiZSBlbXB0eVwiO31cclxuZGlhbG9ncy5hbGVydChlcnJNZXNzYWdlKS50aGVuKCgpPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyTWVzc2FnZSk7XHJcbn0pO1xyXG5pZihlcnJNZXNzYWdlLm1hdGNoKFwiXCIpKXtcclxubGV0IHRlbXBOb3RlPW5ldyBub3RlKHRoaXMudGl0bGUsdGhpcy50YXNrcyk7XHJcbnRoaXMuZGIuaW5zZXJ0Tm90ZSh0ZW1wTm90ZSk7XHJcbn1cclxufVxyXG5cclxufSJdfQ==