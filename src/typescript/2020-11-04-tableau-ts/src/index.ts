import 'regenerator-runtime/runtime'
import './static/tableau-sdk.js'
import { User, userFactory } from './user-factory';

const $ = document.querySelector.bind(document);
const myConnector = tableau.makeConnector()
myConnector.getSchema = (schemaCallback) => {

  const cols = [
    { id: "id", alias: "id", dataType: tableau.dataTypeEnum.string },
    { id: "firstName", alias: "firstName", dataType: tableau.dataTypeEnum.string },
    { id: "lastName", alias: "lastName", dataType: tableau.dataTypeEnum.string },
    { id: "email", alias: "email", dataType: tableau.dataTypeEnum.string },
    { id: "dob", alias: "dob", dataType: tableau.dataTypeEnum.string },
    { id: "createdOn", alias: "createdOn", dataType: tableau.dataTypeEnum.string },
  ]

  const tableSchema = {
    id: "users",
    alias: "users",
    columns: cols
  }

  console.log('tableau: ', tableau)

  schemaCallback([tableSchema])
}

myConnector.getData = (table, doneCallback) => {
  console.log('table.tableInfo: ', table.tableInfo);

  table.appendRows<User>(userFactory(1_000))

  // for (let i = 0; i < 100; i++) {
  //   table.appendRows<User>([{ id: v4(), email: faker.internet.email() }])
  // }
  doneCallback()
};

tableau.registerConnector(myConnector);

document.addEventListener("DOMContentLoaded", () => {
  $('#submitButton').addEventListener('click', () => {
    $('#title').innerHTML = 'this button does nothing'
    tableau.connectionName = "UlSGS Earthquake Feed";
    tableau.submit();
  })
})