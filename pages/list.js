import { activityList } from "./api/activityList";
import DataTable from "react-data-table-component";
import NavBar from "@components/layout/NavBar";

export default function List() {
  const columns = [
    {
      name: "Activity",
      cell: row => (
        <div>
        {row.activityName}</div>
      ),
      selector: "activityName",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Next Turn",
      selector: "selectedNextTurn.name",
      sortable: true,
      maxWidth: "150px"
    },
    {
      name: "Preferred Contact",
      selector: "selectedNextTurn.contact",
      sortable: false,
      maxWidth: "150px"
    },
    {
      name: "Date",
      selector: "nextTurnDate",
      sortable: true,
      maxWidth: "125px"
    },
    {
      name: "Time",
      selector: "nextTurnTime",
      sortable: true,
      maxWidth: "50px",
    },
    {
      name: "Turn Takers",
      cell: row => {
        const turns = [];
        row.otherTurnTakers.length &&
          row.otherTurnTakers.map(item => {
            turns.push(item.name);
          });
        return turns.join(", and ");
      },
      sortable: true
    }
  ];

  return (
    <div>
      <NavBar></NavBar>
      <DataTable
        title="Activity List"
        columns={columns}
        data={activityList}
        // selectableRows
        // selectableRowsComponent={Checkbox}
        // selectableRowsComponentProps={{ inkDisabled: true }}
        // sortIcon={<FontIcon>arrow_downward</FontIcon>}
        // onSelectedRowsChange={handleChange}
      />
    </div>
  );
}
