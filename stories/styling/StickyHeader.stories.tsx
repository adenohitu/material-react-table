import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_ColumnDef,
} from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Styling/Sticky Header Examples',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;

const columns: MRT_ColumnDef<typeof data[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
  },
];

const data = [...Array(100)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.number(),
}));

export const StickyHeaderDisabledDefault: Story<
  MaterialReactTableProps
> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
  />
);

export const EnableStickyHeader: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    enableStickyHeader
  />
);

export const StickyHeaderShorterTable: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableStickyHeader
    enableRowSelection
    enablePinning
    initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    muiTableContainerProps={{ sx: { maxHeight: 400 } }}
  />
);

const columnsWithFooters: MRT_ColumnDef<typeof data[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
    footer: 'First Name',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    footer: 'Last Name',
  },
  {
    header: 'Address',
    accessorKey: 'address',
    footer: 'Address',
  },
  {
    header: 'State',
    accessorKey: 'state',
    footer: 'State',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
    footer: 'Phone Number',
  },
];

export const disableStickyFooter: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columnsWithFooters}
    data={data}
    initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    muiTableContainerProps={{ sx: { maxHeight: 400 } }}
    enableStickyHeader
    enableStickyFooter={false}
    enableRowNumbers
  />
);

export const enableStickyFooter: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columnsWithFooters}
    data={data}
    initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    muiTableContainerProps={{ sx: { maxHeight: 400 } }}
    enableStickyHeader
    enableStickyFooter
    enableRowNumbers
  />
);
