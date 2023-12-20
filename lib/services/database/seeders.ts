import dbManager from "./databaseManager";

dbManager
  .executeQ("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
  .then((resultSet) => {
    for (let i = 0; i < resultSet.rows.length; i++) {
      console.log(resultSet.rows.item(i).name);
    }
  })
  .catch((error) => {
    console.error("Error listing tables: ", error);
  });
