import DataTable from 'react-data-table-component';

// Define your custom component
const CustomTitleComponent = ({ row }) => (
  <div>
    <strong>{row.title}</strong> ({row.year})
  </div>
);

const columns = [
  {
    name: 'Custom Title',
    cell: row => <CustomTitleComponent row={row} />,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
];

function MyComponent() {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}

export default MyComponent;
