import React, { useState, forwardRef, useEffect } from "react";

// Custom components
// import { SupportForm } from "components";
// import TermsOfUse from "../components/TermsOfUse/TermsOfUse";
// import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
// import UpdateProfileModal from "pages/dashboard/UpdateProfile/updateProfileModal";
// import UpdatePasswordForm from "./UpdatePasswordForm";
// import ManageMenu from "./DropDownMenus/ManageMenu";
// import HelpText from "pages/dashboard/Help/HelpText";
// import HelpTrainingIntro from "pages/dashboard/Help/HelpTrainingIntro";
// import HelpVideoHtml from "pages/dashboard/Help/HelpVideoHtml";
// import HelpVideo1 from "pages/dashboard/Help/HelpVideo1";
// import QuickHelp from "./DropDownMenus/QuickHelp";
// import ToDoListMenu from "./DropDownMenus/ToDoListMenu";
import { useTranslation } from "react-i18next";
import CustomNavBarPresentation from "./CustomNavBarPresentation";

// styles
import "./styles.scss";

// api
// import { useGetManageOptionsQuery } from "./DropDownMenus/endpoints";
// import { BASE_URL } from "network/api";
// import { getCookieItem } from "hooks/useCookie";
// import axios from "axios";
// import { API_URLS } from "network/apiUrls";

const logoStyles = {
  verticalAlign: "-webkit-baseline-middle",
  maxHeight: "30px",
  marginTop: "3px",
  cursor: "pointer",
  maxWidth: "100%",
};

const CustomNavBar = () => {
  const { t } = useTranslation();
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showProfileUpdateModal, setShowProfileUpdateModal] = useState(false);

  const [helpMenuOpen, setHelpMenuOpen] = useState(false);
  const [toDoListOpen, setToDoListOpen] = useState(false);
  const [toDoListMenuAnchorEl, setToDoListMenuAnchorEl] = useState(null);
  const [helpMenuAnchorEl, setHelpMenuAnchorEl] = useState(null);
  const [manageMenuAnchorEl, setManageMenuAnchorEl] = useState(null);
  const [manageMenuOpen, setManageMenuOpen] = useState(false);

  const [showTextModal, setShowTextModal] = useState(false);
  const [showHelpIntroModal, setShowHelpIntroModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showVideoPopOp, setShowVideoPopOp] = useState(false);
  // const [selectedVideoIndex, setSelectedVideoIndex] = useState(undefined);
  const openTextQuerry = () => setShowTextModal(true);
  const openHelpIntroModal = () => setShowHelpIntroModal(true);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleVideoQuerry = (image, video, text) => {
    setSelectedImage(image);
    setSelectedVideo(video);
    setSelectedText(text);
  };

//   const { data: manageOptionsData } = useGetManageOptionsQuery();

  const [videoLinks, setVideoLinks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const accessToken = getCookieItem("new_workbench_jwt_access_token");
        const storedVideoLinks = localStorage.getItem("videoLinksIntro");
        const storedTimestamp = localStorage.getItem("videoTimestampIntro");

        if (storedVideoLinks && storedTimestamp) {
          const currentTime = new Date().getTime();
          const elapsedTime = currentTime - Number(storedTimestamp);

          if (elapsedTime < 55 * 60 * 1000) {
            // If less than 50 minutes have passed, use the stored video links
            setVideoLinks(JSON.parse(storedVideoLinks));
            return;
          }
        }

        // const result = await axios.get(
        //   `${BASE_URL}${API_URLS.GET_HELP_VIDEOS}`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`,
        //     },
        //   }
        // );
        // setVideoLinks(result.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const closeHelpTextModal = () => {
    setShowTextModal(false);
    setShowHelpIntroModal(false);
  };
  const closeHelpVideoModal = () => {
    setShowVideoModal(false);
  };

  const openHelpVideoModal = () => {
    setShowVideoModal(true);
    console.log(showVideoModal);
  };
  const closeHelpVideoPopOp = () => {
    setShowVideoPopOp(false);
  };

  const handleManageMenu = (event) => {
    setManageMenuAnchorEl(event.currentTarget);
    setManageMenuOpen(true);
  };
  const handleManageMenuClose = () => {
    setManageMenuAnchorEl(null);
    setManageMenuOpen(false);
  };

  const handleHelpMenuClick = (event) => {
    setHelpMenuAnchorEl(event.currentTarget);
    setHelpMenuOpen(true);
  };

  const handleHelpMenuClose = () => {
    setHelpMenuAnchorEl(null);
    setHelpMenuOpen(false);
  };

  const handleToDoList = (event) => {
    setToDoListMenuAnchorEl(event.currentTarget);
    setToDoListOpen(true);
  };
  const handleToDoListClose = () => {
    setToDoListMenuAnchorEl(null);
    setToDoListOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const backToTermsModal = () => {
    setShowPrivacyModal(false);
    openTermsModal();
  };

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

  const openPrivacyModal = () => {
    setShowPrivacyModal(true);
  };

  const closeTermsModal = () => setShowTermsModal(false);
  const openTermsModal = () => setShowTermsModal(true);

  const closeSupportModal = () => setShowSupportModal(false);
  const openSupportModal = () => setShowSupportModal(true);

  const profileUpdateModal = () => setShowProfileUpdateModal(true);
  const closeProfileUpdateModal = () => setShowProfileUpdateModal(false);

  const openChangePassword = () => setShowChangePasswordModal(true);
  const closeChangePassword = () => setShowChangePasswordModal(false);

  const renderSupportModalBody = () => {
    return (
        ""
    //   <SupportForm email="test@zenarate.com" handleClose={closeSupportModal} />
    );
  };

  const rendeUpdatePasswordModalBody = () => {
    return (
        ""
    //   <UpdatePasswordForm closeUpdatePasswordModal={closeChangePassword} />
    );
  };

  const renderPrivacyModalBody = () => {
    ""
    // return <PrivacyPolicy handleClose={closeSupportModal} />;
  };

  const renderManageMenu = () => {
    ""
    // return <ManageMenu manageOptionsData={manageOptionsData} />;
  };

  const renderTermsModalBody = () => {
    return (
        ""
    //   <TermsOfUse
    //     openPrivacyModal={openPrivacyModal}
    //     handleClose={closeTermsModal}
    //   />
    );
  };

  const renderProfileUpdateModal = () => {
    return (
        ""
    //   <UpdateProfileModal
    //     testmod="test"
    //     handleClose={closeProfileUpdateModal}
    //   />
    );
  };

  const renderHelpDropDownBody = () => {
    return (
        ""
    //   <QuickHelp
    //     handleVideoQuerry={handleVideoQuerry}
    //     videoLinks={videoLinks}
    //     openHelpVideoModal={openHelpVideoModal}
    //   />
    );
  };
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));

  const renderTextModal = () => { 
    ""
    // return <HelpText />;
  };

  const renderHelpIntroModal = () => {
    ""
    // return <HelpTrainingIntro />;
  };

  const renderToDoListMenu = () => {
    ""
    // return <ToDoListMenu />;
  };
  const renderVideoModal = () => {
    return (
        ""
    //   <HelpVideoHtml
    //     videoImage={selectedImage}
    //     video={selectedVideo}
    //     text={selectedText}
    //   />
    );
  };

  const renderVideoModal2 = () => {
    ""
    // return <HelpVideo1 />;
  };

  return (
    <CustomNavBarPresentation
      logoStyles={logoStyles}
      handleHelpMenuClick={handleHelpMenuClick}
      helpMenuOpen={helpMenuOpen}
      helpMenuAnchorEl={helpMenuAnchorEl}
      handleHelpMenuClose={handleHelpMenuClose}
      renderHelpDropDownBody={renderHelpDropDownBody}
      handleManageMenu={handleManageMenu}
      manageMenuOpen={manageMenuOpen}
      manageMenuAnchorEl={manageMenuAnchorEl}
      handleManageMenuClose={handleManageMenuClose}
      renderManageMenu={renderManageMenu}
      handleClick={handleClick}
      open={open}
      CustomToggle={CustomToggle}
      anchorEl={anchorEl}
      handleClose={handleClose}
      profileUpdateModal={profileUpdateModal}
      openSupportModal={openSupportModal}
      openTermsModal={openTermsModal}
      openChangePassword={openChangePassword}
      showProfileUpdateModal={showProfileUpdateModal}
      closeProfileUpdateModal={closeProfileUpdateModal}
      renderProfileUpdateModal={renderProfileUpdateModal}
      showTermsModal={showTermsModal}
      closeTermsModal={closeTermsModal}
      renderTermsModalBody={renderTermsModalBody}
      showPrivacyModal={showPrivacyModal}
      closePrivacyModal={closePrivacyModal}
      showChangePasswordModal={showChangePasswordModal}
      renderPrivacyModalBody={renderPrivacyModalBody}
      backToTermsModal={backToTermsModal}
      closeChangePassword={closeChangePassword}
      rendeUpdatePasswordModalBody={rendeUpdatePasswordModalBody}
      showSupportModal={showSupportModal}
      closeSupportModal={closeSupportModal}
      renderSupportModalBody={renderSupportModalBody}
      showTextModal={showTextModal}
      showHelpIntroModal={showHelpIntroModal}
      closeHelpTextModal={closeHelpTextModal}
      renderTextModal={renderTextModal}
      renderHelpIntroModal={renderHelpIntroModal}
    //   showVideoModal={showVideoModal}
      closeHelpVideoModal={closeHelpVideoModal}
      renderVideoModal={renderVideoModal}
      renderVideoModal2={renderVideoModal2}
    //   manageOptionsData={manageOptionsData}
      renderToDoListMenu={renderToDoListMenu}
    //   toDoListOpen={toDoListOpen}
    //   handleToDoList={handleToDoList}
    //   handleToDoListClose={handleToDoListClose}
    //   toDoListMenuAnchorEl={toDoListMenuAnchorEl}
    //   closeHelpVideoPopOp={closeHelpVideoPopOp}
    //   showVideoPopOp={showVideoPopOp}
    //   videoLinks={videoLinks}
    //   selectedText={selectedText}
    />
  );
};

export default CustomNavBar;
