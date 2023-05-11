import { FC, ReactNode, memo } from "react";
import cx from "classnames";
import { useWidth } from "../../hooks/useWidth";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  const width = useWidth();
  return (
    <div
      className={cx(
        "h-screen w-full p-[34px] " + className,
        { "pl-0": width > 1286 },
        { "pl-[34px]": width <= 1286 && width >= 768 },
        { "pl-[60px]": width <= 1180 && width >= 768 },
        { "pl-[75px]": width <= 1040 && width >= 768 },
        { "pl-[95px]": width <= 900 && width >= 768 },
        { "p-0": width <= 768 }
      )}
    >
      {children}
    </div>
  );
};

export default memo(Container);
