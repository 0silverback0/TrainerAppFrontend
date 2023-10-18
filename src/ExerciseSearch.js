import React, { useState, useEffect } from 'react';

const ExerciseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exerciseData, setExerciseData] = useState(null);
  const apiUrl = 'http://127.0.0.1:8000/coaches/exercise-list/';

  useEffect(() => {
    // Fetch exercise data based on the search term
    if (searchTerm.trim() !== '') {
      fetch(`${apiUrl}?name=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setExerciseData(data))
        .catch((error) => console.error('Error fetching data: ', error));
    } else {
      // Clear the exercise data if the search term is empty
      setExerciseData(null);
    }
  }, [searchTerm]);

  const addToWorkout = (exercise) => {
    console.log(`Adding ${exercise.name} to the workout`);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', overflowY: 'scroll', maxHeight: '60%', marginTop: '5%' }}
    >
      <div className="card p-4" style={{ width: '400px' }}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search for exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {exerciseData && (
          <div>
            <h2>Searched Exercise: {exerciseData.exercise.name}</h2>
            <p>Type: {exerciseData.exercise.exercise_type}</p>
            <p>Muscle Targeted: {exerciseData.exercise.muscle_targeted}</p>
            <p>Equipment: {exerciseData.exercise.equipment}</p>
            <p>Difficulty: {exerciseData.exercise.difficulty}</p>
            <button className="btn btn-primary" onClick={() => addToWorkout(exerciseData.exercise)}>
              Add to Workout
            </button>
          </div>
        )}
        {exerciseData && exerciseData.related_exercises.length > 0 && (
          <div>
            <h3>Related Exercises:</h3>
            <ul>
              {exerciseData.related_exercises.map((relatedExercise, index) => (
                <li key={index} className="mb-3">
                  <h4>{relatedExercise.name}</h4>
                  <p>Type: {relatedExercise.exercise_type}</p>
                  <p>Muscle Targeted: {relatedExercise.muscle_targeted}</p>
                  <p>Equipment: {relatedExercise.equipment}</p>
                  <p>Difficulty: {relatedExercise.difficulty}</p>
                  <button className="btn btn-primary" onClick={() => addToWorkout(relatedExercise)}>
                    Add to Workout
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {exerciseData && exerciseData.related_exercises.length === 0 && (
          <div>
            <h3>No related exercises found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseSearch;
