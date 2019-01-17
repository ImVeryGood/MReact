export const Increment = "increment";
export const Decrement = "decrement";
export const Change_UserName = "change_username";
export const Change_PassWord = "change_password";
export const Update_List = "update_list";
export const Update_error = "update_list_error";
export const increaseAction = {
  type: Increment
};
export const decreaseAction = {
  type: Decrement
};
export const change_name = text => {
  return {
    type: Change_UserName,
    value: text
  };
};
export const change_pass = text => {
  return {
    type: Change_PassWord,
    value: text
  };
};
export const updates_list = {
  type: "update"
};
