// @flow

import * as React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';

const IS_BROWSER = () => typeof window !== 'undefined' && window.document && window.document.createElement;

// eslint-disable-next-line no-unused-vars
const ChosenRouter = IS_BROWSER ? BrowserRouter : StaticRouter;

type Props = {|
  basename: string,
  children: ?React.Node,
  staticRouterProps?: Object,
  browserRouterProps?: Object,
|};

const ComboRouter = (props: Props) => {
  const passedProps = IS_BROWSER ? props.browserRouterProps : props.staticRouterProps;
  return <ChosenRouter {...passedProps}>{props.children}</ChosenRouter>;
};

export default ComboRouter;
