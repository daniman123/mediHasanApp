import * as SQLite from "expo-sqlite";

import { DATABASE_URL } from "../../../constants/databaseConfig.json";

class DBManager {
  db: SQLite.SQLiteDatabase;

  constructor() {
    this.db = SQLite.openDatabase(DATABASE_URL);
  }

  executeQ(query: string, args: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          query,
          args,
          (_, resultSet) => {
            resolve(resultSet);
          },
          (_, error) => {
            console.error(error);
            reject(error);
            return true;
          }
        );
      });
    });
  }
}

// Create an instance of DBManager
const dbManager = new DBManager();

// Export the instance
export default dbManager;
