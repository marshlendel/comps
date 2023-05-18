import Accordion from "../components/Accordion"

const AccordionPage = () => {

    const items = [
        {
            id: "rvouwehvwo;er",
            title: "The power of React",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia velit doloremque inventore, voluptas cum voluptatum quos ullam dolorem, corrupti, eius iusto quisquam aliquam vero debitis officiis quaerat magnam tempore maxime!"
        },
        {
            id:"rowenrknecc",
            title: "Vanilla Javascript",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia velit doloremque inventore, voluptas cum voluptatum quos ullam dolorem, corrupti, eius iusto quisquam aliquam vero debitis officiis quaerat magnam tempore maxime!"
        },
        {
            id: "ttberffklmpcd",
            title: "CSS for styling",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia velit doloremque inventore, voluptas cum voluptatum quos ullam dolorem, corrupti, eius iusto quisquam aliquam vero debitis officiis quaerat magnam tempore maxime!"
        },
    ]
  return (
    <>
    <Accordion items={items} />
    </>
  );
};

export default AccordionPage;
