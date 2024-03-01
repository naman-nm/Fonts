import React, { useState } from 'react';
import img from "../../assest/download.png";
import "./modelwindow.css";
import successIcon from "../../assest/success.png";

const Modelwindow = ({ userId }) => {

  // State for managing modal visibility and email input
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailProvided, setIsEmailProvided] = useState(false);
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const baseUrl = "https://fonts-ne4si849a-devs-projects-75788e8c.vercel.app";
  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to close the modal and reset email input
  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setIsEmailProvided(false);
    setDownloadSuccess(false); // Reset download success state
  };

  // Function to handle font download
  const handleDownload = async (e) => {
    if (!isEmailProvided) {
      // If email is not provided, show an alert or take appropriate action
      alert('Please enter your email.');
      return;
    }
    e.preventDefault();
    let dataSend = {
      email: email,
    };
    await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          setShow(true);
          setEmail("")
          setDownloadSuccess(true); // Set download success state to true
          console.log("Email sent")
        }
      });
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsEmailProvided(enteredEmail.trim() !== '');
  };

  return (
    <div className='main-content'>
      {/* Image triggering modal */}
      <img src={img} alt='' onClick={handleShowModal} />

      {showModal && (
        // Modal structure
        <div
          className="modal fade show"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Modal header */}
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span className="material-symbols-sharp">close</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="modal-title">
                  {/* Modal title and description */}
                  <h5 className="modal-text1" >
                    Download Your Font
                  </h5>
                  <p className="modal-text2">Enter your email address and download our premium font files and elevate your designs today!</p>
                </div>
                {/* Conditional rendering based on download success */}
                {downloadSuccess ? (
                  <div className="success-message">
                    
                    <p className="success-text">Fonts downloaded successfully!</p>
                    <img src={successIcon} alt="Success Icon" />
                  </div>
                ) : (
                  <div className='email-input'>
                    <input
                      className={`email ${isEmailProvided ? 'email-alert' : ''}`}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {isEmailProvided && <div className="alert-dot"></div>}
                  </div>
                )}
                {/* Download button */}
                <div className='download-btn' onClick={handleDownload}>
                  <button
                    type="button"
                    className="btnD"
                  >
                    Download Font
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modelwindow;
