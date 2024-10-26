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
}

export default function Page({ columns, data }: PageProps) {
  return (
    <div>
      {/* <Table<DataType> columns={columns} dataSource={data} /> */}
    </div>
  );
}
