import { FunctionComponent } from 'react';
import { Button, ButtonTypes } from './Button';
import { Demo } from '../Demo/Demo';

export const ButtonDemo: FunctionComponent = () => {
  const _fakeback = () => undefined;

  return (
    <div>
      <Demo title={'Buttons'}>
        <Button onClick={_fakeback}>Basic</Button>
        <Button onClick={_fakeback} type={ButtonTypes.INFO}>
          Info
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.SUCCESS}>
          Sucess
        </Button>
        <Button
          onClick={_fakeback}
          type={ButtonTypes.WARNING}
          tip={'this is a warning'}
        >
          Warning
        </Button>
        <Button
          onClick={_fakeback}
          type={ButtonTypes.DANGER}
          confirmationText={'are you sure?'}
        >
          Danger
        </Button>
      </Demo>
      <Demo title={'Buttons loading'}>
        <Button onClick={_fakeback} loading>
          Basic loading
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.INFO} loading>
          Info loading
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.SUCCESS} loading>
          Sucess loading
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.WARNING} loading>
          Warning loading
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.DANGER} loading>
          Danger loading
        </Button>
      </Demo>
      <Demo title={'Buttons disabled'}>
        <Button onClick={_fakeback} disabled>
          Basic disabled
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.INFO} disabled>
          Info disabled
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.SUCCESS} disabled>
          Sucess disabled
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.WARNING} disabled>
          Warning disabled
        </Button>
        <Button onClick={_fakeback} type={ButtonTypes.DANGER} disabled>
          Danger disabled
        </Button>
      </Demo>
    </div>
  );
};
