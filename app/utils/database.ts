var Sqlite = require("nativescript-sqlite");
import { note } from './note-component';
export class noteDatabase {

    constructor() {

    }
    db_promise = new Sqlite("MyTasks.db", function (err, db) {
        if (err) {
            //if it fails, give up
            console.error("create", err);
            this.DB = null;
        } else {
            console.log("DB created");
        }
    });


    createTable() {
        this.db_promise.then(function (db) {

            if (db.isOpen()) {
                db.execSQL("CREATE TABLE IF NOT EXISTS task (title TEXT,description TEXT)", function (err, success) {
                    console.log("table created:", success);
                }
                );
            }
        }, function (err) {
            console.error("We failed to open database", err);
        });


    }

    insertNote(tempNote: note) {

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



    pushAllNotes(items):void {
        this.db_promise.then(function (db) {
            return db.each('select * from task',
                function (err, row) {
                    console.log("Row results it:", row); // Prints ["Row x Field_1", "Row x Field 2"...] for each row passed to it
                    let temp = new note(row[0],row[1]);
                    console.log(row[0]+"   "+row[1])
                    items.push(temp);
                },
                function (err, count) {
                    console.log("Rows displayed:", count); // Prints 100  (Assuming their are a 100 rows found)
                });
        }, function (err) {

            console.error("We failed to open database", err);

        });
    }

}