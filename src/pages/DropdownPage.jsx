import Dropdown from "../components/Dropdown";
const DropdownPage = () => {

    const options = [
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Blue",
            value: "blue"
        },
        {
            label: "Yellow",
            value: "yellow"
        },
    ]
  return (
    <>
    <Dropdown options={options} />
    </>
  );
};

export default DropdownPage;
