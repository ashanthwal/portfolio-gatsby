import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend",
    text: (
      <ul>
        <li>HTML</li>
        <li>CSS/SASS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Gatsby</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend",
    text: (
      <ul>
        <li>Node JS</li>
        <li>Express</li>
        <li>Mongo DB</li>
        <li>MySQL</li>
        <li>Redux</li>
        <li>Gatsby</li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Other technologies",
    text: (
      <ul>
        <li>AJAX</li>
        <li>REST</li>
        <li>GraphQL</li>
        <li>FireBase</li>
      </ul>
    ),
  },
]
