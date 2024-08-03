import React from 'react'
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationPrevious, 
  PaginationLink, 
  PaginationNext 
} from '@/components/ui/pagination'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const CustomPagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <PaginationItem key={i} className="mx-1">
        <PaginationLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            handlePageChange(i)
          }}
          className={`${currentPage === i ? 'bg-white text-black' : 'bg-black text-white'} hover:bg-black hover:text-white w-10 h-10 flex items-center justify-center `}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }

  return (
    <div className="flex justify-center items-center lg:ml-24">
      <Pagination>
        <PaginationContent className="space-x-2">
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage - 1)
              }}
              className="bg-black text-white w-20 h-10 flex items-center justify-center"
            />
          </PaginationItem>
          {pages}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage + 1)
              }}
              className="bg-black text-white w-20 h-10 flex items-center justify-center"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default CustomPagination