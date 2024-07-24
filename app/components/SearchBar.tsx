import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

function SearchBar() {
  return (
    <main className="mt-5 ">
      <section className="flex items-center justify-between  py-2 lg:w-[600px] w-auto border rounded-full bg-white ">
        <div className="flex items-center">
          <span className="pl-2">
            <Search className="h-6 w-6 text-slate-200" />
          </span>
          <Input
            type="text"
            placeholder={`Try "Civil Engineer"`}
            className="dark:bg- bg-white text-black border-none outline-none focus:outline-none lg:w-[330px] w-[180px]"
          />
        </div>
        <div className="flex items-center border-l ">
          <Select>
            <SelectTrigger className="lg:w-[180px] w-[80px] bg-transparent border-none text-slate-400 dark:bg- bg-white">
              <SelectValue placeholder="Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jobs</SelectLabel>
                <SelectItem value="Civil Engineering">
                  Civil Engineering
                </SelectItem>
                <SelectItem value="Doctor">Doctor</SelectItem>
                <SelectItem value="Electrician">Electrician</SelectItem>
                <SelectItem value="Clerk">Clerk</SelectItem>
                <SelectItem value="Teacher">Teacher</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="pr-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full  bg-green-700 hover:bg-green-500"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SearchBar;
