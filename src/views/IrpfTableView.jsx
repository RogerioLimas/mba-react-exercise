import { useState, useEffect } from 'react';

import IrpfController from '../controllers/IrpfController';

function IrpfTableView() {
    const [controller] = useState(new IrpfController());
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        controller.loadTable((tblObj) => {
            setTableData(tblObj);
        });
    }, [controller]);

    return (
        <table id='unique'>
            <thead>
                <tr>
                    <th>Base de Cálculo (R$ Alíquota (%) Parcela a Deduzir do IR (R$)</th>
                    <th>Alíquota (%)</th>
                    <th>Parcela a Deduzir do IR (R$)</th>
                </tr>
            </thead>
            <tbody id='body'>
                {tableData.map((row) => (
                    <tr key={row.base_salary}>
                        <td>{row.base_salary}</td>
                        <td>{row.aliquota}</td>
                        <td>{row.ir}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default IrpfTableView;
