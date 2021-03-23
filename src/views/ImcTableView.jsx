import { useState, useEffect } from 'react';

import ImcController from '../controllers/ImcController';

function ImcTableView() {

  const [controller,] = useState(new ImcController());
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    controller.loadTable((tblObj) => {
        setTableData(tblObj);
    });
  }, [controller]);
  
  return (<table id="unique"><tbody id="body">
      {  Object.keys(tableData)
        .sort()
        .map((k) =>
          <tr key={k}>
            <td> {k} </td>
            <td> {tableData[k]} </td>
          </tr>
        )
      }
    </tbody></table>);
}

export default ImcTableView;
