import { SyncOutlined } from '@ant-design/icons';
import { useBoolean } from 'infra/hooks/useBoolean';

export const Refresher = () => {
  const [state, setRefresher] = useBoolean();
  const clickHandler = () => {
    setRefresher(true);
    setTimeout(() => {
      setRefresher(false);
    }, 3000);
  };
  return <SyncOutlined spin={state} onClick={clickHandler} />;
};
