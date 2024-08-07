
import React, { Suspense } from 'react'
import JobList from '@/components/JobList'

const Page = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <JobList />
            </Suspense>
        </div>
    )
}

export default Page
