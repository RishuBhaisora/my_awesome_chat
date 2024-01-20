import { useState,FC ,useEffect,memo} from 'react';


import 'reactjs-popup/dist/index.css';

import Popup from 'reactjs-popup';

type PopupProps={
   title:string;
  onBtnClick:()=>void;
  loading:boolean;
  className?:string;
  
}

const MyPopup:FC<PopupProps> = (props) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);;

  const onConfirm = () =>{
    props.onBtnClick();
    closeModal();}
  
useEffect(() =>{
  if (props.loading) {
      setOpen(true);
   }else{
    setOpen(false);
   }
},[props.loading])

  
  
  return (
    <div>
      <button type="button" className={"text-red-500 "+ props.className} onClick={() => setOpen(o=>!o)}>
        {props.title}
      </button>
      <Popup open={open} closeOnDocumentClick={false} 
        onClose={closeModal}>
        <h1 className="text-2xl font-bold text-green-500 text-center">Confirmation</h1>
        {props.loading?<h1 className="text-xl animate-bounce font-bold text-center ">Loading...</h1>: <div className="modal flex space-x-4 content justify-center items-center p-2 rounded-lg h-32 ">
          <button className="bg-indigo-300 p-3 rounded-md border-2" onClick={onConfirm}>
            { props.loading ? "Loading..." :"confirm"}
          </button>

          <button className="bg-indigo-300 p-3 rounded-md border-2" onClick={closeModal}>
            close
          </button>
      
        </div>}
      </Popup>
    </div>
  );
};

export default memo(MyPopup);