import React, { useState } from 'react'

ReviewFormContainer = (props) => {
  const [newReview, setNewReview] = useState({
    title: "",
    description: ""
  })

  const [errors, setErrors] = useState({})
  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title", "description"]
    
    requiredFields.forEach(field => {
      if (newReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addNewReview(newReview)
      setNewReview({
        title: "",
        description: "",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="new-review-form">
      <ErrorList errors={errors} />
      <label for="title">Title</label>
      <input
        name="title"
        id="title"
        type="text"
        onChange={handleChange}
        value={newReview.title}
      />
      <label for="description">Description</label>
      <input
        name="description"
        id="description"
        type="text"
        onChange={handleChange}
        value={newReview.description}
      />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ReviewFormContainer