'use client'
import React from "react";
import { InlineWidget } from "react-calendly";


export default function Calendar() {

  return (
    <div className="bg-[#D7D4D1]">
      <div>
        <InlineWidget url="https://calendly.com/nailsmelodi" />
      </div>
    </div>
  )
}