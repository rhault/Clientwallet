import {Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const TableComp = () => {
    const RowData = (ProductName, quantityMonth, quantityTotal) => {
        return {ProductName, quantityMonth, quantityTotal}
    }

    const rows = [
        RowData('Teste', 2, 8)
    ]

    return(
        <TableContainer component={Card} sx={{my: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Produto</TableCell>
                        <TableCell align="center">Qtd Mes</TableCell>
                        <TableCell align="center">Qtd Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.ProductName}</TableCell>
                            <TableCell align="center">{row.quantityMonth}</TableCell>
                            <TableCell align="center">{row.quantityTotal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp