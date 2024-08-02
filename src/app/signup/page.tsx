"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import createAxiosInstance from '@/utils/axiosInstace';
interface ApiSignUp {
    name: string;
    email: string;
    password: string;
    role: string;
}

const Page = () => {
    const [formData, setFormData] = useState<ApiSignUp>({
        name: '',
        email: '',
        password: '',
        role: 'job-seeker',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRoleChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            role: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await createAxiosInstance().post('/api/signup', formData);

            if (response.status === 201) {
                console.log("Created successfully");
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }

        console.log(formData);
    };

    return (
        <div className='w-full max-w-md mx-auto mt-10 border border-gray-300 rounded-lg shadow-md'>
            <div className='p-6'>
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up to JobQuest</h1>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='mb-1 text-sm font-medium'>Name</label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                            className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="email" className='mb-1 text-sm font-medium'>Email</label>
                        <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                            className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password" className='mb-1 text-sm font-medium'>Password</label>
                        <Input
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
                            type="password"
                            className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='mb-1 text-sm font-medium'>Select Role</label>
                        <RadioGroup value={formData.role} onValueChange={handleRoleChange}>
                            <div className="flex space-x-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="job-seeker" id="job-seeker" />
                                    <Label htmlFor="job-seeker">Job seeker</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="job-provider" id="job-provider" />
                                    <Label htmlFor="job-provider">Job provider</Label>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>

                    <Button type="submit" className='bg-black text-white'>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;
