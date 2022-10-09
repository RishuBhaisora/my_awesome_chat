import React, { memo } from "react";
import "./Modal-Page.scss";
interface props {}
const ModalPage = memo((props: props) => {
  return (
    <div className="bg-slate-500 h-20 w-screen box text-black absolute bottom-0">
      THIS IS BASIC MODEL
    </div>
  );
});

export default ModalPage;
