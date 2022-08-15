/**
 * Author: Trushita Maurya
 * Feature: Generic
 */
import React from "react";
import FormDialogComp from "../../components/FormDialogAlert";

/**
 * Description: Form Dialog Alert is for change password
 * @param {*} props
 * @returns
 */
const FormDialogAlert = (props) => {
  const handleSubmitPwd = (pwdInput) => {
    props.handleSubmitForm(pwdInput);
  };
  return (
    <>
      <FormDialogComp {...props} handleSubmitPwd={handleSubmitPwd} />
    </>
  );
};

export default FormDialogAlert;
