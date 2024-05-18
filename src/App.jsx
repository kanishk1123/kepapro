import React, { useEffect, useState } from 'react'
import axios from "axios"
import Routing from './utils/Routing'
import { SpeedInsights } from "@vercel/speed-insights/next"


const App = () => {

  return (
   <>
   <SpeedInsights/>
   <Routing/>
   </>
  )
}

export default App