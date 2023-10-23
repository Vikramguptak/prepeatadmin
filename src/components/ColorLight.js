import { useMemo } from "react";
import styles from "./ColorLight.module.css";

const ColorLight = ({
  businessTeam,
  starterPack,
  prop,
  displayStarsInGoogleOrgan,
  choosePlan,
  frameDivBackgroundColor,
  frameDivBorderRadius,
  frameDivPadding,
  frameDivGap,
  frameDivGap1,
  businessTeamColor,
  businessTeamFontSize,
  businessTeamWidth,
  frameDivBackgroundColor1,
  frameDivBorderRadius1,
  frameDivPadding1,
  starterPackColor,
  starterPackFontSize,
  monthWidth,
  monthFontSize,
  monthFontFamily,
  monthColor,
  monthFontWeight,
  pMarginBlockStart,
  pMarginBlockEnd,
  pPosition,
  pFontSize,
  pLineHeight,
  pFontWeight,
  pFontFamily,
  pColor,
  pTextAlign,
  pDisplay,
  pWidth,
  spanFontSize,
  spanFontFamily,
  spanColor,
  spanPosition,
  spanFontWeight,
  spanTextAlign,
  spanDisplay,
  bFontSize,
  bColor,
  bFontWeight,
  monthMargin,
  monthFontSize1,
  monthFontWeight1,
  monthFontFamily1,
  monthColor1,
  displayStarsInPosition,
  displayStarsInFontSize,
  displayStarsInLineHeight,
  displayStarsInFontWeight,
  displayStarsInColor,
  displayStarsInTextAlign,
  displayStarsInDisplay,
  displayStarsInWidth,
  displayStarsInMargin,
  frameDivBorderRadius2,
  frameDivBackgroundColor2,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivPadding2,
  frameDivBoxSizing,
  frameDivMarginTop,
  frameDivPosition,
  frameDivFontSize,
  frameDivLineHeight,
  frameDivFontWeight,
  frameDivFontFamily,
  frameDivColor,
  frameDivTextAlign,
  frameDivWidth,
  choosePlanPosition,
  choosePlanFontSize,
  choosePlanFontWeight,
  choosePlanFontFamily,
  choosePlanColor,
  choosePlanTextAlign,
  choosePlanDisplay,
  choosePlanBorderRadius,
  choosePlanBackgroundColor,
  choosePlanFlexDirection,
  choosePlanAlignItems,
  choosePlanJustifyContent,
  choosePlanPadding,
  choosePlanBoxSizing,
  choosePlanMarginTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      borderRadius: frameDivBorderRadius,
      padding: frameDivPadding,
      gap: frameDivGap,
    };
  }, [
    frameDivBackgroundColor,
    frameDivBorderRadius,
    frameDivPadding,
    frameDivGap,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const businessTeamStyle = useMemo(() => {
    return {
      color: businessTeamColor,
      fontSize: businessTeamFontSize,
      width: businessTeamWidth,
    };
  }, [businessTeamColor, businessTeamFontSize, businessTeamWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor1,
      borderRadius: frameDivBorderRadius1,
      padding: frameDivPadding1,
    };
  }, [frameDivBackgroundColor1, frameDivBorderRadius1, frameDivPadding1]);

  const starterPackStyle = useMemo(() => {
    return {
      color: starterPackColor,
      fontSize: starterPackFontSize,
    };
  }, [starterPackColor, starterPackFontSize]);

  const monthStyle = useMemo(() => {
    return {
      width: monthWidth,
      fontSize: monthFontSize,
      fontFamily: monthFontFamily,
      color: monthColor,
      fontWeight: monthFontWeight,
    };
  }, [monthWidth, monthFontSize, monthFontFamily, monthColor, monthFontWeight]);

  const pStyle = useMemo(() => {
    return {
      marginBlockStart: pMarginBlockStart,
      marginBlockEnd: pMarginBlockEnd,
      position: pPosition,
      fontSize: pFontSize,
      lineHeight: pLineHeight,
      fontWeight: pFontWeight,
      fontFamily: pFontFamily,
      color: pColor,
      textAlign: pTextAlign,
      display: pDisplay,
      width: pWidth,
    };
  }, [
    pMarginBlockStart,
    pMarginBlockEnd,
    pPosition,
    pFontSize,
    pLineHeight,
    pFontWeight,
    pFontFamily,
    pColor,
    pTextAlign,
    pDisplay,
    pWidth,
  ]);

  const spanStyle = useMemo(() => {
    return {
      fontSize: spanFontSize,
      fontFamily: spanFontFamily,
      color: spanColor,
      position: spanPosition,
      fontWeight: spanFontWeight,
      textAlign: spanTextAlign,
      display: spanDisplay,
    };
  }, [
    spanFontSize,
    spanFontFamily,
    spanColor,
    spanPosition,
    spanFontWeight,
    spanTextAlign,
    spanDisplay,
  ]);

  const bStyle = useMemo(() => {
    return {
      fontSize: bFontSize,
      color: bColor,
      fontWeight: bFontWeight,
    };
  }, [bFontSize, bColor, bFontWeight]);

  const month1Style = useMemo(() => {
    return {
      margin: monthMargin,
      fontSize: monthFontSize1,
      fontWeight: monthFontWeight1,
      fontFamily: monthFontFamily1,
      color: monthColor1,
    };
  }, [
    monthMargin,
    monthFontSize1,
    monthFontWeight1,
    monthFontFamily1,
    monthColor1,
  ]);

  const displayStarsInStyle = useMemo(() => {
    return {
      position: displayStarsInPosition,
      fontSize: displayStarsInFontSize,
      lineHeight: displayStarsInLineHeight,
      fontWeight: displayStarsInFontWeight,
      color: displayStarsInColor,
      textAlign: displayStarsInTextAlign,
      display: displayStarsInDisplay,
      width: displayStarsInWidth,
      margin: displayStarsInMargin,
    };
  }, [
    displayStarsInPosition,
    displayStarsInFontSize,
    displayStarsInLineHeight,
    displayStarsInFontWeight,
    displayStarsInColor,
    displayStarsInTextAlign,
    displayStarsInDisplay,
    displayStarsInWidth,
    displayStarsInMargin,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius2,
      backgroundColor: frameDivBackgroundColor2,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
      padding: frameDivPadding2,
      boxSizing: frameDivBoxSizing,
      marginTop: frameDivMarginTop,
      position: frameDivPosition,
      fontSize: frameDivFontSize,
      lineHeight: frameDivLineHeight,
      fontWeight: frameDivFontWeight,
      fontFamily: frameDivFontFamily,
      color: frameDivColor,
      textAlign: frameDivTextAlign,
      width: frameDivWidth,
    };
  }, [
    frameDivBorderRadius2,
    frameDivBackgroundColor2,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivPadding2,
    frameDivBoxSizing,
    frameDivMarginTop,
    frameDivPosition,
    frameDivFontSize,
    frameDivLineHeight,
    frameDivFontWeight,
    frameDivFontFamily,
    frameDivColor,
    frameDivTextAlign,
    frameDivWidth,
  ]);

  const choosePlanStyle = useMemo(() => {
    return {
      position: choosePlanPosition,
      fontSize: choosePlanFontSize,
      fontWeight: choosePlanFontWeight,
      fontFamily: choosePlanFontFamily,
      color: choosePlanColor,
      textAlign: choosePlanTextAlign,
      display: choosePlanDisplay,
      borderRadius: choosePlanBorderRadius,
      backgroundColor: choosePlanBackgroundColor,
      flexDirection: choosePlanFlexDirection,
      alignItems: choosePlanAlignItems,
      justifyContent: choosePlanJustifyContent,
      padding: choosePlanPadding,
      boxSizing: choosePlanBoxSizing,
      marginTop: choosePlanMarginTop,
    };
  }, [
    choosePlanPosition,
    choosePlanFontSize,
    choosePlanFontWeight,
    choosePlanFontFamily,
    choosePlanColor,
    choosePlanTextAlign,
    choosePlanDisplay,
    choosePlanBorderRadius,
    choosePlanBackgroundColor,
    choosePlanFlexDirection,
    choosePlanAlignItems,
    choosePlanJustifyContent,
    choosePlanPadding,
    choosePlanBoxSizing,
    choosePlanMarginTop,
  ]);

  return (
    <div className={styles.colorlight}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.businessTeamParent} style={frameDiv1Style}>
          <div className={styles.businessTeam} style={businessTeamStyle}>
            {businessTeam}
          </div>
          <div className={styles.starterPackWrapper} style={frameDiv2Style}>
            <div className={styles.starterPack} style={starterPackStyle}>
              {starterPack}
            </div>
          </div>
        </div>
        <div className={styles.month} style={monthStyle}>
          <p className={styles.p} style={pStyle}>
            <span className={styles.span} style={spanStyle}>
              $
            </span>
            <b style={bStyle}>{prop}</b>
          </p>
          <p className={styles.month1} style={month1Style}>
            /month
          </p>
        </div>
        <div className={styles.displayStarsIn} style={displayStarsInStyle}>
          {displayStarsInGoogleOrgan}
        </div>
      </div>
      <div className={styles.choosePlanWrapper} style={frameDiv3Style}>
        <div className={styles.choosePlan} style={choosePlanStyle}>
          {choosePlan}
        </div>
      </div>
    </div>
  );
};

export default ColorLight;
