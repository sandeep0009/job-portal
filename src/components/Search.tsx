import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { locations } from '@/utils/location'
import { Button } from './ui/button'

const Search = () => {
    return (
        <div className='w-full max-w-md lg:w-52 md-w-full p-5 bg-white border border-slate-900 rounded-lg shadow-md'>
            <div className='mb-2'>
                <Label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</Label>
                <Input id="search" placeholder='Title, Company, etc...' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

            <div className='mb-2'>
                <Label className='block text-sm font-medium text-gray-700 mb-2'>Type</Label>
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full px-4 py-1 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        All Type
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                        <DropdownMenuLabel>Job Types</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {["Full Time", "Part Time", "Contract", "Internship", "Temporary", "Volunteer"].map((type) => (
                            <DropdownMenuItem key={type}>{type}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div>
                <Label className='block text-sm font-medium text-gray-700 mb-2'>Locations</Label>
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Select location
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-h-60 overflow-y-auto">
                        {locations.map((item) => (
                            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className='flex items-center space-x-3 mt-2'>
                <Checkbox id="remote" />
                <Label className='font-large text-gray-700 mb-2'>Remote</Label>
            </div>

            <div>
                <Button className='w-full'>Filter</Button>
            </div>
        </div>
    )
}

export default Search
