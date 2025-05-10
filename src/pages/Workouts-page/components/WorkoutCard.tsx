import React from 'react';
import { Workout } from '../../../data/workoutsData';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onClick: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  isFavorite,
  onToggleFavorite,
  onClick,
  children
}) => {
  return (
    <div className={styles.workoutCard} onClick={onClick}>
      <div className={styles.workoutImageContainer}>
        <img
          src={workout.image}
          alt={workout.title}
          className={styles.workoutImage}
          loading="lazy"
        />
        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className={styles.workoutContent}>
        <h3 className={styles.workoutTitle}>{workout.title}</h3>
        <div className={styles.workoutMeta}>
          <span className={styles.workoutDuration}>⏱️ {workout.duration} min</span>
          <span className={styles.workoutType}>🏋️ {workout.type}</span>
          <span className={styles.workoutDifficulty}>📊 {workout.difficulty}</span>
        </div>
        <div className={styles.workoutActions}>
          <button className={styles.actionButton} onClick={(e) => onClick(e)}>
            View Details
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard; 