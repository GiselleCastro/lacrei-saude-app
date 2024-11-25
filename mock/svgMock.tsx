import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
const SvgrMock: ForwardRefExoticComponent<RefAttributes<HTMLSpanElement>> =
  // eslint-disable-next-line react/display-name
  forwardRef((props, ref) => <span ref={ref} {...props} />);
export const ReactComponent = SvgrMock;
export default SvgrMock;
