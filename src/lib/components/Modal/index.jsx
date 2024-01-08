// Library Components
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

// Styles
import "./Modal.scss";

const CustomModal = ({
  show,
  handleClose,
  modalHeading,
  renderModalBody,
  renderFooter,
  centered,
  modalContainerClass = "",
  modalWidth = "",
  contentClassName = "",
  headerClassName = "",
  showCloseIcon = true,
  ...props
}) => {
  return (
    <Modal
      open={show}
      onClose={handleClose}
      centered={centered}
      classes={{ root: "overflow-auto" }}
      {...props}
    >
      <Box
        className={`custom-modal outline-0 ${modalContainerClass} ${modalWidth}`}
      >
        <header
          closeVariant="white"
          className={`custom-modal-header ${headerClassName}`}
        >
          <h3 className="fontSize16 marginBottom0">{modalHeading}</h3>
          {showCloseIcon && (
            <FontAwesomeIcon
              icon={faClose}
              onClick={handleClose}
              className={"cursor-pointer"}
            />
          )}
        </header>
        <Box className={contentClassName}>{renderModalBody()}</Box>
        {typeof renderFooter === "function" && <>{renderFooter()}</>}
      </Box>
    </Modal>
  );
};

export default CustomModal;
