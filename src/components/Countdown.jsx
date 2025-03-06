import React, { useState, useEffect } from 'react'

function CountdownTimer() {
  const [futureDate, setFutureDate] = useState('')
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    if (!futureDate) return

    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = new Date(futureDate)
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [futureDate])

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Countdown Timer</h1>
      <input
        type='datetime-local'
        onChange={(e) => setFutureDate(e.target.value)}
      />
      {timeLeft && (
        <h2>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
          {timeLeft.seconds}s
        </h2>
      )}
    </div>
  )
}

export default CountdownTimer
