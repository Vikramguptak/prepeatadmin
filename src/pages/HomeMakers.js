import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import SalesContainer from "../components/SalesContainer";
import ListMenu from "../components/ListMenu";
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <SalesContainer />
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales1}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
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
                textFontWeight="bold"
              />
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.searchIcon}
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
      <ListMenu
        home="/home1.svg"
        text="Dashboard"
        showContent={false}
        showText
        listMenuPadding="var(--padding-base) 0px"
        listMenuBackgroundColor="#ffddc8"
        listMenuWidth="10px"
        listMenuAlignSelf="unset"
        listMenuPosition="absolute"
        listMenuTop="434px"
        listMenuLeft="0px"
        listMenuHeight="55px"
        contentPadding="0px var(--padding-3xs)"
        contentBoxSizing="border-box"
        homeIconOverflow="unset"
        homeIconFlexShrink="unset"
        textColor="#000"
        textFontWeight="500"
      />
    </div>
  );
};

export default HomeMakers;
import styles from "./HomeMakers.module.css";

const HomeMakers = () => {
  return (
    <div className={styles.homeMakers}>
      <div className={styles.topBar} />
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <div className={styles.searchProductSupplier}>
            Search product, supplier, order
          </div>
        </div>
        <div className={styles.notificationParent}>
          <div className={styles.notification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className={styles.notificationGroup}>
        <div className={styles.notification}>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.homeMakers1}>Home Makers</div>
      <div className={styles.boundsParent}>
        <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
        <div className={styles.roxieWard}>JAN</div>
        <div className={styles.roxieWard1}>APR</div>
        <div className={styles.roxieWard2}>JUL</div>
        <div className={styles.roxieWard3}>OCT</div>
        <div className={styles.roxieWard4}>FEB</div>
        <div className={styles.roxieWard5}>MAY</div>
        <div className={styles.roxieWard6}>AUG</div>
        <div className={styles.roxieWard7}>NOV</div>
        <div className={styles.roxieWard8}>MAR</div>
        <div className={styles.roxieWard9}>JUN</div>
        <div className={styles.roxieWard10}>SEP</div>
        <div className={styles.roxieWard11}>DEC</div>
        <div className={styles.roxieWardParent}>
          <div className={styles.roxieWard12}>400k</div>
          <div className={styles.roxieWard13}>300k</div>
          <div className={styles.roxieWard14}>200k</div>
          <div className={styles.roxieWard15}>100k</div>
          <div className={styles.roxieWard16}>0</div>
        </div>
        <div className={styles.homeMakersStats}>
          Home Makers Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.monthly}>Monthly</div>
      <div className={styles.sales}>Sales</div>
      <div className={styles.stackedBarChart}>
        <div className={styles.cardblockscardheader}>
          <div className={styles.contentWrapper}>
            <div className={styles.cardHeader}>Sales</div>
            <div className={styles.rightValue}>
              <div className={styles.rightValue1}>Daily Sales</div>
              <div className={styles.chevronDown24}>
                <img
                  className={styles.notificationIcon}
                  alt=""
                  src="/container.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.content}>
          <div className={styles.barChartGrid}>
            <div className={styles.chartGrid}>
              <div className={styles.hLinesValues}>
                <div className={styles.horizontalLine}>
                  <div className={styles.leftValue}>150M</div>
                  <div className={styles.hLine} />
                </div>
                <div className={styles.horizontalLine}>
                  <div className={styles.leftValue}>125M</div>
                  <div className={styles.hLine} />
                </div>
                <div className={styles.horizontalLine2}>
                  <div className={styles.leftValue}>75M</div>
                  <div className={styles.hLine} />
                </div>
                <div className={styles.horizontalLine2}>
                  <div className={styles.leftValue}>50M</div>
                  <div className={styles.hLine} />
                </div>
                <div className={styles.horizontalLine2}>
                  <div className={styles.leftValue}>25M</div>
                  <div className={styles.hLine} />
                </div>
                <div className={styles.horizontalLine5}>
                  <div className={styles.leftValue}>0</div>
                  <div className={styles.hLine5} />
                </div>
              </div>
              <div className={styles.xAxisValues}>
                <div className={styles.jan1}>Jan 1</div>
                <div className={styles.jan1}>Jan 4</div>
                <div className={styles.jan1}>Jan 7</div>
                <div className={styles.jan1}>Jan 10</div>
                <div className={styles.jan1}>Jan 13</div>
                <div className={styles.jan1}>Jan 16</div>
                <div className={styles.jan1}>Jan 19</div>
                <div className={styles.jan1}>Jan 22</div>
                <div className={styles.jan1}>Jan 25</div>
                <div className={styles.jan1}>Jan 28</div>
              </div>
            </div>
            <div className={styles.sales1}>Sales</div>
            <img
              className={styles.lineChartIcon}
              alt=""
              src="/line-chart.svg"
            />
            <div className={styles.barChartGridChild} />
          </div>
        </div>
        <div className={styles.days}>Days</div>
      </div>
      <div className={styles.homeMakersChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month}>
        <div className={styles.jan}>Jan</div>
        <div className={styles.jan}>Feb</div>
        <div className={styles.jan}>Mar</div>
        <div className={styles.jan}>Apr</div>
        <div className={styles.jan}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div1}>50,000</div>
        <div className={styles.jan}>30,000</div>
        <div className={styles.jan}>20,000</div>
        <div className={styles.jan}>10,000</div>
      </div>
      <div className={styles.totalSales}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.month1}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.tiffinService}>
        <div className={styles.listMenuWrapper}>
          <div className={styles.listMenu}>
            <div className={styles.listMenu1}>
              <div className={styles.top}>
                <div className={styles.logo}>
                  <img
                    className={styles.asset21}
                    alt=""
                    src="/asset-2-11@2x.png"
                  />
                </div>
              </div>
              <div className={styles.listMenu2}>
                <div className={styles.content1}>
                  <img className={styles.searchIcon} alt="" src="/home1.svg" />
                  <div className={styles.text}>Dashboard</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content1}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/suppliers.svg"
                  />
                  <div className={styles.text1}>Profile</div>
                </div>
              </div>
              <div className={styles.listMenu4}>
                <div className={styles.content1}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text1}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu4}>
                <div className={styles.content1}>
                  <img className={styles.searchIcon} alt="" src="/order.svg" />
                  <div className={styles.text1}>Tiffin Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content1}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text1}>Laundry Service</div>
                </div>
              </div>
              <div className={styles.listMenu7}>
                <div className={styles.content6}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <b className={styles.text}>Home Makers</b>
                </div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text1}>User Management</div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text1}>Orders</div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content9}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text8}>Catering Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listMenuParent}>
          <div className={styles.listMenu9}>
            <div className={styles.content1}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/settings.svg"
              />
              <b className={styles.text}>Settings</b>
            </div>
          </div>
          <div className={styles.listMenu9}>
            <div className={styles.content1}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/log-out.svg"
              />
              <div className={styles.text1}>Log Out</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listMenu11}>
        <div className={styles.content12}>
          <img className={styles.searchIcon} alt="" src="/home1.svg" />
          <div className={styles.text1}>Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default HomeMakers;
