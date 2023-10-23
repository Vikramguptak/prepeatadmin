import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import DashboardContainer1 from "../components/DashboardContainer1";
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
      <div className={styles.sales}>Sales</div>
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
            <div className={styles.sales1}>Sales</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <DashboardContainer1
        dimensionCode="/asset-2-1@2x.png"
        propTop="1px"
        propHeight="511px"
        propWidth="247px"
        propHeight1="680px"
        propBackgroundColor="unset"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propPadding1="0px var(--padding-3xs)"
        propBoxSizing1="border-box"
        propBackgroundColor2="unset"
        propPadding2="unset"
        propBoxSizing2="unset"
        propBackgroundColor3="unset"
        propHeight2="323px"
      />
    </div>
  );
};

export default ChefService;
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import DashboardContainer1 from "../components/DashboardContainer1";
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
      <div className={styles.sales}>Sales</div>
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
            <div className={styles.sales1}>Sales</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <DashboardContainer1
        dimensionCode="/asset-2-1@2x.png"
        propTop="1px"
        propHeight="511px"
        propWidth="247px"
        propHeight1="680px"
        propBackgroundColor="unset"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propPadding1="0px var(--padding-3xs)"
        propBoxSizing1="border-box"
        propBackgroundColor2="unset"
        propPadding2="unset"
        propBoxSizing2="unset"
        propBackgroundColor3="unset"
        propHeight2="323px"
      />
    </div>
  );
};

export default ChefService;
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import DashboardContainer1 from "../components/DashboardContainer1";
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
      <div className={styles.sales}>Sales</div>
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
            <div className={styles.sales1}>Sales</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <DashboardContainer1
        dimensionCode="/asset-2-1@2x.png"
        propTop="1px"
        propHeight="511px"
        propWidth="247px"
        propHeight1="680px"
        propBackgroundColor="unset"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propPadding1="0px var(--padding-3xs)"
        propBoxSizing1="border-box"
        propBackgroundColor2="unset"
        propPadding2="unset"
        propBoxSizing2="unset"
        propBackgroundColor3="unset"
        propHeight2="323px"
      />
    </div>
  );
};

export default ChefService;
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import DashboardContainer1 from "../components/DashboardContainer1";
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
      <div className={styles.sales}>Sales</div>
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
            <div className={styles.sales1}>Sales</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <DashboardContainer1
        dimensionCode="/asset-2-1@2x.png"
        propTop="1px"
        propHeight="511px"
        propWidth="247px"
        propHeight1="680px"
        propBackgroundColor="unset"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propPadding1="0px var(--padding-3xs)"
        propBoxSizing1="border-box"
        propBackgroundColor2="unset"
        propPadding2="unset"
        propBoxSizing2="unset"
        propBackgroundColor3="unset"
        propHeight2="323px"
      />
    </div>
  );
};

export default ChefService;
import LeftIconNORightIconYES from "../components/LeftIconNORightIconYES";
import FormContainer from "../components/FormContainer";
import LinesCount2DotstrueSmoo from "../components/LinesCount2DotstrueSmoo";
import DashboardContainer1 from "../components/DashboardContainer1";
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
      <div className={styles.sales}>Sales</div>
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
            <div className={styles.sales1}>Sales</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <DashboardContainer1
        dimensionCode="/asset-2-1@2x.png"
        propTop="1px"
        propHeight="511px"
        propWidth="247px"
        propHeight1="680px"
        propBackgroundColor="unset"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propPadding1="0px var(--padding-3xs)"
        propBoxSizing1="border-box"
        propBackgroundColor2="unset"
        propPadding2="unset"
        propBoxSizing2="unset"
        propBackgroundColor3="unset"
        propHeight2="323px"
      />
    </div>
  );
};

export default ChefService;
import styles from "./ChefService.module.css";

const ChefService = () => {
  return (
    <div className={styles.chefService}>
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
        <div className={styles.chefServiceStats}>
          Chef Service Stats: Year 2023
        </div>
        <div className={styles.groupChild} />
        <img className={styles.icons} alt="" src="/group.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.chefService1}>Chef Service</div>
      <div className={styles.month}>Month</div>
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
      <div className={styles.chefServiceChild} />
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
      <div className={styles.sales2}>Sales</div>
      <div className={styles.div}>0</div>
      <div className={styles.month1}>
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
      <div className={styles.month2}>Month</div>
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
                <div className={styles.content3}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text1}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
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
              <div className={styles.listMenu3}>
                <div className={styles.content1}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text1}>Home Makers</div>
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
    </div>
  );
};

export default ChefService;
