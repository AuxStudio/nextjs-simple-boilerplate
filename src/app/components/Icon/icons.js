import React from 'react';
import { MdCheck, MdClose, MdErrorOutline, MdInfoOutline } from 'react-icons/md';

// FIXME: There is a better way to assign these icons
const icons = {
  check: (props) => <MdCheck {...props} />,
  close: (props) => <MdClose {...props} />,
  'error-outline': (props) => <MdErrorOutline {...props} />,
  'info-outline': (props) => <MdInfoOutline {...props} />,
};

export default icons;
