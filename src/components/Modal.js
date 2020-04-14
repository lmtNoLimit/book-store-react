import { Modal } from "antd";

const { confirm } = Modal;

export const showConfirm = ({ ...props }) => {
  confirm({ ...props });
};
