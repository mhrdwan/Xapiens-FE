import { Table } from "antd";
import React from "react";

interface DataType {
  key: React.Key;
  id: Number;
  email: String;
  first_name: String;
  last_name: String;
  avatar: String;
}

interface PageProps {
  columns: any;
  data: DataType[];
  pagginaton?: { page: number; total: number; total_pages: number };
  ListUser: (page :number) => void;
}

export default function TableComponent({
  columns,
  data,
  pagginaton,
  ListUser
}: PageProps) {
  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={{
          total: pagginaton?.total,
          current: pagginaton?.page,
          onChange: (page) => ListUser(page),
        }}
      />
    </div>
  );
}
