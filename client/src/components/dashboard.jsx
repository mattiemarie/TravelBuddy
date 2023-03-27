import React, { useState } from 'react';
import Search from "./search/search";
import Results from "./results/results";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';

function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchData, setSearchData] = useState([]);
  const [requesting, setRequesting] = useState(false);

  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const tokenHandler = (token) => {
    handleToken(100, token);
  };

  const handleSearchChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    setRequesting(true);

    // TODO: update with correct endpoint 
    axios.get('/api/trips')
      .then((response) => {
        // handle success
        console.log(response.data);
        setSearchData(response.data);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      })
      .finally(() => setRequesting(false));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}>
      <Search
        startDate={startDate}
        endDate={endDate}
        requesting={requesting}
        onSearchChange={handleSearchChange}
        onSubmit={handleSubmit}
      />
      <Results requesting={requesting} searchData={searchData} />
      <StripeCheckout
        stripeKey=" pk_test_51MoEUBCz1yPpO1ySXVz3gVGj2k74rjulGiAvufURKF7mSAfOktoAbRyxJZkO3J5PAZplE1yOW4Cy2dFPucPtUcD200QWpikMJH"
        token={tokenHandler}
      />
    </div>
  );
}

export default Dashboard;
