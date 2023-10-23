import DashboardContainer from "../components/DashboardContainer";
import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={styles.orders}>
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
      <div className={styles.div}>0</div>
      <div className={styles.orders1}>Orders</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>
          Search product, supplier, order
        </div>
      </div>
      <div className={styles.overallInventory}>
        <div className={styles.overallOrders}>Overall Orders</div>
        <div className={styles.overallInventoryChild} />
        <div className={styles.overallInventoryItem} />
        <div className={styles.overallInventoryInner} />
        <div className={styles.onTheWayParent}>
          <div className={styles.onTheWay}>On the way</div>
          <div className={styles.parent}>
            <div className={styles.onTheWay}>12</div>
            <div className={styles.div2}>₹ 2356</div>
          </div>
          <div className={styles.orderedParent}>
            <div className={styles.ordered}>Ordered</div>
            <div className={styles.ordered}>Cost</div>
          </div>
        </div>
        <div className={styles.totalCancelledParent}>
          <div className={styles.onTheWay}>Total Cancelled</div>
          <div className={styles.frameParent}>
            <div className={styles.group}>
              <div className={styles.onTheWay}>5</div>
              <div className={styles.onTheWay}>₹2500</div>
            </div>
            <div className={styles.orderedParent}>
              <div className={styles.ordered}>Last 7 days</div>
              <div className={styles.ordered}>Cost</div>
            </div>
          </div>
        </div>
        <div className={styles.totalReceivedParent}>
          <div className={styles.onTheWay}>Total Received</div>
          <div className={styles.frameParent}>
            <div className={styles.container}>
              <div className={styles.onTheWay}>32</div>
              <div className={styles.onTheWay}>₹25000</div>
            </div>
            <div className={styles.last7DaysGroup}>
              <div className={styles.ordered}>Last 7 days</div>
              <div className={styles.ordered}>Revenue</div>
            </div>
          </div>
        </div>
        <div className={styles.totalOrdersParent}>
          <div className={styles.onTheWay}>Total Orders</div>
          <div className={styles.div7}>37</div>
          <div className={styles.last7Days2}>Last 7 days</div>
        </div>
      </div>
      <div className={styles.button02Parent}>
        <div className={styles.button02}>
          <div className={styles.buttonBase}>
            <div className={styles.text}>Order History</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonBase1}>
            <img
              className={styles.filtersLinesIcon}
              alt=""
              src="/filters-lines.svg"
            />
            <div className={styles.text}>Filters</div>
          </div>
        </div>
        <div className={styles.products}>Products</div>
        <div className={styles.orderValue}>Order Value</div>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.confirmed}>Confirmed</div>
        <div className={styles.cancelled}>Cancelled</div>
        <div className={styles.outForDelivery}>Out for delivery</div>
        <div className={styles.cancelled1}>Cancelled</div>
        <div className={styles.outForDelivery1}>Out for delivery</div>
        <div className={styles.delayed}>Delayed</div>
        <div className={styles.confirmed1}>Confirmed</div>
        <div className={styles.delayed1}>Delayed</div>
        <div className={styles.snacks}>Snacks</div>
        <div className={styles.div8}>₹2557</div>
        <div className={styles.pm}>21/12/22 | 09:00pm</div>
        <div className={styles.div9}>5724</div>
        <div className={styles.packets}>22 Packets</div>
        <div className={styles.lunch}>Lunch</div>
        <div className={styles.div10}>₹4075</div>
        <div className={styles.pm1}>05/12/22 | 10:00pm</div>
        <div className={styles.div11}>2775</div>
        <div className={styles.packets1}>36 Packets</div>
        <div className={styles.southIndian}>South Indian</div>
        <div className={styles.div12}>₹5052</div>
        <div className={styles.am}>08/12/22 | 11:00am</div>
        <div className={styles.div13}>2275</div>
        <div className={styles.packets2}>14 Packets</div>
        <div className={styles.chinese}>Chinese</div>
        <div className={styles.div14}>₹5370</div>
        <div className={styles.am1}>09/1/23 | 12:00am</div>
        <div className={styles.div15}>2427</div>
        <div className={styles.packets3}>5 Packets</div>
        <div className={styles.continental}>Continental</div>
        <div className={styles.div16}>₹6065</div>
        <div className={styles.pm2}>09/1/23 | 02:00pm</div>
        <div className={styles.div17}>2578</div>
        <div className={styles.packets4}>10 Packets</div>
        <div className={styles.ariel}>Ariel</div>
        <div className={styles.div18}>₹4078</div>
        <div className={styles.am2}>15/12/23 | 10:30am</div>
        <div className={styles.div19}>2757</div>
        <div className={styles.packets5}>23 Packets</div>
        <div className={styles.italian}>Italian</div>
        <div className={styles.div20}>₹3559</div>
        <div className={styles.am3}>06/06/23 | 12:00am</div>
        <div className={styles.div21}>3757</div>
        <div className={styles.packets6}>43 Packets</div>
        <div className={styles.fastFoods}>Fast Foods</div>
        <div className={styles.div22}>₹2055</div>
        <div className={styles.pm3}>11/11/22 | 05:00pm</div>
        <div className={styles.div23}>2474</div>
        <div className={styles.packets7}>41 Packets</div>
        <div className={styles.orderId}>Order ID</div>
        <div className={styles.expectedDelivery}>Expected Delivery</div>
        <div className={styles.status}>Status</div>
        <img className={styles.frameChild} alt="" src="/vector-40.svg" />
        <img className={styles.frameItem} alt="" src="/vector-40.svg" />
        <img className={styles.frameInner} alt="" src="/vector-40.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-40.svg" />
        <div className={styles.orders2}>Orders</div>
        <div className={styles.northIndian}>North Indian</div>
        <div className={styles.div24}>₹4306</div>
        <div className={styles.packets8}>43 Packets</div>
        <div className={styles.div25}>7535</div>
        <div className={styles.pm4}>11/12/22 | 08:00pm</div>
        <div className={styles.delayed2}>Delayed</div>
        <div className={styles.replaceButton}>
          <div className={styles.text}>Next</div>
        </div>
        <div className={styles.details}>
          <span>{`Page `}</span>
          <span className={styles.span}>1</span>
          <span>{` of `}</span>
          <span className={styles.span}>10</span>
        </div>
        <div className={styles.replaceButton1}>
          <div className={styles.text}>Previous</div>
        </div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#fff"
        propPadding="unset"
        propBoxSizing="unset"
        propBackgroundColor1="#ffddc8"
        propWidth="216px"
        propBorderRadius="8px"
        propPadding1="0px 0px 0px var(--padding-3xs)"
        propBoxSizing1="border-box"
      />
    </div>
  );
};

export default Orders;
import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={styles.orders}>
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
      <div className={styles.div}>0</div>
      <div className={styles.orders1}>Orders</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>
          Search product, supplier, order
        </div>
      </div>
      <div className={styles.overallInventory}>
        <div className={styles.overallOrders}>Overall Orders</div>
        <div className={styles.overallInventoryChild} />
        <div className={styles.overallInventoryItem} />
        <div className={styles.overallInventoryInner} />
        <div className={styles.onTheWayParent}>
          <div className={styles.onTheWay}>On the way</div>
          <div className={styles.parent}>
            <div className={styles.onTheWay}>12</div>
            <div className={styles.div2}>₹ 2356</div>
          </div>
          <div className={styles.orderedParent}>
            <div className={styles.ordered}>Ordered</div>
            <div className={styles.ordered}>Cost</div>
          </div>
        </div>
        <div className={styles.totalCancelledParent}>
          <div className={styles.onTheWay}>Total Cancelled</div>
          <div className={styles.frameParent}>
            <div className={styles.group}>
              <div className={styles.onTheWay}>5</div>
              <div className={styles.onTheWay}>₹2500</div>
            </div>
            <div className={styles.orderedParent}>
              <div className={styles.ordered}>Last 7 days</div>
              <div className={styles.ordered}>Cost</div>
            </div>
          </div>
        </div>
        <div className={styles.totalReceivedParent}>
          <div className={styles.onTheWay}>Total Received</div>
          <div className={styles.frameParent}>
            <div className={styles.container}>
              <div className={styles.onTheWay}>32</div>
              <div className={styles.onTheWay}>₹25000</div>
            </div>
            <div className={styles.last7DaysGroup}>
              <div className={styles.ordered}>Last 7 days</div>
              <div className={styles.ordered}>Revenue</div>
            </div>
          </div>
        </div>
        <div className={styles.totalOrdersParent}>
          <div className={styles.onTheWay}>Total Orders</div>
          <div className={styles.div7}>37</div>
          <div className={styles.last7Days2}>Last 7 days</div>
        </div>
      </div>
      <div className={styles.button02Parent}>
        <div className={styles.button02}>
          <div className={styles.buttonBase}>
            <div className={styles.text}>Order History</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonBase1}>
            <img
              className={styles.filtersLinesIcon}
              alt=""
              src="/filters-lines.svg"
            />
            <div className={styles.text}>Filters</div>
          </div>
        </div>
        <div className={styles.products}>Products</div>
        <div className={styles.orderValue}>Order Value</div>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.confirmed}>Confirmed</div>
        <div className={styles.cancelled}>Cancelled</div>
        <div className={styles.outForDelivery}>Out for delivery</div>
        <div className={styles.cancelled1}>Cancelled</div>
        <div className={styles.outForDelivery1}>Out for delivery</div>
        <div className={styles.delayed}>Delayed</div>
        <div className={styles.confirmed1}>Confirmed</div>
        <div className={styles.delayed1}>Delayed</div>
        <div className={styles.snacks}>Snacks</div>
        <div className={styles.div8}>₹2557</div>
        <div className={styles.pm}>21/12/22 | 09:00pm</div>
        <div className={styles.div9}>5724</div>
        <div className={styles.packets}>22 Packets</div>
        <div className={styles.lunch}>Lunch</div>
        <div className={styles.div10}>₹4075</div>
        <div className={styles.pm1}>05/12/22 | 10:00pm</div>
        <div className={styles.div11}>2775</div>
        <div className={styles.packets1}>36 Packets</div>
        <div className={styles.southIndian}>South Indian</div>
        <div className={styles.div12}>₹5052</div>
        <div className={styles.am}>08/12/22 | 11:00am</div>
        <div className={styles.div13}>2275</div>
        <div className={styles.packets2}>14 Packets</div>
        <div className={styles.chinese}>Chinese</div>
        <div className={styles.div14}>₹5370</div>
        <div className={styles.am1}>09/1/23 | 12:00am</div>
        <div className={styles.div15}>2427</div>
        <div className={styles.packets3}>5 Packets</div>
        <div className={styles.continental}>Continental</div>
        <div className={styles.div16}>₹6065</div>
        <div className={styles.pm2}>09/1/23 | 02:00pm</div>
        <div className={styles.div17}>2578</div>
        <div className={styles.packets4}>10 Packets</div>
        <div className={styles.ariel}>Ariel</div>
        <div className={styles.div18}>₹4078</div>
        <div className={styles.am2}>15/12/23 | 10:30am</div>
        <div className={styles.div19}>2757</div>
        <div className={styles.packets5}>23 Packets</div>
        <div className={styles.italian}>Italian</div>
        <div className={styles.div20}>₹3559</div>
        <div className={styles.am3}>06/06/23 | 12:00am</div>
        <div className={styles.div21}>3757</div>
        <div className={styles.packets6}>43 Packets</div>
        <div className={styles.fastFoods}>Fast Foods</div>
        <div className={styles.div22}>₹2055</div>
        <div className={styles.pm3}>11/11/22 | 05:00pm</div>
        <div className={styles.div23}>2474</div>
        <div className={styles.packets7}>41 Packets</div>
        <div className={styles.orderId}>Order ID</div>
        <div className={styles.expectedDelivery}>Expected Delivery</div>
        <div className={styles.status}>Status</div>
        <img className={styles.frameChild} alt="" src="/vector-40.svg" />
        <img className={styles.frameItem} alt="" src="/vector-40.svg" />
        <img className={styles.frameInner} alt="" src="/vector-40.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-40.svg" />
        <div className={styles.orders2}>Orders</div>
        <div className={styles.northIndian}>North Indian</div>
        <div className={styles.div24}>₹4306</div>
        <div className={styles.packets8}>43 Packets</div>
        <div className={styles.div25}>7535</div>
        <div className={styles.pm4}>11/12/22 | 08:00pm</div>
        <div className={styles.delayed2}>Delayed</div>
        <div className={styles.replaceButton}>
          <div className={styles.text}>Next</div>
        </div>
        <div className={styles.details}>
          <span>{`Page `}</span>
          <span className={styles.span}>1</span>
          <span>{` of `}</span>
          <span className={styles.span}>10</span>
        </div>
        <div className={styles.replaceButton1}>
          <div className={styles.text}>Previous</div>
        </div>
      </div>
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
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/home1.svg" />
                  <div className={styles.text4}>Dashboard</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/suppliers.svg"
                  />
                  <div className={styles.text5}>Profile</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text5}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/order.svg" />
                  <div className={styles.text5}>Tiffin Service</div>
                </div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text5}>Laundry Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text5}>Home Makers</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text5}>User Management</div>
                </div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.notificationIcon}
                  alt=""
                  src="/manage-store1.svg"
                />
                <div className={styles.text5}>Orders</div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content8}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text12}>Catering Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listMenuParent}>
          <div className={styles.listMenu10}>
            <div className={styles.content}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/settings.svg"
              />
              <b className={styles.text4}>Settings</b>
            </div>
          </div>
          <div className={styles.listMenu10}>
            <div className={styles.content}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/log-out.svg"
              />
              <div className={styles.text5}>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
