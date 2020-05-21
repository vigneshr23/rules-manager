import { handleRequest, createRequest } from "./Request";

const AddRuleAPI = (data) => {
  const request = {
    method: "POST",
    data,
    url: "5ec4bcd92f00007d00dc2b1e?mocky-delay=500ms",
  };
  return handleRequest(createRequest(request));
};

const EditRuleAPI = (id, data) => {
  const request = {
    method: "POST",
    data,
    url: "5ec4cb112f00005900dc2b6b?mocky-delay=700ms",
  };
  return handleRequest(createRequest(request));
};

const DeleteRuleAPI = (id) => {
  const request = {
    method: "DELETE",
    url: "5ec4cbc72f00007900dc2b71?mocky-delay=500ms",
  };
  return handleRequest(createRequest(request));
};

export { AddRuleAPI, EditRuleAPI, DeleteRuleAPI };
