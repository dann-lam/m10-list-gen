// TODO: Import your Header, TaskList, and TaskListItem
let { formatDate } = require('./date');
let { Header, TaskListItem, TaskList } = require('./component');

function createDocument(title, tasks = []) {

  let date = new Date();
  let formatted = formatDate(date);
  let header = new Header(formatted);
  let combinedString = '';
  for(let i = 0; i < tasks.length; i++){
      let taskListItem = new TaskListItem([], tasks[i].text, tasks[i].priority );
      combinedString += taskListItem.render();
  }
 let exportList = new TaskList(combinedString);
  console.log(exportList);
  // taskListItem.render();
  // let date2 = new Header(formatDate);
  //Each time we iterate through the render InnerHTML, we concatenate it to a long ass string.
  // taskList.render(combinedString);

  // TODO: Create new TaskListItems from the provided tasks
  // TODO: Add TaskListItems to a new TaskList
  //renderInnerHTML on each task, and then
  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${header.render()}
        ${exportList.children}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
