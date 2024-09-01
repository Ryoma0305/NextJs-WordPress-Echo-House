import { useHubspotForm } from "next-hubspot";

const HubspotForm = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "45171568",
    formId: "420bc377-af80-4944-a12c-0697a205c59c",
    target: "#hubspot-form-wrapper"
  });

  return <div id="hubspot-form-wrapper" />;
};

export default HubspotForm;
