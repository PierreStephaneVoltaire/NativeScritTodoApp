"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const database_1 = require("./utils/database");
var frameModule = require("ui/frame");
const observable_array_1 = require("tns-core-modules/data/observable-array");
class HelloWorldModel extends observable_1.Observable {
    constructor() {
        super();
        //database object
        this.myItems = new observable_array_1.ObservableArray();
        this.textSource = "stuff";
        let db = new database_1.noteDatabase();
        db.createTable();
        this.db = db;
        db.pushAllNotes(this.myItems);
    }
    goToNote() {
        let topmost = frameModule.topmost();
        topmost.navigate("note/note-page");
    }
    ;
}
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLCtDQUE0QztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEMsNkVBQXNFO0FBQ3RFLHFCQUE2QixTQUFRLHVCQUFVO0lBSTNDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFKWixpQkFBaUI7UUFDbEIsWUFBTyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBWS9CLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFSakIsSUFBSSxFQUFFLEdBQWMsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFDdkMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFakMsQ0FBQztJQU1ELFFBQVE7UUFDSixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFBQSxDQUFDO0NBRUw7QUF0QkQsMENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnR7bm90ZURhdGFiYXNlfWZyb20gJy4vdXRpbHMvZGF0YWJhc2UnO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuaW1wb3J0e25vdGV9ZnJvbSAnLi91dGlscy9ub3RlLWNvbXBvbmVudCc7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgLy9kYXRhYmFzZSBvYmplY3RcbiAgIG15SXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICBkYjpub3RlRGF0YWJhc2U7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBkYjpub3RlRGF0YWJhc2U9bmV3IG5vdGVEYXRhYmFzZSgpO1xuICAgICAgICBkYi5jcmVhdGVUYWJsZSgpO1xuICAgICAgICB0aGlzLmRiID0gZGJcbiAgICAgICAgZGIucHVzaEFsbE5vdGVzKHRoaXMubXlJdGVtcylcblxuICAgIH1cbiAgIFxuXG4gICAgdGV4dFNvdXJjZSA9IFwic3R1ZmZcIjtcbiAgICBcblxuICAgIGdvVG9Ob3RlKCkge1xuICAgICAgICBsZXQgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcIm5vdGUvbm90ZS1wYWdlXCIpO1xuICAgIH07XG5cbn0iXX0=