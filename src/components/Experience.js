import { Button } from '@mui/material'
import React from 'react'

const Experience = () => {
  const [activeButton, setActiveButton] = React.useState("stays")

  return (
    <div className="flex space-x-1">
    <Button
      variant="ghost"
      className={`rounded-full px-9 py-2 text-sm font-medium ${
        activeButton === "stays"
          ? "bg-transparent text-foreground border-b-2 border-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      onClick={() => setActiveButton("stays")}
    >
      Stays
    </Button>
    <Button
      variant="ghost"
      className={`rounded-full px-4 py-2 text-sm font-medium ${
        activeButton === "experiences"
          ? "bg-transparent text-foreground border-b-2 border-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      onClick={() => setActiveButton("experiences")}
    >
      Experiences
    </Button>
  </div>
  )
}

export default Experience