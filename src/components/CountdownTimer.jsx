import React, { useState, useEffect } from 'react'

function CountdownTimer() {
  const futureDate = new Date('2025-03-12T16:00:00')

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = futureDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dunkku Countdown </h1>
      <h2>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
        {timeLeft.seconds}s
      </h2>
    </div>
  )
}

export default CountdownTimer
