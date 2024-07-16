import { homeRoute } from 'constants/routes';

export const Debug = () => {
  return (
    <div>
      Debug
      <button
        onClick={() => {
          homeRoute.navigate();
        }}
      >
        to home
      </button>
    </div>
  );
};
