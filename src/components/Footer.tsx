import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='border-t mt-4'>
      <div className="mx-auto max-w-5xl space-y-5 px-5 py-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-5">
            <div className='text-2xl font-semibold'>
              Job Quest
            </div>
            <div className='text-slate-500 text-sm'>
              Land to your dream job with less efforts
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/sandeep-kumar-shah-915a34255/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  size={32} />
              </a>
              <a href="https://github.com/sandeep0009" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800" size={32} />
              </a>
              <a href="https://x.com/02___sandeep" target="_blank" rel="noopener noreferrer">
                <FaTwitter  size={32} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Job Quest, Inc. All rights reserved.
        </div>
        

      </div>
    </div>
  )
}

export default Footer
