@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

:root {
  --primary-color: #ff4d6d;
  --secondary-color: #ff8fa3;
  --background-color: #fff0f3;
  --text-color: #590d22;
  --button-hover: #c9184a;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Outfit', sans-serif;
  background: linear-gradient(135deg, #fff0f3, #ffe3e8, #ffc2d1);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  /* Prevent scrolling when buttons move */
  text-align: center;
  position: relative;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.container {
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  max-width: 90%;
  width: 400px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  line-height: 1.2;
}

.gif-container {
  margin-bottom: 2rem;
}

.gif-container img {
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  /* Important for absolute positioning of 'No' button if needed, 
     but we'll use fixed or absolute on body for the 'No' button movement
     to ensure it can go anywhere */
}

/* Base button styles */
.btn {
  padding: 12px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-yes {
  background-color: var(--primary-color);
  color: white;
}

.btn-yes:hover {
  background-color: var(--button-hover);
  transform: scale(1.05);
}

.btn-no {
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  position: relative;
  /* Starts relative, becomes absolute on movement */
}

/* Floating Hearts Background */
.hearts-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.heart {
  position: absolute;
  font-size: 20px;
  color: var(--primary-color);
  opacity: 0.6;
  user-select: none;
  /* Prevent selecting hearts */
  animation: float 15s infinite linear, pulse 2s infinite ease-in-out;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  100% {
    transform: translateY(-10vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

/* Animations for content */
.container h1 {
  animation: slideIn 1s ease-out;
}

.container p {
  animation: slideIn 1.2s ease-out;
}

.gif-container img {
  animation: bounceIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

/* Mobile optimizations */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .container {
    padding: 1.5rem;
    width: 90%;
  }

  .btn {
    padding: 10px 25px;
    font-size: 1rem;
  }
}
