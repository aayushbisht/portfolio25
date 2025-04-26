import React from 'react'
import Card from './shared/Card'
import { useTheme, getThemeClasses } from '../context/ThemeContext'

const AboutMe = () => {
  const { theme } = useTheme()
  const themeClasses = getThemeClasses(theme)

  return (
    <div className="col-span-4 row-span-2">
      <Card title="About me" className="h-full">
        <div className="space-y-2">
          <p className={`text-sm ${themeClasses.text}`}>Hi, I&apos;m a full-stack software developer from India.</p>
          <p className={`text-xs ${themeClasses.textSecondary}`}>My primary tools of choice includes:</p>
          <ul className="list-none space-y-0.5 text-sm">
            <li className={themeClasses.text}>• Nextjs</li>
            <li className={themeClasses.text}>• Typescript</li>
            <li className={themeClasses.text}>• React</li>
            <li className={themeClasses.text}>• Tailwind CSS</li>
            <li className={themeClasses.text}>• Nodejs</li>
            <li className={themeClasses.text}>• Express</li>
            <li className={themeClasses.text}>• Solidity</li>
            <li className={themeClasses.text}>• Git</li>
            <li className={themeClasses.text}>• Github</li>
            <li className={themeClasses.text}>• GCP</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default AboutMe
