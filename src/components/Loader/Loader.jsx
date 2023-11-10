import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <ProgressBar
      height={200}
      width={200}
      ariaLabel="progress-bar-loading"
      borderColor="#fff"
      barColor="#fff"
    />
  </div>
);
