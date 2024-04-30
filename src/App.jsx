import './App.css';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';

import 'modern-normalize';
import { useLocalStorage } from './hooks/useLocalStorage';
import Notification from './components/Notification/Notification';

const initialState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [points, setPoints] = useLocalStorage('points', initialState);
  const handelClick = points => {
    setPoints(prev => ({ ...prev, [points]: prev[points] + 1 }));
  };

  const countTotalPoints = () => {
    return Object.values(points).reduce((acc, value) => acc + value, 0);
  };
  const total = countTotalPoints();

  const countPositivePercent = () => {
    return Math.round((points['good'] / total) * 100);
  };
  const positive = countPositivePercent();
  const resetPoints = () => {
    setPoints(initialState);
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <hr />
      <Options
        pointsKey={Object.keys(points)}
        onLeavePoint={handelClick}
        onResetPoints={resetPoints}
        total={total}
      />
      <hr />
      {total !== 0 ? (
        <Feedback
          statistics={Object.entries(points)}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}

export default App;
