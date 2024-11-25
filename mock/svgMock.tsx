import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
// eslint-disable-next-line react/display-name
const SvgrMock: ForwardRefExoticComponent<RefAttributes<HTMLSpanElement>> = forwardRef((props, ref) => <span ref={ref} {...props} />);
export const ReactComponent = SvgrMock;
export default SvgrMock;