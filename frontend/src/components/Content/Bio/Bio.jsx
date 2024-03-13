import React from 'react'
import './Bio.css'

const Bio = ({headshot}) => {
    return (
        <div className="n-bio">
            <img src={require('/headshots/' + headshot)} alt="" />
            First Last
        </div>
    )
}

export default Bio
