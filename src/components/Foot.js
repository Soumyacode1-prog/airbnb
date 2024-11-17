'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
 import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
 import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
 import { ChevronDown } from 'lucide-react'
 import Link from "next/link"
//  import React, { useState } from "react";
// import { Tabs, Tab, Box ,Button} from "@mui/material"; // Material-UI components
// import { ChevronDown } from "react-icons/fi"; 


const categories = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do"
]

const destinations = [
  {
    city: "Canmore",
    type: "Pet-friendly rentals",
  },
  {
    city: "Benalmádena",
    type: "House rentals",
  },
  {
    city: "Marbella",
    type: "Villa rentals",
  },
  {
    city: "Mijas",
    type: "Flat rentals",
  },
  {
    city: "Prescott",
    type: "Cottage rentals",
  },
  {
    city: "Scottsdale",
    type: "Mansion rentals",
  },
  {
    city: "Tucson",
    type: "House rentals",
  },
  {
    city: "Jasper",
    type: "Cabin rentals",
  },
  {
    city: "Mountain View",
    type: "Cabin rentals",
  },
  {
    city: "Devonport",
    type: "Cottage rentals",
  },
  {
    city: "Mallacota",
    type: "Beach house rentals",
  },
  {
    city: "Ibiza",
    type: "Holiday rentals",
  },
  {
    city: "Anaheim",
    type: "Apartment rentals",
  },
  {
    city: "Monterey",
    type: "Cottage rentals",
  },
  {
    city: "Paso Robles",
    type: "House rentals",
  },
  {
    city: "Santa Barbara",
    type: "Beachfront rentals",
  },
  {
    city: "Sonoma",
    type: "Cabin rentals",
  }
]

export default function Foot() {
  const [showAll, setShowAll] = React.useState(false)
  const displayedDestinations = showAll ? destinations : destinations.slice(0, 15)

  return (
    <div className="py-8">
      <div className="container px-4">
        <h2 className="mb-6 text-2xl font-semibold">Inspiration for future getaways</h2>
        
        {/* Categories ScrollArea */}
        <ScrollArea className="mb-8 w-full whitespace-nowrap">
          <Tabs defaultValue="Popular" className="w-full">
            <TabsList className="h-12 w-full justify-start rounded-none border-b bg-background p-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="h-12 rounded-none border-b-2 border-transparent px-4 font-medium data-[state=active]:border-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {displayedDestinations.map((destination, index) => (
            <Link
              key={index}
              href="#"
              className="group block space-y-1 text-sm"
            >
              <div className="font-medium group-hover:underline">{destination.city}</div>
              <div className="text-muted-foreground">{destination.type}</div>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && destinations.length > 15 && (
          <Button
            variant="ghost"
            className="mt-4 flex items-center gap-2"
            onClick={() => setShowAll(true)}
          >
            Show more
            <ChevronDown className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}