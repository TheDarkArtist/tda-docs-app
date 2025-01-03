import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex gap-2 items-center shrink-0 pr-6">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </Link>
        <h3 className="text-xl font-medium">TDA Docs</h3>
      </div>
      <SearchInput />
      <div />
    </div>
  );
};
