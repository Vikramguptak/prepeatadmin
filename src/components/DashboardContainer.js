import { useMemo } from "react";
import ListMenu from "./ListMenu";
import styles from "./DashboardContainer.module.css";

const DashboardContainer = ({
  managementTitle,
  propBackgroundColor,
  propPadding,
  propBoxSizing,
  propBackgroundColor1,
  propWidth,
  propBorderRadius,
  propPadding1,
  propBoxSizing1,
}) => {
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

  const content1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      width: propWidth,
      borderRadius: propBorderRadius,
      padding: propPadding1,
      boxSizing: propBoxSizing1,
    };
  }, [
    propBackgroundColor1,
    propWidth,
    propBorderRadius,
    propPadding1,
    propBoxSizing1,
  ]);

  return (
    <div className={styles.tiffinService}>
      <div className={styles.listMenuWrapper}>
        <div className={styles.listMenu}>
          <div className={styles.listMenu1}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img
                  className={styles.asset21}
                  alt=""
                  src="/asset-2-1@2x.png"
                />
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
            <ListMenu
              home="/manage-store.svg"
              text="Staff Management"
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
            <div className={styles.content} style={content1Style}>
              <img
                className={styles.manageStoreIcon}
                alt=""
                src="/manage-store1.svg"
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
      <div className={styles.listMenuParent}>
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

export default DashboardContainer;
