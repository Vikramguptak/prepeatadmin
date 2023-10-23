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
