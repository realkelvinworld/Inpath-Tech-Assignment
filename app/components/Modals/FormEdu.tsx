/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FormEduProps {
  open: boolean;
  onClose: () => void;
}

export function FormEdu({ open, onClose }: FormEduProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Education</DialogTitle>
          <DialogDescription>
            Make changes to your education here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="institution" className="block">
                Institution
              </Label>
              <Select>
                <SelectTrigger>
                  <span>Search institution</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="institution1">Institution 1</SelectItem>
                  <SelectItem value="institution2">Institution 2</SelectItem>
                  <SelectItem value="institution3">Institution 3</SelectItem>
                  <SelectItem value="institution4">Institution 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="qualification" className="block">
                  Qualification
                </Label>
                <Select>
                  <SelectTrigger>
                    <span>Choose qualification</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="qual1">Qualification 1</SelectItem>
                    <SelectItem value="qual2">Qualification 2</SelectItem>
                    <SelectItem value="qual3">Qualification 3</SelectItem>
                    <SelectItem value="qual4">Qualification 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="course-category" className="block">
                  Course Category
                </Label>
                <Select>
                  <SelectTrigger>
                    <span>Choose category</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat1">Category 1</SelectItem>
                    <SelectItem value="cat2">Category 2</SelectItem>
                    <SelectItem value="cat3">Category 3</SelectItem>
                    <SelectItem value="cat4">Category 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="course-of-study" className="block">
                Course of Study
              </Label>
              <Input id="course-of-study" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="col-span-1">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
