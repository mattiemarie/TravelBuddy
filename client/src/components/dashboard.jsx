import React, { useState }from 'react';
import Search from "./search/search"
import Results from "./results/results"
import axios from "axios"


function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchData, setSearchData] = useState([]);
  const [requesting, setRequesting] = useState(false);

    const handleSearchChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    
}
const handleSubmit = () => {
  console.log("handleSubmit");
  setRequesting(true);

  // TODO: update with correct endpoint 
  axios.get('/api/trips')
  .then((response) => {
    // handle success
    console.log(response.data);
    setSearchData(response.data)
  })
  .catch((error) => {
    // handle error
    console.error(error);
  })
  .finally(() => setRequesting(false))
  
}

    return (
    <div style={
      {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
      }
    }>
        
        <Search startDate={startDate} endDate={endDate} requesting={requesting} onSearchChange={handleSearchChange} onSubmit={handleSubmit}/>
  
        <Results requesting={requesting} searchData={searchData}/>
      
    </div>
  );
}

export default Dashboard;