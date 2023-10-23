import { useMemo } from "react";
import styles from "./LinesCount2DotstrueSmoo.module.css";

const LinesCount2DotstrueSmoo = ({
  linesCount2DotstrueSmooLi,
  linesCount2DotstrueSmooWidth,
  linesCount2DotstrueSmooHeight,
  linesCount2DotstrueSmooPosition,
  linesCount2DotstrueSmooTop,
  linesCount2DotstrueSmooRight,
  linesCount2DotstrueSmooBottom,
  linesCount2DotstrueSmooLeft,
  linesCount2DotstrueSmooMaxWidth,
  linesCount2DotstrueSmooOverflow,
  linesCount2DotstrueSmooMaxHeight,
}) => {
  const linesCount2DotstrueSmooStyle = useMemo(() => {
    return {
      width: linesCount2DotstrueSmooWidth,
      height: linesCount2DotstrueSmooHeight,
      position: linesCount2DotstrueSmooPosition,
      top: linesCount2DotstrueSmooTop,
      right: linesCount2DotstrueSmooRight,
      bottom: linesCount2DotstrueSmooBottom,
      left: linesCount2DotstrueSmooLeft,
      maxWidth: linesCount2DotstrueSmooMaxWidth,
      overflow: linesCount2DotstrueSmooOverflow,
      maxHeight: linesCount2DotstrueSmooMaxHeight,
    };
  }, [
    linesCount2DotstrueSmooWidth,
    linesCount2DotstrueSmooHeight,
    linesCount2DotstrueSmooPosition,
    linesCount2DotstrueSmooTop,
    linesCount2DotstrueSmooRight,
    linesCount2DotstrueSmooBottom,
    linesCount2DotstrueSmooLeft,
    linesCount2DotstrueSmooMaxWidth,
    linesCount2DotstrueSmooOverflow,
    linesCount2DotstrueSmooMaxHeight,
  ]);

  return (
    <img
      className={styles.linesCount2DotstrueSmoo}
      alt=""
      src={linesCount2DotstrueSmooLi}
      style={linesCount2DotstrueSmooStyle}
    />
  );
};

export default LinesCount2DotstrueSmoo;
