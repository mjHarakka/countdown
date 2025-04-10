import React, { useState, useEffect } from 'react'

const CreateCountdown = () => {
  return (
    <div>
      <form action="POST">
        <label for="countdownTitle">Countdown title:</label>
        <input type="text" id="countdownTitle" name="countdownTitle"></input>
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate"></input>
        <button>Create Countdown</button>
      </form>
    </div>
  )
}

export default CreateCountdown
