"user client";
import Link from "next/link";
const links = [
  { name: "opcion 1", href: "/" },
  { name: "opcion 2", href: "/" },
  { name: "opcion 3", href: "/" },
  { name: "opcion 4", href: "/" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-gray-800"
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
