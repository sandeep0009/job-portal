import React from 'react'
import Search from '@/components/Search'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const page = () => {
    return (
        <div>
            <div className="container">
                <div className="flex flex-col w-full max-w-md m-auto mt-16 justify-center">
                    <div className='text-2xl font-bold text-center'>
                        Let's find the perfect job / internship
                    </div>
                    <div className='mt-3 text-slate-700 text-center'>
                        Total number of posts
                    </div>
                </div>
            </div>

            <div className='p-2'>
                <div className="flex  flex-col md:flex-row gap-5 mt-2 md:justify-center">
                    <div className='w-full lg:w-64 md:w-64'>
                        <Search />
                    </div>
                    <div className='sm:w-full lg:w-[650px] md:w-[450px]'>
                        <Card className='border border-slate-900'>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
