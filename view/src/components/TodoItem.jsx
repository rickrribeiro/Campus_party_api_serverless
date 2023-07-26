import { useState } from "react";
import DataService from "../services/data-service";

const TodoItem = ({ props }) => {
  let { name, description, status, updated, id } = props;

  const dataService = new DataService();

  const sendMessages = (users, message) => {
    // users, message
    console.log(message);
    if (message && message.length > 0) {
      dataService.sendMessage(users, message);
      document.getElementById("message-area").value = "";
    }
  };

  return (
    <tr class={status?"table-success":"table-danger"}>
    <td>
      <div class="d-flex px-2 py-1">
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-0 text-sm">{name}</h6>
        </div>
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">{description}</p>
    </td>
    <td class="align-middle text-center text-sm">
      {status? <span class="badge badge-sm bg-gradient-success">Done</span>:
      <span class="badge badge-sm bg-gradient-secondary">Todo</span>}
      
    </td>
    <td class="align-middle text-center text-sm">
      <span class="text-secondary text-xs font-weight-bold">{updated} </span>
    </td>

    <td class="align-middle text-center text-sm">
      <a href="javascript:;" class="text-secondary font-weight-bold" data-toggle="tooltip" data-original-title="Edit user">
        x
      </a>
    </td>
   
  </tr>

     
  );
};

export default TodoItem;
