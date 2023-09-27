async function longPoll() {
  try {
    const response = await fetch('http://localhost:3000/poll');
    const result = await response.json();

    console.log('Received data:', result.data);

    // Start the next poll
    longPoll();
  } catch (error) {
    console.log('Polling error:', error);

    // Retry the poll if it fails
    setTimeout(longPoll, 2000);
  }
}

// Kick off the long-polling loop
longPoll();
