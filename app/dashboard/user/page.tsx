"use client";
import { api } from "@/api/api";
import ModalUser from "@/components/ModalUser";
import TableComponent from "@/components/TableUser";
import { DetailModels } from "@/types/types";
import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";


function page() {
  const [data, setData] = useState([]);
  const [pagginaton, setpagginaton] = useState({
    page: 1,
    total: 0,
    total_pages: 0,
  });
  const [openModal, setopenModal] = useState<boolean>(false);
  const [detailModals, setDetailModals] = useState<DetailModels | null>(null);
  const columns = [
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Nama", dataIndex: "first_name", key: "first_name" },
    {
      title: "Gambar",
      dataIndex: "avatar",
      key: "avatar",
      render: (data: string) => {
        return (
          <Image
            src={data}
            alt="User Avatar"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
        );
      },
    },
    {
      title: "Detail",
      render: (data: DetailModels) => {
        return (
          <Button
            onClick={() => {
              console.log(data);
              setDetailModals(data);
              setopenModal(true);
            }}
            style={{ backgroundColor: "#111827", color: "white" }}
          >
            Detail
          </Button>
        );
      },
      key: "age",
    },
  ];

  async function ListUser(page: number) {
    try {
      const data = await api.listUser({ page: page });
      console.log(data);
      setData(data?.data);
      setpagginaton({
        page: data?.page,
        total: data?.total || 0,
        total_pages: data?.total_pages || 0,
      });
    } catch (error) {}
  }
  useEffect(() => {
    ListUser(pagginaton.page);
  }, [pagginaton.page]);

  return (
    <div>
      <label className="text-black font-bold text-[20px]">List User</label>
      <hr style={{ marginBottom: 50 }} />
      <TableComponent
        columns={columns}
        data={data}
        pagginaton={pagginaton}
        ListUser={ListUser}
      />
      <ModalUser setopenModal={setopenModal} openModal={openModal} detailModals={detailModals}/>
    </div>
  );
}

export default page;
