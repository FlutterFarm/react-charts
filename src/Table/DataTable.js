import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useTable, useExpanded } from "react-table";

export function DataTable({ columns: userColumns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded }
  } = useTable(
    {
      columns: userColumns,
      data
    },
    useExpanded // Use the useExpanded plugin hook
  );

  const isOdd = (rowId) => {
    let id = 0;
    const pos = rowId.lastIndexOf(".");
    if (pos === -1) {
      id = parseInt(rowId, 10);
    } else {
      id = parseInt(rowId.substr(pos + 1), 10);
    }
    return (id + 1) % 2 ? true : false;
  };

  return (
    <>
      <Table variant="expanded" colorScheme={"blue"} {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  fontSize={14}
                  m={0}
                  p={"0.5rem"}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                data-expanded={row.depth > 0 ? true : null}
                data-row-odd={isOdd(row.id)}
              >
                {row.cells.map((cell) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      fontSize={14}
                      m={0}
                      p={"0.5rem"}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
    </>
  );
}
