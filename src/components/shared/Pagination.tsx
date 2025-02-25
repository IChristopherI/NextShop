"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink} from "../ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <button className="flex items-center m-2 p-2 gap-1 text-[15px] hover:cursor-pointer" disabled={currentPage <= 1} onClick={() => updatePage(currentPage - 1)}> <ChevronLeft />Previous</button>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">{currentPage} из {totalPages}</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <button className="flex items-center m-2 p-2 gap-1 text-[15px] hover:cursor-pointer" disabled={currentPage >= totalPages} onClick={() => updatePage(currentPage + 1)}>Next<ChevronRight /></button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default PaginationComponent;
