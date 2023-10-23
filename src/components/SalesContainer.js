import { useMemo } from "react";
import LeftIconNORightIconYES from "./LeftIconNORightIconYES";
import FormContainer from "./FormContainer";
import LinesCount2DotstrueSmoo from "./LinesCount2DotstrueSmoo";
import styles from "./SalesContainer.module.css";

const SalesContainer = ({ jan28Left, jan28BoxShadow }) => {
  const stackedBarChartStyle = useMemo(() => {
    return {
      left: jan28Left,
      boxShadow: jan28BoxShadow,
    };
  }, [jan28Left, jan28BoxShadow]);

  return (
    <div className={styles.stackedBarChart} style={stackedBarChartStyle}>
      <LeftIconNORightIconYES
        cardHeader="Sales"
        rightValue="Daily Sales"
        rightValueColor="#6e7880"
        dividerBackgroundColor="#dde3e7"
      />
      <div className={styles.content}>
        <div className={styles.barChartGrid}>
          <FormContainer />
          <div className={styles.sales}>Sales</div>
          <LinesCount2DotstrueSmoo
            linesCount2DotstrueSmooLi="/line-chart.svg"
            linesCount2DotstrueSmooWidth="calc(100% - 54px)"
            linesCount2DotstrueSmooHeight="calc(100% + 1px)"
            linesCount2DotstrueSmooPosition="absolute"
            linesCount2DotstrueSmooTop="-15px"
            linesCount2DotstrueSmooRight="-1px"
            linesCount2DotstrueSmooBottom="14px"
            linesCount2DotstrueSmooLeft="55px"
            linesCount2DotstrueSmooMaxWidth="100%"
            linesCount2DotstrueSmooOverflow="hidden"
            linesCount2DotstrueSmooMaxHeight="100%"
          />
          <div className={styles.barChartGridChild} />
        </div>
      </div>
      <div className={styles.days}>Days</div>
    </div>
  );
};

export default SalesContainer;
