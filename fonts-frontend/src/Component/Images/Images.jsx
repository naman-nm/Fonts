import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import './Pagination.css'


export default function Images(props){

    // Props and states initialization
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
   
    // Effect to update currentItems and pageCount when data, itemOffset, or itemsPerPage change
    useEffect(() =>{
        const endOffset = itemOffset + itemsPerPage;
        
        // Update the currentItems and pageCount based on the current data, itemOffset, and itemsPerPage
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    },  [itemOffset, itemsPerPage, data]);

    // Handle page click event
    const handlePageClick = (event) => {
        // Calculate the new itemOffset based on the selected page
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);  
    };

    return (
        <>
            {/* Display the images */}
            <div className="images">
                {currentItems.map(image =>{
                    return(
                        // Added key for each image 
                        <div className="image">
                            <img src={image.url} alt={ image.title }/>

                        </div>
                    );
                })}

            </div>
            
            {/* Pagination Component */}
            <ReactPaginate
                breakLabel="..." 
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
         </>
    );
   }

