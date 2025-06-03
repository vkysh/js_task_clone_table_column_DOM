'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');
  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];

  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, lastCell);
});
