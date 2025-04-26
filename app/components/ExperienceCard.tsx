import Link from 'next/link'
import React from 'react'
import Card from './shared/Card'

const ExperienceCard = () => {

  return (
        <div className="col-span-4">
            <Link href="/experience">
              <Card title="Experience" className="h-full group cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm">Currently working fulltime at Accenture</p>
                </div>
                <div className="flex mt-6 justify-between items-center text-sm">
                  <span>Full Experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            </Link>
          </div>
  )
}

export default ExperienceCard
