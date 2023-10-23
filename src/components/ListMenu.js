import { useMemo } from "react";
import styles from "./ListMenu.module.css";

const ListMenu = ({
  home,
  text,
  showContent,
  showText,
  listMenuPadding,
  listMenuBackgroundColor,
  listMenuWidth,
  listMenuAlignSelf,
  listMenuPosition,
  listMenuTop,
  listMenuLeft,
  listMenuHeight,
  contentPadding,
  contentBoxSizing,
  homeIconOverflow,
  homeIconFlexShrink,
  textColor,
  textFontWeight,
}) => {
  const listMenuStyle = useMemo(() => {
    return {
      padding: listMenuPadding,
      backgroundColor: listMenuBackgroundColor,
      width: listMenuWidth,
      alignSelf: listMenuAlignSelf,
      position: listMenuPosition,
      top: listMenuTop,
      left: listMenuLeft,
      height: listMenuHeight,
    };
  }, [
    listMenuPadding,
    listMenuBackgroundColor,
    listMenuWidth,
    listMenuAlignSelf,
    listMenuPosition,
    listMenuTop,
    listMenuLeft,
    listMenuHeight,
  ]);

  const contentStyle = useMemo(() => {
    return {
      padding: contentPadding,
      boxSizing: contentBoxSizing,
    };
  }, [contentPadding, contentBoxSizing]);

  const homeIconStyle = useMemo(() => {
    return {
      overflow: homeIconOverflow,
      flexShrink: homeIconFlexShrink,
    };
  }, [homeIconOverflow, homeIconFlexShrink]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      fontWeight: textFontWeight,
    };
  }, [textColor, textFontWeight]);

  return (
    <div className={styles.listMenu} style={listMenuStyle}>
      {showContent && (
        <div className={styles.content} style={contentStyle}>
          <img
            className={styles.homeIcon}
            alt=""
            src={home}
            style={homeIconStyle}
          />
          {showText && (
            <div className={styles.text} style={textStyle}>
              {text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListMenu;
