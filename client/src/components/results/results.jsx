import React from "react";
import "../results/results.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function Results({
  searchData,
  requesting=false
}) {
  return (
    <div className="trips-result">
      {requesting ? (
        <p>
          ... loading
          </p>
      ) : (
        <ul>
        {
          
          searchData.map((result) => {
            const {
              img,
              location,
              title,
              description,
              star,
              price,
              total} = result; 
            

            // TODO: refactor this to use the trip data
            return (
              
              <li key={result._id}>
                <span>
                  {result.title}
                 </span>
                 <p>
                  {result.location}
                 </p>
                 <p>
                  {result.tripCost}
                 </p>
              </li>
            )
          })
        }
        {console.log("result", searchData)}
        </ul>

      ) } 
      
      </div>





    // <div className="searchResult">
    //   <img src={img} alt="" />
    //   <FavoriteBorderIcon className="searchResult__heart" />

    //   <div className="searchResult__info">
    //     <div className="searchResult__infoTop">
    //       <p>{location}</p>
    //       <h3>{title}</h3>
    //       <p>____</p>
    //       <p>{description}</p>
    //     </div>

    //     <div className="searchResult__infoBottom">
    //       <div className="searchResult__stars">
    //         <StarIcon className="searchResult__star" />
    //         <p>
    //           <strong>{star}</strong>
    //         </p>
    //       </div>
    //       <div className="searchResult__price">
    //         <h2>{price}</h2>
    //         <p>{total}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Results;
