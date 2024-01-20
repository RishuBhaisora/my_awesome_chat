import React ,{FC}from "react"
import Loader from "./Loader"

type NoDataProps ={
  title: string;
  loading:boolean;
}
const NoData:FC<NoDataProps>=(props)=>{
  if (props.loading) {
   return <Loader />
  }
  return (
    <>
      <h1 className="text-2xl font-bold text-red-500">{props.title}</h1>
    </>
  )
}

export default NoData;
