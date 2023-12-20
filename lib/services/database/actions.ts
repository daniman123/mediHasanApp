import dbManager from "./databaseManager";

export const createTable = () => {
  dbManager
    .executeQ(
      "CREATE TABLE IF NOT EXISTS meditations (id INTEGER PRIMARY KEY AUTOINCREMENT, duration INT, endDateTime TEXT);"
    )
    .then(() => {
      // console.log("Table Exists!");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getAllTableData = (setData: any) => {
  dbManager
    .executeQ("SELECT * FROM meditations")
    .then((resultSet) => {
      // TODO
      setData(resultSet.rows._array)
      // console.log(resultSet.rows._array);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const insertToTable = (initialSeconds: number) => {
  const currentDateTime = new Date().toISOString();

  dbManager
    .executeQ(`INSERT INTO meditations (duration, endDateTime) VALUES (?, ?);`, [
      initialSeconds,
      currentDateTime,
    ])
    .then((resultSet) => {
      // console.log(resultSet);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteMeditationById = (id: number) => {
  dbManager
    .executeQ("DELETE FROM meditations WHERE id = ?", [id])
    .then(() => {
      console.log(`Data with id ${id} deleted from meditations table.`);
    })
    .catch((error) => {
      console.error("Error deleting data: ", error);
    });
};

export const deleteAllMeditations = () => {
  dbManager
    .executeQ("DELETE FROM meditations")
    .then(() => {
      console.log("All data deleted from meditations table.");
    })
    .catch((error) => {
      console.error("Error deleting data: ", error);
    });
};
