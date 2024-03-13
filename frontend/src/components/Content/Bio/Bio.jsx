import React from 'react'
import './Bio.css'

const Bio = ({headshot}) => {
    return (
        <a href='' className="n-bio">
            <img src={process.env.PUBLIC_URL + '/headshots/' + headshot} alt="" />
            <h3>FIRST LAST</h3>
        </a>
    )
}

export default Bio
