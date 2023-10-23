import { useMemo } from "react";
import ListMenu from "./ListMenu";
import styles from "./DashboardContainer1.module.css";

const DashboardContainer1 = ({
  dimensionCode,
  propTop,
  propHeight,
  propWidth,
  propHeight1,
  propBackgroundColor,
  propPadding,
  propBoxSizing,
  propBackgroundColor1,
  propPadding1,
  propBoxSizing1,
  propBackgroundColor2,
  propPadding2,
  propBoxSizing2,
  propBackgroundColor3,
  propHeight2,
}) => {
  const tiffinServiceStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv5Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const listMenu1Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const listMenuStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const contentStyle = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  const listMenuStyle1 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const contentStyle1 = useMemo(() => {
    return {
      padding: propPadding1,
      boxSizing: propBoxSizing1,
    };
  }, [propPadding1, propBoxSizing1]);

  const listMenuStyle2 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const contentStyle2 = useMemo(() => {
    return {
      padding: propPadding2,
      boxSizing: propBoxSizing2,
    };
  }, [propPadding2, propBoxSizing2]);

  const listMenuStyle3 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const frameDiv6Style = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className={styles.tiffinService} style={tiffinServiceStyle}>
      <div className={styles.listMenuWrapper} style={frameDiv5Style}>
        <div className={styles.listMenu} style={listMenu1Style}>
          <div className={styles.listMenu1}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img className={styles.asset21} alt="" src={dimensionCode} />
              </div>
            </div>
            <ListMenu
              home="/home1.svg"
              text="Dashboard"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="#fff"
              listMenuWidth="216px"
              listMenuAlignSelf="unset"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#000"
              textFontWeight="unset"
            />
            <ListMenu
              home="/suppliers.svg"
              text="Profile"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="#ffddc8"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="0px var(--padding-3xs)"
              contentBoxSizing="border-box"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
            <ListMenu
              home="/report.svg"
              text="Chef Service"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="#fff"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
            <ListMenu
              home="/order.svg"
              text="Tiffin Service"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="#fff"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
            <ListMenu
              home="/manage-store.svg"
              text="Laundry Service"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="unset"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
            <ListMenu
              home="/manage-store.svg"
              text="Home Makers"
              showContent
              showText
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="#fff"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
            <div className={styles.content}>
              <img
                className={styles.manageStoreIcon}
                alt=""
                src="/manage-store.svg"
              />
              <div className={styles.text}>User Management</div>
            </div>
            <div className={styles.content}>
              <img
                className={styles.manageStoreIcon}
                alt=""
                src="/manage-store.svg"
              />
              <div className={styles.text}>Orders</div>
            </div>
            <ListMenu
              home="/manage-store.svg"
              text="Catering Service"
              showContent={false}
              showText={false}
              listMenuPadding="var(--padding-base) 0px"
              listMenuBackgroundColor="unset"
              listMenuWidth="unset"
              listMenuAlignSelf="stretch"
              listMenuPosition="unset"
              listMenuTop="unset"
              listMenuLeft="unset"
              listMenuHeight="unset"
              contentPadding="unset"
              contentBoxSizing="unset"
              homeIconOverflow="unset"
              homeIconFlexShrink="unset"
              textColor="#5d6679"
              textFontWeight="500"
            />
          </div>
        </div>
      </div>
      <div className={styles.listMenuParent} style={frameDiv6Style}>
        <ListMenu
          home="/settings.svg"
          text="Settings"
          showContent
          showText
          listMenuPadding="var(--padding-3xs) 16px"
          listMenuBackgroundColor="unset"
          listMenuWidth="232px"
          listMenuAlignSelf="unset"
          listMenuPosition="unset"
          listMenuTop="unset"
          listMenuLeft="unset"
          listMenuHeight="unset"
          contentPadding="unset"
          contentBoxSizing="unset"
          homeIconOverflow="hidden"
          homeIconFlexShrink="0"
          textColor="#5d6679"
          textFontWeight="bold"
        />
        <ListMenu
          home="/log-out.svg"
          text="Log Out"
          showContent
          showText
          listMenuPadding="var(--padding-3xs) 16px"
          listMenuBackgroundColor="unset"
          listMenuWidth="232px"
          listMenuAlignSelf="unset"
          listMenuPosition="unset"
          listMenuTop="unset"
          listMenuLeft="unset"
          listMenuHeight="unset"
          contentPadding="unset"
          contentBoxSizing="unset"
          homeIconOverflow="hidden"
          homeIconFlexShrink="0"
          textColor="#5d6679"
          textFontWeight="500"
        />
      </div>
    </div>
  );
};

export default DashboardContainer1;
