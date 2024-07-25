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
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

interface FormAccomplishmentsProps {
  open: boolean;
  onClose: () => void;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export function FormAccomplishments({
  open,
  onClose,
}: FormAccomplishmentsProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Accomplishments</DialogTitle>
          <DialogDescription>
            Add your accomplishments here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="editor" className="block mb-2">
                Accomplishments
              </Label>
              <ReactQuill
                id="editor"
                theme="snow"
                placeholder="Type something"
                modules={{
                  toolbar: [
                    [{ font: [] }],
                    [{ header: "1" }, { header: "2" }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline"],
                    ["link"],
                    ["clean"],
                  ],
                }}
                className="h-48" // Adjusted height to be shorter
              />
            </div>
          </div>
        </div>
        <DialogFooter className="pt-10">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
