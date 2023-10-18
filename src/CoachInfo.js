import React, { useState, useEffect } from 'react';

const CoachInfo = () => {
  const [coachData, setCoachData] = useState(null);

  useEffect(() => {
    fetchCoachInformation();
  }, []);

  const fetchCoachInformation = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetch(`http://127.0.0.1:8000/coaches/api/coaches/${userId}`)
        .then((response) => response.json())
        .then((data) => setCoachData(data))
        .catch((error) => console.error('Error fetching coach data:', error));
    }
  };

  return (
    <div className="container text-center mt-5 pt-5">
      <h2>Coach Information</h2>
      {coachData ? (
        <div>
          <p>Name: {coachData.username}</p>
          <p>Title: {coachData.title}</p>
          <p>Certifications: {coachData.certifications.join(', ')}</p>
        </div>
      ) : (
        <p>Loading coach information...</p>
      )}
    </div>
  );
};

export default CoachInfo;
