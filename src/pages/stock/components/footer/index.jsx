import { memo } from 'react';

const Footer = ({ handleConsole }) => (
  <div>
    {console.log('footer')}
    <div>Footer</div>
  </div>
);

export default memo(Footer);