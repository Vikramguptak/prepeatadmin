import SalesOverviewContainer from "../components/SalesOverviewContainer";
import SalesOverviewContainer1 from "../components/SalesOverviewContainer1";
import ProductSummaryContainer from "../components/ProductSummaryContainer";
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import ListMenu from "../components/ListMenu";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
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
      <SalesOverviewContainer />
      <SalesOverviewContainer1 />
      <ProductSummaryContainer />
      <div className={styles.dashboardChild} />
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
      <img className={styles.dataIcon} alt="" src="/data1.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.dashboard1}>Dashboard</div>
      <div className={styles.stackedBarChart}>
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
              linesCount2DotstrueSmooLi="/line-chart1.svg"
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
                listMenuBackgroundColor="#ffddc8"
                listMenuWidth="216px"
                listMenuAlignSelf="unset"
                listMenuPosition="unset"
                listMenuTop="unset"
                listMenuLeft="unset"
                listMenuHeight="unset"
                contentPadding="0px var(--padding-3xs)"
                contentBoxSizing="border-box"
                homeIconOverflow="unset"
                homeIconFlexShrink="unset"
                textColor="#000"
                textFontWeight="500"
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
                home="/order.svg"
                text="Tiffin Service"
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
              <div className={styles.content1}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content1}>
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
    </div>
  );
};

export default Dashboard;
import SalesOverviewContainer from "../components/SalesOverviewContainer";
import SalesOverviewContainer1 from "../components/SalesOverviewContainer1";
import ProductSummaryContainer from "../components/ProductSummaryContainer";
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import ListMenu from "../components/ListMenu";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
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
      <SalesOverviewContainer />
      <SalesOverviewContainer1 />
      <ProductSummaryContainer />
      <div className={styles.dashboardChild} />
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
      <img className={styles.dataIcon} alt="" src="/data1.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.dashboard1}>Dashboard</div>
      <div className={styles.stackedBarChart}>
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
              linesCount2DotstrueSmooLi="/line-chart1.svg"
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
                listMenuBackgroundColor="#ffddc8"
                listMenuWidth="216px"
                listMenuAlignSelf="unset"
                listMenuPosition="unset"
                listMenuTop="unset"
                listMenuLeft="unset"
                listMenuHeight="unset"
                contentPadding="0px var(--padding-3xs)"
                contentBoxSizing="border-box"
                homeIconOverflow="unset"
                homeIconFlexShrink="unset"
                textColor="#000"
                textFontWeight="500"
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
                home="/order.svg"
                text="Tiffin Service"
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
              <div className={styles.content1}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content1}>
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
    </div>
  );
};

export default Dashboard;
import SalesOverviewContainer from "../components/SalesOverviewContainer";
import SalesOverviewContainer1 from "../components/SalesOverviewContainer1";
import ProductSummaryContainer from "../components/ProductSummaryContainer";
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import ListMenu from "../components/ListMenu";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
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
      <SalesOverviewContainer />
      <SalesOverviewContainer1 />
      <ProductSummaryContainer />
      <div className={styles.dashboardChild} />
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
      <img className={styles.dataIcon} alt="" src="/data1.svg" />
      <div className={styles.div5}>₹50,000</div>
      <div className={styles.dashboard1}>Dashboard</div>
      <div className={styles.stackedBarChart}>
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
              linesCount2DotstrueSmooLi="/line-chart1.svg"
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
                listMenuBackgroundColor="#ffddc8"
                listMenuWidth="216px"
                listMenuAlignSelf="unset"
                listMenuPosition="unset"
                listMenuTop="unset"
                listMenuLeft="unset"
                listMenuHeight="unset"
                contentPadding="0px var(--padding-3xs)"
                contentBoxSizing="border-box"
                homeIconOverflow="unset"
                homeIconFlexShrink="unset"
                textColor="#000"
                textFontWeight="500"
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
                home="/order.svg"
                text="Tiffin Service"
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
              <div className={styles.content1}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content1}>
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
    </div>
  );
};

export default Dashboard;
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
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
      <div className={styles.salesOverview}>
        <div className={styles.salesOverview1}>Sales Overview</div>
        <div className={styles.graph}>
          <div className={styles.data}>
            <div className={styles.horizontal}>
              <b className={styles.dec}>Dec</b>
              <b className={styles.nov}>Nov</b>
              <b className={styles.oct}>Oct</b>
              <b className={styles.sep}>Sep</b>
              <b className={styles.aug}>Aug</b>
              <b className={styles.jul}>Jul</b>
              <b className={styles.jun}>Jun</b>
              <b className={styles.may}>May</b>
              <b className={styles.apr}>Apr</b>
              <b className={styles.mar}>Mar</b>
              <b className={styles.feb}>Feb</b>
              <b className={styles.jan}>Jan</b>
            </div>
            <div className={styles.vertical}>
              <b className={styles.b}>0</b>
              <b className={styles.b1}>100</b>
              <b className={styles.b2}>200</b>
              <b className={styles.b3}>300</b>
              <b className={styles.b4}>400</b>
              <b className={styles.b5}>500</b>
              <img className={styles.linesIcon} alt="" src="/lines.svg" />
            </div>
            <img className={styles.linesIcon1} alt="" src="/lines1.svg" />
          </div>
        </div>
        <div className={styles.months}>Months</div>
        <div className={styles.sales}>Sales</div>
      </div>
      <div className={styles.salesOverview2}>
        <div className={styles.summary}> Summary:</div>
        <div className={styles.quantityParent}>
          <img className={styles.quantityIcon} alt="" src="/quantity.svg" />
          <div className={styles.parent}>
            <div className={styles.div}>2300</div>
            <div className={styles.totalUsers}>Total Users</div>
          </div>
        </div>
        <div className={styles.onTheWayParent}>
          <img className={styles.quantityIcon} alt="" src="/on-the-way.svg" />
          <div className={styles.parent}>
            <div className={styles.div}>277272</div>
            <div className={styles.totalUsers}>Total Sales</div>
          </div>
        </div>
        <div className={styles.salesOverviewChild} />
      </div>
      <div className={styles.productSummary}>
        <div className={styles.suppliers}>
          <img className={styles.quantityIcon} alt="" src="/suppliers1.svg" />
          <div className={styles.parent}>
            <div className={styles.div}>1000</div>
            <div className={styles.totalUsers}>New Clients</div>
          </div>
        </div>
        <div className={styles.categories}>
          <img className={styles.quantityIcon} alt="" src="/categories.svg" />
          <div className={styles.parent}>
            <div className={styles.div}>187</div>
            <div className={styles.totalUsers}>New Feedback</div>
          </div>
        </div>
        <div className={styles.productSummaryChild} />
      </div>
      <div className={styles.dashboardChild} />
      <div className={styles.div4}>0</div>
      <div className={styles.month}>
        <div className={styles.jan1}>Jan</div>
        <div className={styles.jan1}>Feb</div>
        <div className={styles.jan1}>Mar</div>
        <div className={styles.jan1}>Apr</div>
        <div className={styles.jan1}>May</div>
      </div>
      <div className={styles.orders}>
        <div className={styles.div5}>50,000</div>
        <div className={styles.jan1}>30,000</div>
        <div className={styles.jan1}>20,000</div>
        <div className={styles.jan1}>10,000</div>
      </div>
      <div className={styles.totalSales1}>Total Sales -</div>
      <img className={styles.dataIcon} alt="" src="/data1.svg" />
      <div className={styles.div9}>₹50,000</div>
      <div className={styles.dashboard1}>Dashboard</div>
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
                <div className={styles.jan11}>Jan 1</div>
                <div className={styles.jan11}>Jan 4</div>
                <div className={styles.jan11}>Jan 7</div>
                <div className={styles.jan11}>Jan 10</div>
                <div className={styles.jan11}>Jan 13</div>
                <div className={styles.jan11}>Jan 16</div>
                <div className={styles.jan11}>Jan 19</div>
                <div className={styles.jan11}>Jan 22</div>
                <div className={styles.jan11}>Jan 25</div>
                <div className={styles.jan11}>Jan 28</div>
              </div>
            </div>
            <div className={styles.sales1}>Sales</div>
            <img
              className={styles.lineChartIcon}
              alt=""
              src="/line-chart1.svg"
            />
            <div className={styles.barChartGridChild} />
          </div>
        </div>
        <div className={styles.days}>Days</div>
      </div>
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
                    src="/asset-2-1@2x.png"
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
                <div className={styles.content2}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/suppliers.svg"
                  />
                  <div className={styles.text}>Profile</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content2}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content2}>
                  <img className={styles.searchIcon} alt="" src="/order.svg" />
                  <div className={styles.text}>Tiffin Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content2}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text}>Laundry Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content2}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text}>Home Makers</div>
                </div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>User Management</div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/manage-store.svg"
                />
                <div className={styles.text}>Orders</div>
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
            <div className={styles.content2}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/settings.svg"
              />
              <b className={styles.text9}>Settings</b>
            </div>
          </div>
          <div className={styles.listMenu9}>
            <div className={styles.content2}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/log-out.svg"
              />
              <div className={styles.text}>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
