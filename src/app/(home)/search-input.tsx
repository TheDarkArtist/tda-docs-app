"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "@/hooks/use-search-params";
import { SearchIcon, XIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useSearchParams("search");
  const [value, setValue] = useState<string>(search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    setSearch("");
    inputRef.current?.blur();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef.current?.blur();
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-[720px] w-full"
      >
        <Input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          placeholder="Search..."
          className="md:text-base px-12 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-neutral-100 h-10 rounded-full focus-visible:ring-0 focus:bg-white"
        />

        <Button
          variant="ghost"
          type="submit"
          size="icon"
          className="absolute left-1 top-1/2 -translate-y-1/2 h-full text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300 rounded-full"
        >
          <SearchIcon />
        </Button>

        {value && (
          <Button
            variant="ghost"
            type="button"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-full text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300 rounded-full"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};
