import { DetailModels } from "@/types/types";
import { Modal } from "antd";
import React from "react";



interface ModalUserProps {
  setopenModal: (open: boolean) => void;
  openModal: boolean;
  detailModals: DetailModels | null; 
}
export default function ModalUser({
  setopenModal,
  openModal,
  detailModals,
}: ModalUserProps) {
  return (
    <div>
      <Modal
        title="User Details"
        open={openModal}
        onCancel={() => setopenModal(false)}
        onOk={() => setopenModal(false)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={detailModals?.avatar}
            alt="detailModals Avatar"
            style={{
              borderRadius: "50%",
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          />
          <div>
            <h4>{detailModals?.first_name} {detailModals?.last_name}</h4>
            <p>{detailModals?.email}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
