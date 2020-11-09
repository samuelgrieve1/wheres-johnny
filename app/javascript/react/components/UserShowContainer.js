import React, { useState, useEffect } from 'react'

const UserShowContainer = (props) => {
  const[userShow, setUserShow] = useState({})
    
  useEffect(()=>{
    let id = props.match.params.id
    fetch(`/api/v1/users/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setUserShow(body)
      })   
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let userReviewArray = []
  let userNoReviewMessage = ""
  if (userShow.reviews) {
    userReviewArray = userShow.reviews.map((review) => {
      return(
        <div>
          {review.title}
          {review.description}
        </div>
      )
    })
  } else {
    userNoReviewMessage = "You have not posted any reviews yet."
  }

  return(
    <div className="grid-container">
      <h1 className="page-heading">My Profile</h1>
      <div className="grid-x">
        <div className="cell small-12 formy">
          <h2>{userShow.user_name}</h2>
          <h3>{userShow.email}</h3>
          <h3>Reviews: {userNoReviewMessage}</h3>
          {userReviewArray}
        </div>
      </div>
    </div>
  )
}

export default UserShowContainer