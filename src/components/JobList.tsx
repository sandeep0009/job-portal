
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Search from '@/components/Search'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import createAxiosInstance from '@/utils/axiosInstace'
import { Button } from '@/components/ui/button'
import CustomPagination from '@/components/CustomPagination'
import { IoLocationOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface Job {
    id: string;
    title: string;
    description: string;
    salary: number;
    locationType: string;
}

interface Filters {
    title: string;
    type: string;
    location: string;
    remote: boolean;
}

const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [totalJobs, setTotalJobs] = useState<number>(0)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [jobDetails, setJobDetails] = useState<Job | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [filters, setFilters] = useState<Filters>({ title: '', type: '', location: '', remote: false })
    const limit = 5
    const router = useRouter()
    const searchParams = useSearchParams()

    const fetchJobs = (page: number, filters: Filters) => {
        const { title, type, location, remote } = filters;
        createAxiosInstance().get(`/api/get-all-jobs`, {
            params: {
                page,
                limit,
                title,
                type,
                location,
                remote
            }
        })
        .then((res) => {
            if (res.status === 201) {
                setJobs(res.data.allJobData)
                setTotalJobs(res.data.totaljobs)
                setTotalPages(res.data.totalPages)
            }
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        const page = Number(searchParams.get('page')) || 1
        setCurrentPage(page)
        fetchJobs(page, filters)
    }, [searchParams, filters])

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            router.push(`/dashboard?page=${page}`);
        }
    }

    const handleViewDetails = (id: string) => {
        createAxiosInstance()
            .get(`/api/details-of-a-job?id=${id}`)
            .then((res) => {
                if (res.status === 201) {
                    setJobDetails(res.data.jobdetail)
                    setModalOpen(true)
                }
            })
            .catch((error) => console.log(error))
    }

    const closeModal = () => {
        setModalOpen(false)
        setJobDetails(null)
    }

    const handleSearch = (filters: Filters) => {
        setFilters(filters)
        router.push(`/dashboard?page=1&title=${filters.title}&type=${filters.type}&location=${filters.location}&remote=${filters.remote}`);
    }

    const redirectToApply = (id: string) => {
        createAxiosInstance()
        .get(`/api/apply?id=${id}`)
        .then((res) => {
            const url: string = res.data.applicationUrl
            window.open(url, '_blank');
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="container">
                <div className="flex flex-col w-full max-w-md m-auto mt-16 justify-center">
                    <div className='text-2xl font-bold text-center'>
                        Let&apos;s find the perfect job / internship
                    </div>
                    <div className='mt-3 text-slate-700 text-center'>
                        Total number of jobs: {totalJobs}
                    </div>
                </div>
            </div>

            <div className='p-2'>
                <div className="flex flex-col md:flex-row gap-5 mt-2 md:justify-center">
                    <div className='w-full lg:w-64 md:w-64 lg:sticky top-0 h-fit'>
                        <Search onSearch={handleSearch} />
                    </div>
                    <div>
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <div key={index} className='sm:w-full lg:w-[650px] md:w-[450px] mb-5'>
                                    <Card className='border border-slate-900 shadow-md'>
                                        <CardHeader>
                                            <CardTitle>{job.title}</CardTitle>
                                            <CardDescription>{job.description}</CardDescription>
                                            <CardDescription className='flex gap-2 items-center'>
                                                <IoLocationOutline />{job.locationType}
                                                <MdPayment />{job.salary}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <div className='px-2'>
                                                <Button className='bg-blue-900' onClick={() => handleViewDetails(job.id)}>View Details</Button>
                                            </div>
                                            <div className='px-2'>
                                                <Button onClick={() => redirectToApply(job.id)}>Apply now</Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))
                        ) : (
                            <Card className='sm:w-full lg:w-[650px] md:w-[450px] border border-slate-900'>
                                <CardHeader>
                                    <CardTitle>No Jobs Found</CardTitle>
                                </CardHeader>
                                <CardDescription>
                                    <CardFooter>
                                        <div className='px-2'>
                                            <Button className='bg-blue-900'>Back</Button>
                                        </div>
                                    </CardFooter>
                                </CardDescription>
                            </Card>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-center">
                <CustomPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{jobDetails?.title}</DialogTitle>
                    </DialogHeader>
                    <div>
                        <p>{jobDetails?.description}</p>
                        <p><IoLocationOutline /> {jobDetails?.locationType}</p>
                        <p><MdPayment /> {jobDetails?.salary}</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button onClick={closeModal}>Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default JobList
