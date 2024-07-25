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
import { ArrowDownCircle } from "lucide-react";

interface FormUploadProps {
  open: boolean;
  onClose: () => void;
}

export function FormUpload({ open, onClose }: FormUploadProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Documents</DialogTitle>
          <DialogDescription>
            Upload your resume/CV and any other relevant files. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="resume-cv" className="block mb-2">
                Resume/CV
              </Label>
              <p className="text-xs text-gray-500 mb-2">
                Format should be either .pdf, .docx, .doc
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-sm p-4 flex items-center">
                <div className="flex items-center justify-center w-full">
                  <ArrowDownCircle className="w-6 h-6 text-gray-500 mr-2" />
                  <p className="text-center">Drop file here</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("resume-cv")?.click()}
                  className="ml-4"
                >
                  Browse
                </Button>
                <Input id="resume-cv" type="file" className="hidden" />
              </div>
            </div>
            <div>
              <Label htmlFor="other-files" className="block mb-2">
                Other files (e.g., portfolio)
              </Label>
              <p className="text-xs text-gray-500 mb-2">
                Format should be either .pdf, .docx, .doc
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-sm p-4 flex items-center">
                <div className="flex items-center justify-center w-full">
                  <ArrowDownCircle className="w-6 h-6 text-gray-500 mr-2" />
                  <p className="text-center">Drop file here</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    document.getElementById("other-files")?.click()
                  }
                  className="ml-4"
                >
                  Browse
                </Button>
                <Input id="other-files" type="file" className="hidden" />
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
