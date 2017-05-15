"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sqlite = require("nativescript-sqlite");
const note_component_1 = require("./note-component");
class noteDatabase {
    constructor() {
        this.db_promise = new Sqlite("MyTasks.db", function (err, db) {
            if (err) {
                //if it fails, give up
                console.error("create", err);
                this.DB = null;
            }
            else {
                console.log("DB created");
            }
        });
    }
    createTable() {
        this.db_promise.then(function (db) {
            if (db.isOpen()) {
                db.execSQL("CREATE TABLE IF NOT EXISTS task (title TEXT,description TEXT)", function (err, success) {
                    console.log("table created:", success);
                });
            }
        }, function (err) {
            console.error("We failed to open database", err);
        });
    }
    insertNote(tempNote) {
        this.db_promise.then(function (db) {
            if (Sqlite.exists("MyTasks.db")) {
                db.execSQL("insert into task (title,description) values (?,?)", [tempNote.getTitle(), tempNote.getDescrition()], function (err, id) {
                    console.log("The new record id is:", id);
                });
            }
        }, function (err) {
            console.error("We failed to open database", err);
        });
    }
    pushAllNotes(items) {
        this.db_promise.then(function (db) {
            return db.each('select * from task', function (err, row) {
                console.log("Row results it:", row); // Prints ["Row x Field_1", "Row x Field 2"...] for each row passed to it
                let temp = new note_component_1.note();
                temp.setTitle(row[0]);
                temp.setDescrition(row[1]);
                console.log(temp.getDescrition());
                items.push(temp);
            }, function (err, count) {
                console.log("Rows displayed:", count); // Prints 100  (Assuming their are a 100 rows found)
            });
        }, function (err) {
            console.error("We failed to open database", err);
        });
    }
}
exports.noteDatabase = noteDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzVDLHFEQUF3QztBQUN4QztJQUVJO1FBR0EsZUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sc0JBQXNCO2dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBVEgsQ0FBQztJQVlELFdBQVc7UUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFFN0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDZCxFQUFFLENBQUMsT0FBTyxDQUFDLCtEQUErRCxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87b0JBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FDQSxDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFVLEdBQUc7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBSVAsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFjO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtREFBbUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFO29CQUM5SCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBVSxHQUFHO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFJRCxZQUFZLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFDL0IsVUFBVSxHQUFHLEVBQUUsR0FBRztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMseUVBQXlFO2dCQUM5RyxJQUFJLElBQUksR0FBRyxJQUFJLHFCQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQ0QsVUFBVSxHQUFHLEVBQUUsS0FBSztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtZQUMvRixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBRSxVQUFVLEdBQUc7WUFFWixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBckVELG9DQXFFQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcclxuaW1wb3J0IHsgbm90ZSB9IGZyb20gJy4vbm90ZS1jb21wb25lbnQnO1xyXG5leHBvcnQgY2xhc3Mgbm90ZURhdGFiYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBkYl9wcm9taXNlID0gbmV3IFNxbGl0ZShcIk15VGFza3MuZGJcIiwgZnVuY3Rpb24gKGVyciwgZGIpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vaWYgaXQgZmFpbHMsIGdpdmUgdXBcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNyZWF0ZVwiLCBlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLkRCID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRCIGNyZWF0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNyZWF0ZVRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGJfcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRiLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdGFzayAodGl0bGUgVEVYVCxkZXNjcmlwdGlvbiBURVhUKVwiLCBmdW5jdGlvbiAoZXJyLCBzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsZSBjcmVhdGVkOlwiLCBzdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXZSBmYWlsZWQgdG8gb3BlbiBkYXRhYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluc2VydE5vdGUodGVtcE5vdGU6IG5vdGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kYl9wcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XHJcbiAgICAgICAgICAgIGlmIChTcWxpdGUuZXhpc3RzKFwiTXlUYXNrcy5kYlwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGIuZXhlY1NRTChcImluc2VydCBpbnRvIHRhc2sgKHRpdGxlLGRlc2NyaXB0aW9uKSB2YWx1ZXMgKD8sPylcIiwgW3RlbXBOb3RlLmdldFRpdGxlKCksIHRlbXBOb3RlLmdldERlc2NyaXRpb24oKV0sIGZ1bmN0aW9uIChlcnIsIGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgbmV3IHJlY29yZCBpZCBpczpcIiwgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXZSBmYWlsZWQgdG8gb3BlbiBkYXRhYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVzaEFsbE5vdGVzKGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5kYl9wcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYi5lYWNoKCdzZWxlY3QgKiBmcm9tIHRhc2snLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb3cgcmVzdWx0cyBpdDpcIiwgcm93KTsgLy8gUHJpbnRzIFtcIlJvdyB4IEZpZWxkXzFcIiwgXCJSb3cgeCBGaWVsZCAyXCIuLi5dIGZvciBlYWNoIHJvdyBwYXNzZWQgdG8gaXRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IG5ldyBub3RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5zZXRUaXRsZShyb3dbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAuc2V0RGVzY3JpdGlvbihyb3dbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXAuZ2V0RGVzY3JpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb3dzIGRpc3BsYXllZDpcIiwgY291bnQpOyAvLyBQcmludHMgMTAwICAoQXNzdW1pbmcgdGhlaXIgYXJlIGEgMTAwIHJvd3MgZm91bmQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiV2UgZmFpbGVkIHRvIG9wZW4gZGF0YWJhc2VcIiwgZXJyKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19