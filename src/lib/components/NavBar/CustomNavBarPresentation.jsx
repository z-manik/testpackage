import React from "react";

// Library components

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faScrewdriverWrench,
  faCircleQuestion,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

//Custom Component
// import { Logo } from "components";

import { Logo } from "../Logo"
// import ProfileMenu from "./DropDownMenus/ProfileMenu";

//API
// import { useGetUpdateProfileDataQuery } from "../../../pages/dashboard/UpdateProfile/endpoints";
import CustomTooltip from "components/CustomTooltip";
import Modal from "../Modal";
// import CustomizedTooltip from "../CustomTooltip";

const CustomNavBarPresentation = ({
  logoStyles,
  handleHelpMenuClick,
  helpMenuOpen,
  helpMenuAnchorEl,
  handleHelpMenuClose,
  renderHelpDropDownBody,
  handleManageMenu,
  manageMenuOpen,
  manageMenuAnchorEl,
  handleManageMenuClose,
  renderManageMenu,
  handleClick,
  open,
  anchorEl,
  handleClose,
  profileUpdateModal,
  openSupportModal,
  openTermsModal,
  openChangePassword,
  showProfileUpdateModal,
  closeProfileUpdateModal,
  renderProfileUpdateModal,
  showTermsModal,
  closeTermsModal,
  renderTermsModalBody,
  showPrivacyModal,
  closePrivacyModal,
  showChangePasswordModal,
  renderPrivacyModalBody,
  backToTermsModal,
  closeChangePassword,
  rendeUpdatePasswordModalBody,
  showSupportModal,
  closeSupportModal,
  renderSupportModalBody,
  showTextModal,
  showHelpIntroModal,
  closeHelpTextModal,
  renderTextModal,
  renderHelpIntroModal,
  showVideoModal,
  closeHelpVideoModal,
  renderVideoModal,
  renderVideoModal2,
  manageOptionsData,
  renderToDoListMenu,
  toDoListOpen,
  handleToDoList,
  handleToDoListClose,
  toDoListMenuAnchorEl,
  closeHelpVideoPopOp,
  showVideoPopOp,
  videoLinks,
  selectedText,
}) => {
  const { t } = useTranslation();
//   const { data: getData } = useGetUpdateProfileDataQuery();

//   const profileUserName = getData
//     ? getData.first_name.concat(" ", getData.last_name)
//     : "";

//   const firstSliceName = getData
//     ? getData.first_name.slice(0, 1).concat(" ", getData.last_name.slice(0, 1))
//     : "";

  return (
    <>
      <header className="d-flex justify-content-between w-100 header align-items-center">
        <div className="d-flex align-items-center">
          <Link to={"/dashboard/app"} role="link" tabIndex="0">
            <Logo styles={logoStyles} />
          </Link>
        </div>

        <nav className="flex align-items-center gap-3">
          <div>
            <div>
              {
            //   manageOptionsData &&
                // Object.keys(manageOptionsData).length > 0 && (
                  <CustomTooltip title="Manage">
                    <button
                      className="borderNone background-transparent"
                      tabIndex="0"
                      onClick={handleManageMenu}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleManageMenu(e);
                        }
                      }}
                      aria-label="Manage Menu"
                      aria-controls={manageMenuOpen ? "manage-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={manageMenuOpen ? "true" : undefined}
                    >
                      {/* <FontAwesomeIcon
                        icon={faScrewdriverWrench}
                        className={`w-20 h-20 cursor-pointer svgHelpMargin tooltip-cntnr ${
                          manageMenuOpen ? "iconIsActive" : "iconInactive"
                        } ${
                          manageOptionsData &&
                          Object.keys(manageOptionsData).length < 1
                            ? "hidemanageIcon"
                            : ""
                        }`}
                      /> */}
                    </button>
                  </CustomTooltip>
                // )
                }
            </div>

            <div>
              <Menu
                anchorEl={manageMenuAnchorEl}
                className="topmanagelist "
                id="manage-menu"
                open={manageMenuOpen}
                onClose={handleManageMenuClose}
                onClick={handleManageMenuClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                {renderManageMenu()}
              </Menu>
            </div>
          </div>

          <span className="dropdown-container">
            <CustomTooltip title="To-Do List">
              <button
                className="borderNone background-transparent"
                aria-label="To-Do List"
                role="button" 
                onClick={handleToDoList} 
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToDoList(e);
                  }
                }}
                tabIndex="0" 
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className={`w-20 h-20 cursor-pointer svgHelpMargin tooltip-cntnr ${
                    toDoListOpen ? "iconIsActive" : "iconInactive"
                  }`}
                />
              </button>
            </CustomTooltip>

            <Menu
              anchorEl={toDoListMenuAnchorEl}
              className="helpTop5"
              id="to-do-list"
              open={toDoListOpen}
              onClose={handleToDoListClose}
              onClick={handleToDoListClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* {renderToDoListMenu()} */}
            </Menu>
          </span>
          <span className="dropdown-container">
            <CustomTooltip title="Help">
              <button
                className="borderNone background-transparent"
                onClick={handleHelpMenuClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleHelpMenuClick(e);
                  }
                }}
                tabIndex="0"
                aria-haspopup="true"
                aria-expanded={helpMenuOpen ? "true" : "false"}
                aria-controls="help-menu"
                aria-label="Help"
              >
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className={`w-20 h-20 cursor-pointer svgHelpMargin tooltip-cntnr ${
                    helpMenuOpen ? "iconIsActive" : "iconInactive"
                  }`}
                />
              </button>
            </CustomTooltip>

            <Menu
              anchorEl={helpMenuAnchorEl}
              className="helpTop5"
              id="help-menu"
              open={helpMenuOpen}
              onClose={handleHelpMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              role="menu"
              aria-labelledby="help-menu-label"
            >
              {renderHelpDropDownBody()}
            </Menu>
          </span>

          <div className="dropdown-container">
            {/* {profileUserName ?  */}
            (
              <CustomTooltip title="Manage Profile">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  className="textTransform"
                >
                  <Avatar
                    sx={{
                      marginTop: "4.5px",
                      width: 32,
                      height: 32,
                      letterSpacing: "-2px",
                      backgroundColor: "#F3F6F9",
                      color: "#014890",
                      fontSize: "14px",
                    }}
                  >
                    {/* {firstSliceName} */}
                  </Avatar>
                  <div className="dropdownAvatar" onClick={handleClick}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </IconButton>
              </CustomTooltip>
            ) : (
              <IconButton
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className="visibleUser textTransform"
              >
                <Avatar
                  sx={{
                    marginTop: "4.5px",
                    width: 32,
                    height: 32,
                    backgroundColor: "#F3F6F9",
                    color: "#014890",
                    fontSize: "14px",
                  }}
                >
                  {/* {firstSliceName} */}
                </Avatar>
              </IconButton>
            )
            {/* } */}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <ProfileMenu
                profileUpdateModal={profileUpdateModal}
                openSupportModal={openSupportModal}
                openTermsModal={openTermsModal}
                openChangePassword={openChangePassword}
              /> */}
            </Menu>
          </div>
        </nav>

        <Modal
        //   show={showProfileUpdateModal}
          centered
        //   handleClose={closeProfileUpdateModal}
          modalHeading={t("update-profile")}
        //   renderModalBody={renderProfileUpdateModal}
          modalWidth={"modalWidth"}
          renderFooter={() => {}}
          showCloseIcon={false}
        />
        <Modal
          show={showTermsModal}
          centered
        //   handleClose={closeTermsModal}
          modalHeading={t("terms-of-use")}
          showCloseIcon={false}
        //   renderModalBody={renderTermsModalBody}
          modalContainerClass={"modal-lg"}
        />

        <Modal
          show={showPrivacyModal}
          centered
        //   handleClose={closePrivacyModal}
          modalHeading={"Privacy Policy"}
        //   renderModalBody={renderPrivacyModalBody}
          modalContainerClass={"modal-lg"}
          renderFooter={() => {
            return <Button onClick={backToTermsModal}>Back</Button>;
          }}
        />

        <Modal
        //   show={showProfileUpdateModal}
          centered
        //   handleClose={closeProfileUpdateModal}
          modalHeading={t("update-profile")}
        //   renderModalBody={renderProfileUpdateModal}
          modalWidth={"modalWidth"}
          renderFooter={() => {}}
          showCloseIcon={false}
        />
        <Modal
        //   show={showChangePasswordModal}
          centered
        //   handleClose={closeChangePassword}
          modalHeading={t("change-password")}
          showCloseIcon={false}
        //   renderModalBody={rendeUpdatePasswordModalBody}
          modalContainerClass={"modal-sm"}
        />
        <Modal
          show={showSupportModal}
          centered
        //   handleClose={closeSupportModal}
          modalHeading={t("support")}
          showCloseIcon={false}
        //   renderModalBody={renderSupportModalBody}
          modalContainerClass={"modal-lg"}
        />

        <Modal
          show={showTextModal}
          centered
        //   handleClose={closeHelpTextModal}
          modalHeading={"Introduction to Training Coach content"}
        //   renderModalBody={renderTextModal}
          modalWidth={"modalWidth"}
          renderFooter={() => {}}
          showCloseIcon={true}
        />

        <Modal
          show={showHelpIntroModal}
          centered
          handleClose={closeHelpTextModal}
          modalHeading={"Navigating the Home Page content"}
          renderModalBody={renderHelpIntroModal}
          modalWidth={"modalWidth"}
          renderFooter={() => {}}
          showCloseIcon={true}
        />

        <Modal
          show={showVideoModal}
          centered
          handleClose={closeHelpVideoModal}
          modalHeading={t(selectedText)}
          renderModalBody={renderVideoModal}
          modalWidth={"modalWidth"} 
          renderFooter={() => {}}
          showCloseIcon={true}
        />
      </header>
    </>
  );
};

export default CustomNavBarPresentation;
