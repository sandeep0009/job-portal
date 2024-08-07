"use client";
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { locations } from '@/utils/location';
import { Textarea } from '@/components/ui/textarea';
import createAxiosInstance from '@/utils/axiosInstace';

const Page = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        jobType: "All Type",
        locationType: "Location Type",
        jobLocation: "Job Location",
        salary: "",
        description: "",
        howToApply: "",
        approved: true
    });

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleDropdownChange = (name: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        const slug = generateSlug(formData.jobTitle);

        const dataToSend = { ...formData, slug };

        createAxiosInstance().post('/api/create-job', dataToSend)
            .then((res) => {
                if (res.status === 201) {
                    console.log(dataToSend)
                    console.log("created successfully")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='max-w-5xl mx-auto px-5 py-6'>
            <div className='text-3xl font-bold text-center mb-2'>
                Find your best candidate for your job/internship 
            </div>
            <div className='text-sm text-center text-slate-500 mb-6'>
                By adding your requirements 
            </div>
            <Card>
                <CardTitle className='m-5'>Fill the details for the job / internship</CardTitle>
                
                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Job Title</Label>
                    <Input
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder='e.g Full Stack Developer'
                    />
                </div>
                
                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Company Name</Label>
                    <Input
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder='e.g Google'
                    />
                </div>
                
                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Job Type</Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                                {formData.jobType}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {["All Type", "Full Time", "Part Time", "Contract", "Internship", "Temporary", "Volunteer"].map((type) => (
                                <DropdownMenuItem key={type} onSelect={() => handleDropdownChange("jobType", type)}>
                                    {type}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Company Location</Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                                {formData.locationType}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {locations.map((location) => (
                                <DropdownMenuItem key={location} onSelect={() => handleDropdownChange("locationType", location)}>
                                    {location}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Job Location</Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                                {formData.jobLocation}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {["Onsite", "Remote", "Hybrid"].map((type) => (
                                <DropdownMenuItem key={type} onSelect={() => handleDropdownChange("jobLocation", type)}>
                                    {type}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Salary</Label>
                    <Input
                        name="salary"
                        value={formData.salary}
                        onChange={handleInputChange}
                        placeholder='e.g $200'
                    />
                </div>

                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>Description</Label>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder='Briefly describe e.g skills required'
                    />
                </div>
                <div className='m-5'>
                    <Label className='text-slate-800 mb-2'>How to apply</Label>
                    <Input
                        name="howToApply"
                        value={formData.howToApply}
                        onChange={handleInputChange}
                        placeholder='e.g website link, google form or email'
                    />
                </div>

                <div className='m-5'>
                    <Button onClick={handleSubmit}>Click to Add</Button>
                </div>
            </Card>
        </div>
    )
}

export default Page
