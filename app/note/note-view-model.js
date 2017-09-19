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
            dialogs.alert(errMessage).then(() => {
                console.log(errMessage);
            });
        }
        if (errMessage.match("")) {
            let tempNote = new note_component_1.note(this.title, this.tasks);
            this.db.insertNote(tempNote);
            let topmost = frameModule.topmost();
            topmost.goBack();
        }
    }
}
exports.NoteModel = NoteModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLHVEQUF1RDtBQUN2RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsNERBQTJDO0FBQzNDLGdEQUE2QztBQUM3QyxlQUF1QixTQUFRLHVCQUFVO0lBR3JDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixpQkFBaUI7UUFDZixPQUFFLEdBQWMsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFPekMsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQVEsSUFBSSxDQUFDO0lBRmQsQ0FBQztJQUdMLElBQUk7UUFDQSxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM5RCxVQUFVLEdBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQ0osRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxRQUFRLEdBQUMsSUFBSSxxQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNELENBQUM7Q0FFQTtBQWpDRCw4QkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuaW1wb3J0e25vdGV9ZnJvbSAnLi4vdXRpbHMvbm90ZS1jb21wb25lbnQnO1xuaW1wb3J0e25vdGVEYXRhYmFzZX1mcm9tICcuLi91dGlscy9kYXRhYmFzZSc7XG5leHBvcnQgY2xhc3MgTm90ZU1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgLy9kYXRhYmFzZSBvYmplY3RcbiAgICAgIGRiOm5vdGVEYXRhYmFzZT1uZXcgbm90ZURhdGFiYXNlKCk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cblxuXG4gICAgfVxudGl0bGU6c3RyaW5nPW51bGw7XG50YXNrczpzdHJpbmc9bnVsbDtcbnNhdmUoKXtcbiAgICBsZXQgZXJyTWVzc2FnZTpzdHJpbmc9XCJcIjtcbmlmKHRoaXMudGl0bGU9PW51bGx8fHRoaXMudGl0bGUudHJpbSgpLmxlbmd0aDw9MHx8dGhpcy50aXRsZT09XCJcIil7XG4gICAgZXJyTWVzc2FnZT1cInRpdGxlIGNhbid0IGJlIGVtcHR5XCI7XG5kaWFsb2dzLmFsZXJ0KGVyck1lc3NhZ2UpLnRoZW4oKCk9PiB7XG4gICAgY29uc29sZS5sb2coZXJyTWVzc2FnZSk7XG4gXG59KTsgXG59XG5pZih0aGlzLnRhc2tzPT1udWxsfHx0aGlzLnRhc2tzLnRyaW0oKS5sZW5ndGg8PTB8fHRoaXMudGFza3M9PVwiXCIpe1xuICAgIGVyck1lc3NhZ2U9XCJ0YXNrcyBjYW4ndCBiZSBlbXB0eVwiO1xuZGlhbG9ncy5hbGVydChlcnJNZXNzYWdlKS50aGVuKCgpPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyck1lc3NhZ2UpO1xufSk7fVxuaWYoZXJyTWVzc2FnZS5tYXRjaChcIlwiKSl7XG5sZXQgdGVtcE5vdGU9bmV3IG5vdGUodGhpcy50aXRsZSx0aGlzLnRhc2tzKTtcbnRoaXMuZGIuaW5zZXJ0Tm90ZSh0ZW1wTm90ZSk7XG5sZXQgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbnRvcG1vc3QuZ29CYWNrKCk7XG59XG59XG5cbn0iXX0=