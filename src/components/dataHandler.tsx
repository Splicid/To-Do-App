import React from 'react';

type fromProps = {
  datas: any;
}

const DataHandler: React.FC<fromProps> = ({datas}) => {



  return(
    <>
    <ul>
      <li key={datas.id}>{datas.job}</li>
    </ul>
    </>
  )
}

export default DataHandler