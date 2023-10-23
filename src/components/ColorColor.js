import { useMemo } from "react";
import ColorLight from "./ColorLight";
import styles from "./ColorColor.module.css";

const ColorColor = ({
  businessTeam,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivPadding,
  frameDivGap,
  frameDivGap1,
  businessTeamFontSize,
  businessTeamWidth,
  frameDivBorderRadius1,
  frameDivPadding1,
  starterPackFontSize,
  starterPackColor,
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
  spanColor,
  spanBorderRadius,
  spanBackgroundColor,
  spanDisplay,
  spanFlexDirection,
  spanAlignItems,
  spanJustifyContent,
  spanPadding,
  spanBoxSizing,
  spanMarginTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius,
      backgroundColor: frameDivBackgroundColor,
      padding: frameDivPadding,
      gap: frameDivGap,
    };
  }, [
    frameDivBorderRadius,
    frameDivBackgroundColor,
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
      fontSize: businessTeamFontSize,
      width: businessTeamWidth,
    };
  }, [businessTeamFontSize, businessTeamWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius1,
      padding: frameDivPadding1,
    };
  }, [frameDivBorderRadius1, frameDivPadding1]);

  const starterPackStyle = useMemo(() => {
    return {
      fontSize: starterPackFontSize,
      color: starterPackColor,
    };
  }, [starterPackFontSize, starterPackColor]);

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

  const span1Style = useMemo(() => {
    return {
      color: spanColor,
      borderRadius: spanBorderRadius,
      backgroundColor: spanBackgroundColor,
      display: spanDisplay,
      flexDirection: spanFlexDirection,
      alignItems: spanAlignItems,
      justifyContent: spanJustifyContent,
      padding: spanPadding,
      boxSizing: spanBoxSizing,
      marginTop: spanMarginTop,
    };
  }, [
    spanColor,
    spanBorderRadius,
    spanBackgroundColor,
    spanDisplay,
    spanFlexDirection,
    spanAlignItems,
    spanJustifyContent,
    spanPadding,
    spanBoxSizing,
    spanMarginTop,
  ]);

  return (
    <div className={styles.colorcolor}>
      <ColorLight
        businessTeam="Business team"
        starterPack="Starter Pack"
        prop="$"
        displayStarsInGoogleOrgan="/month"
        frameDivBackgroundColor="#4e00b2"
        frameDivBorderRadius="12px"
        frameDivPadding="var(--padding-17xl) var(--padding-xs)"
        frameDivGap="18px"
        frameDivGap1="5px"
        businessTeamColor="#fff"
        businessTeamFontSize="12px"
        businessTeamWidth="118px"
        frameDivBackgroundColor1="#fff"
        frameDivBorderRadius1="100px"
        frameDivPadding1="var(--padding-7xs) var(--padding-3xl)"
        starterPackColor="#4e00b2"
        starterPackFontSize="18px"
        monthWidth="179px"
        monthFontSize="unset"
        monthFontFamily="unset"
        monthColor="unset"
        monthFontWeight="unset"
        pMarginBlockStart="0"
        pMarginBlockEnd="2px"
        pPosition="unset"
        pFontSize="unset"
        pLineHeight="unset"
        pFontWeight="unset"
        pFontFamily="unset"
        pColor="unset"
        pTextAlign="unset"
        pDisplay="unset"
        pWidth="unset"
        bFontSize="18px"
        bColor="unset"
        bFontWeight="unset"
        displayStarsInPosition="unset"
        displayStarsInFontSize="16px"
        displayStarsInLineHeight="unset"
        displayStarsInFontWeight="600"
        displayStarsInColor="#aeaeae"
        displayStarsInTextAlign="unset"
        displayStarsInDisplay="unset"
        displayStarsInWidth="unset"
        displayStarsInMargin="0"
        frameDivBorderRadius2="unset"
        frameDivBackgroundColor2="unset"
        frameDivDisplay="inline-block"
        frameDivFlexDirection="unset"
        frameDivAlignItems="unset"
        frameDivJustifyContent="unset"
        frameDivPadding2="unset"
        frameDivBoxSizing="unset"
        frameDivMarginTop="unset"
        frameDivPosition="relative"
        frameDivFontSize="12px"
        frameDivLineHeight="170%"
        frameDivFontWeight="500"
        frameDivFontFamily="Inter"
        frameDivColor="#fff"
        frameDivTextAlign="center"
        frameDivWidth="155px"
        choosePlanPosition="unset"
        choosePlanFontSize="unset"
        choosePlanFontWeight="unset"
        choosePlanFontFamily="unset"
        choosePlanColor="unset"
        choosePlanTextAlign="unset"
        choosePlanDisplay="flex"
        choosePlanBorderRadius="27px"
        choosePlanBackgroundColor="#fff"
        choosePlanFlexDirection="row"
        choosePlanAlignItems="center"
        choosePlanJustifyContent="flex-start"
        choosePlanPadding="var(--padding-7xs) var(--padding-sm)"
        choosePlanBoxSizing="border-box"
        choosePlanMarginTop="-13px"
      />
    </div>
  );
};

export default ColorColor;
