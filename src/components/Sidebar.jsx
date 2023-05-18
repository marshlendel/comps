import Link from "./Link";

function Sidebar() {
    const links = [
        {
            label: 'Dropdown',
            path: '/'
        },
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Buttons',
            path: '/button'
        },
    ]

    const renderedLinks = links.map(link => {
        return <Link className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2" key={link.label} to={link.path}>{link.label}</Link>
    })

  return (
    <nav className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {renderedLinks}
    </nav>
  );
}

export default Sidebar;
