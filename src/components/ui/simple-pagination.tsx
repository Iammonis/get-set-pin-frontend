"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalRows: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (value: number) => void;
  className?: string;
  size?: "sm" | "default" | "lg"; // Size prop for components
};

const getButtonSizeClass = (size: "sm" | "default" | "lg") => {
  switch (size) {
    case "sm":
      return "h-7 w-7 p-0";
    case "lg":
      return "h-11 w-11 p-0";
    default:
      return "h-8 w-8 p-0";
  }
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalRows,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  className,
  size = "default",
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const goToFirst = () => onPageChange(1);
  const goToPrevious = () => onPageChange(Math.max(currentPage - 1, 1));
  const goToNext = () => onPageChange(Math.min(currentPage + 1, totalPages));
  const goToLast = () => onPageChange(totalPages);

  return (
    <div className="md:bg-card md:border md:rounded-lg flex w-full flex-col items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row sm:gap-8">
      <div className="flex-1 text-sm text-muted-foreground">
        {/* {totalSelectedItems} of {totalItems} row(s) selected. */}
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        <div className="flex items-center space-x-2">
          <Typography type="span">Rows per page</Typography>
          <Select
            value={rowsPerPage.toString()}
            defaultValue={rowsPerPage.toString()}
            onValueChange={(value) => onRowsPerPageChange(parseInt(value))}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 25, 50, 100].map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center text-sm font-medium">
          <Typography type="span">{`Page ${currentPage} of ${totalPages}`}</Typography>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Go to first page"
            variant="outline"
            className={`${getButtonSizeClass(size)} hidden md:flex cursor-pointer`}
            onClick={goToFirst}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to previous page"
            variant="outline"
            className={`${getButtonSizeClass(size)} cursor-pointer`}
            onClick={goToPrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to next page"
            variant="outline"
            className={`${getButtonSizeClass(size)} cursor-pointer`}
            onClick={goToNext}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to last page"
            variant="outline"
            className={`${getButtonSizeClass(size)} hidden md:flex cursor-pointer`}
            onClick={goToLast}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
