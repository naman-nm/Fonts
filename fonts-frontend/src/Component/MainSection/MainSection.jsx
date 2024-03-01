import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import "./Hover.css";
import "./FontFamilyStyle.css";
import "./MainSection.css";
import { userNames } from "../../data";
import Modelwindow from "./modelwindow";

export const Mainstyle = () => {
  // Initialize data and items per page
  const data = userNames;
  const itemsPerPage = 12;

  const [categoryFontFamily, setCategoryFontFamily] = useState("");
  const [category, setCategory] = useState(["AllType"]);
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState(["AllType"]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset,setItemOffset] = useState(0);
  const [viewType, setViewType] = useState("list"); // "list" or "grid"
  const location = useLocation();
  

  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    let currentData;
  
    // Filter data based on selected category and personality
    if (!category.includes("AllType")) {
      currentData = data.filter(
        (userData) =>
        (category.includes(userData.category.toLowerCase().replace(" ", "_")) || category.length === 0) &&
        (personality.includes(userData.personality.toLowerCase()) || personality.length === 0)
      );
    } else {
      currentData = [...data];
    }
  
    // Filter data based on the search name
    const filterData = currentData.filter((userData) =>
      userData.name.toLowerCase().includes(name.toLowerCase())
    );
  
    // Setting the current items to be displayed and calculating pageCount
    setCurrentItems(filterData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, category, personality, name, location.search]);
  

  // Handle page changes
  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    const query = new URLSearchParams(location.search);
    query.set("page", newPage);
    
    // Use JavaScript's window.location to update the URL
    window.history.pushState({}, "", `?${query.toString()}`);
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);  
  };

  // Handle category filter changes
  // Handle category filter changes
  // Handle category filter changes
 const handleClickCategory = (e) => {
   const { id, checked } = e.target;

   if (id === "AllType") {
     // If "AllType" is clicked, toggle all other categories
     setCategory(checked ? ["AllType"] : []);
     setPersonality([]);
   } else {
     // Toggle the clicked category without affecting others
     setCategory((prevCategories) => {
       if (checked) {
         // If any category other than "AllType" is clicked, remove "AllType" from categories
         return prevCategories.filter(category => category !== "AllType").concat(id);
       } else {
         return prevCategories.filter((category) => category !== id);
       }
     });
     // If "AllType" is already checked, uncheck it
     if (category.includes("AllType")) {
       setCategory([]);
     }
   }
 };

// Handle personality filter changes
 const handleClickPersonality = (e) => {
   const { id, checked } = e.target;

   if (id === "AllType") {
     // If "AllType" is clicked, toggle all other personalities
     setPersonality(checked ? ["AllType"] : []);
     setCategory([]);
   } else {
     // Toggle the clicked personality without affecting others
     setPersonality((prevPersonalities) => {
       if (checked) {
         // If any personality other than "AllType" is clicked, remove "AllType" from personalities
         return prevPersonalities.filter(personality => personality !== "AllType").concat(id);
       } else {
         return prevPersonalities.filter((personality) => personality !== id);
       }
     });
    // If "AllType" is already checked, uncheck it
     if (category.includes("AllType")) {
       setCategory([]);
     }
   }
 };



  //search input
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setName(searchQuery);
  
    const query = new URLSearchParams(location.search);
    query.set("page", 1); 
    query.set("search", searchQuery);
    window.history.pushState({}, "", `?${query.toString()}`);
  
    setItemOffset(0);
  };

  // Toggle View
  const toggleView = (view) => {
    setViewType(view);
  };

  // Media query handling
  const media = () => {
    const filter = matchMedia("(max-width: 1300px)");

    if (filter.matches) {
      document
        .getElementById("filter_categories")
        .setAttribute("class", "col-md-12 my-class-c3");
      document
        .getElementById("font_style")
        .setAttribute("class", "col-md-12 my-class-c9");
    } else {
      document
        .getElementById("filter_categories")
        .setAttribute("class", "col-md-3 my-class-c3");
      document
        .getElementById("font_style")
        .setAttribute("class", "col-md-9 my-class-c9");
    }
  };

  window.addEventListener("load", media);
  window.addEventListener("resize", media);

  const handleFontFamilyChange = (fontFamily) => {
    setCategoryFontFamily(fontFamily);
  };
  
  return (
    <>
      {/* Main section */}
      <section
        className="section-1"
        style={{ borderTop: "2px solid rgba(112, 112, 112, 0.40)" }}
      >
        <div className="container z">
          <div className="row main-display">

            {/* Filter Categories Section */}
            <div id="filter_categories" className="col-md-3 my-className-c3">
              <div className="Categories mt-10">
                {/* Category checkboxes */}
                <div>
                  <div className="category-text-name" style={{height: '72px',width:"200px" }}>
                    <h2 className="category-1" style={{ marginBottom: "32px", fontFamily: categoryFontFamily }}>
                      Categories
                   </h2>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="AllType"
                      checked={category.includes("AllType")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      All Type Faces
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="cursive"
                      checked={category.includes("cursive")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Cursive
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="display"
                      checked={category.includes("display")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Display
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="monospace"
                      checked={category.includes("monospace")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Monospace
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="sans_serif"
                      checked={category.includes("sans_serif")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Sans Serif
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="serif"
                      checked={category.includes("serif")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Serif
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "72px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="slab"
                      checked={category.includes("slab")}
                      onChange={(e) => handleClickCategory(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Slab
                    </label>
                  </div>
                </div>

                {/* Personality */}
                <div>
                  <div className="Personality">
                    <div className="personality-text" style={{height: '72px'}}> 
                      <h2 className="Personality-1" style={{ marginBottom: "32px" }} >
                       Personality
                     </h2>
                    </div>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="informal"
                      checked={personality.includes("informal")} 
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Informal
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="modern"
                      checked={personality.includes("modern")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Modern
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="corporate"
                      checked={personality.includes("corporate")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Corporate
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="classic"
                      checked={personality.includes("classic")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Classic
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="futuristic"
                      checked={personality.includes("futuristic")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Futuristic
                    </label>
                  </div>
                  <div className="form-check" style={{ marginBottom: "22px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="luxurious"
                      checked={personality.includes("luxurious")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Luxurious
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="serious"
                      checked={personality.includes("serious")}
                      onChange={(e) => handleClickPersonality(e)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Serious
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Font Style Section */}
            
            <div id="font_style" className="col-md-9 my-className-c9">
              
              <div className="row text-left C" style={{ marginBottom: "55px" }}>

                {/* Search Inputs */}
                <div className="col-sm-6 font-style-heading-col1">
                  <div>
                    <form
                      className="form-inline"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      {/* View Toggle buttons */}
                      <div>
                        <div className="form-group has-search">
                          <span className="fa fa-search form-control-search"></span>
                          <input
                            type="text"
                            className="form-control form-control-input-search"
                            placeholder="Search"
                            onChange={(e) => handleSearch(e)}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-sm-6 font-style-heading-col2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "row",
                    }}
                  >
                    <button
                      type="button"
                      
                      className={`menu1 ${viewType === "list" ? "active" : ""}`}
                      style={{ marginRight: "5px" }}
                      onClick={() => toggleView("list")}
                    >
                      <span className={`material-symbols-outlined ${viewType === "list" ? "active-icon" : ""}`}>menu</span>
                    </button>
                     
                    <button
                      type="button"
                      className={`menu2 ${viewType === "grid" ? "active" : ""}`}
                      onClick={() => toggleView("grid")}
                    >
                      <span className={`material-symbols-outlined ${viewType === "grid" ? "active-icon" : ""}`}>grid_view</span>
                    </button>
                  </div>
                </div>
              </div>
              

              {/* Displaying current items */}
              <div>
              {currentItems.length === 0 ? (
                <h4>No fonts are available for the selected categories or personality.</h4>
              ) :
                 viewType === "list" ? (
                  /* List view items */
                  <div className="list-view">
                    {currentItems.map((user) => (
                      <div
                        id={user.cssId}
                        className="row text-left font-style-section-hover"
                        onMouseEnter={() => handleFontFamilyChange(user.cssId)} // Call handleFontFamilyChange on hover
                        onClick={() => handleFontFamilyChange(user.cssId)}
                      >
                        <div className="col-sm-6">
                          <div>
                            <div
                              className="font-content"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "12px",
                              }}
                            >
                              <h1 className="main-section-row alex-animation">
                                {user.name}
                              </h1>
                              <h1
                                className={`column-family-${user.cssId} font-style-family-name`}
                              >
                                {user.name}
                              </h1>
                              <h1 className="main-section-row">Style: 1</h1>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 font-style-section-column">
                          <div>
                            <div
                              className="font-content1"
                              
                            >
                              <span
                                className="display d-main"
                              >
                                <h1 className="main-section-row">
                                  Category: {user.category}
                                </h1>
                                <h1 className="main-section-row">
                                  Personality: {user.personality}
                                </h1>
                              </span>
                              <span className="download-img d-flex justify-content-center align-items-center">
                                <h1 className="main-section-row">
                                  Licence: SIL Open Font License, Version 1.1
                                  
                                </h1>
                                <div className="model-hover"><Modelwindow userId={user.cssId} /></div>
                              </span>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                 <div className="grid-view">
                   <div className="row">
                     {currentItems.map((user) => (
                       /* Grid view items */
                       <div className="col-md-4 font-style-section-hover1">
                         <div id={user.cssId} className="grid-item " onMouseEnter={() => handleFontFamilyChange(user.cssId)} // Call handleFontFamilyChange on hover
                          onClick={() => handleFontFamilyChange(user.cssId)} style={{
                          borderRadius: "8px",
                          border: "1px solid rgba(112, 112, 112, 0.30)",
                          marginBottom: "26px",
                        }}>
                          
                           <div className="font-gridcontent">
                             <h1 className={`column-family-${user.cssId} font-style-family-name1`}>{user.name}</h1>
                           </div>
                           <div className="font-gridcontent1">
                             <h1 className="main-section-row alex-animation">{user.name}</h1>
                             <h1 className="main-section-row">Style: 1</h1>
                             <h1 className="main-section-row">Category: {user.category}</h1>
                             <h1 className="main-section-row">Personality: {user.personality}</h1>
                             <div className="download-img d-flex justify-content-evenly align-items-center">
                               <h1 className="main-section-row">Licence: SIL Open Font License, Version 1.1</h1>
                               <Modelwindow userId={user.cssId} />
                             </div>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
                )}
                
                {/* Pagination component */}

                {pageCount > 1 && (
                 <ReactPaginate
                   breakLabel="..."
                   nextLabel="Next >"
                   onPageChange={handlePageClick}
                   pageCount={pageCount}
                   previousLabel="< Previous"
                   renderOnZeroPageCount={null}
                   containerClassName="pagination"
                   pageLinkClassName="page-num"
                   previousLinkClassName="page-num"
                   nextLinkClassName="page-num"
                   activeLinkClassName="active"
                 />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
