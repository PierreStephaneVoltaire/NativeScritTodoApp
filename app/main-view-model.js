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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLCtDQUE0QztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEMsNkVBQXNFO0FBQ3RFLHFCQUE2QixTQUFRLHVCQUFVO0lBSTNDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFKWixpQkFBaUI7UUFDbEIsWUFBTyxHQUF3QixJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUloRCxJQUFJLEVBQUUsR0FBYyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0QsUUFBUTtRQUNKLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUFBLENBQUM7Q0FFTDtBQWxCRCwwQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydHtub3RlRGF0YWJhc2V9ZnJvbSAnLi91dGlscy9kYXRhYmFzZSc7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5pbXBvcnR7bm90ZX1mcm9tICcuL3V0aWxzL25vdGUtY29tcG9uZW50JztcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSdcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICAvL2RhdGFiYXNlIG9iamVjdFxuICAgbXlJdGVtczpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgIGRiOm5vdGVEYXRhYmFzZTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IGRiOm5vdGVEYXRhYmFzZT1uZXcgbm90ZURhdGFiYXNlKCk7XG4gICAgICAgIGRiLmNyZWF0ZVRhYmxlKCk7XG4gICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgZGIucHVzaEFsbE5vdGVzKHRoaXMubXlJdGVtcyk7XG4gICAgfVxuICAgXG5cbiAgICBnb1RvTm90ZSgpIHtcbiAgICAgICAgbGV0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJub3RlL25vdGUtcGFnZVwiKTtcbiAgICB9O1xuXG59Il19