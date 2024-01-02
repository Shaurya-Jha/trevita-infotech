import React from 'react'
import Choose from '../components/About/Choose'
import Hero from '../components/Hero'
import CoreValues from '../components/About/CoreValues'
import VisionMission from '../components/About/VisionMission'

export default function About() {
  return (
    <div>
        {/* hero */}
        <div>
            <Hero />
        </div>

        {/* why choose */}
        <div>
            <Choose />
        </div>

        {/* core values */}
        <div>
            <CoreValues />
        </div>

        {/* vision and mission */}
        <VisionMission />
    </div>
  )
}
