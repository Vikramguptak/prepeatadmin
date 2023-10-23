import DashboardContainer from "../components/DashboardContainer";
import styles from "./StaffManagement.module.css";

const StaffManagement = () => {
  return (
    <div className={styles.staffManagement}>
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
      <div className={styles.staffManagement1}>Staff Management</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <img
              className={styles.filtersLinesIcon}
              alt=""
              src="/filters-lines.svg"
            />
            <div className={styles.text}>Filters</div>
          </div>
        </div>
        <div className={styles.name}>Name</div>
        <div className={styles.role}>Role</div>
        <div className={styles.service}>Service</div>
        <div className={styles.hrithik}>Hrithik</div>
        <div className={styles.staff}>Staff</div>
        <div className={styles.tiffin}>{`Tiffin `}</div>
        <div className={styles.rishabh}>Rishabh</div>
        <div className={styles.staff1}>Staff</div>
        <div className={styles.laundry}>Laundry</div>
        <div className={styles.manisha}>Manisha</div>
        <div className={styles.staff2}>Staff</div>
        <div className={styles.tiffinlaundry}>Tiffin/Laundry</div>
        <div className={styles.shreya}>Shreya</div>
        <div className={styles.staff3}>Staff</div>
        <div className={styles.chef}>{`Chef `}</div>
        <div className={styles.kaustubh}>Kaustubh</div>
        <div className={styles.staff4}>Staff</div>
        <div className={styles.homemaker}>{`Homemaker `}</div>
        <div className={styles.dinesh}>Dinesh</div>
        <div className={styles.staff5}>Staff</div>
        <div className={styles.laundry1}>{`Laundry `}</div>
        <div className={styles.prakhar}>Prakhar</div>
        <div className={styles.chef1}>{`Chef `}</div>
        <div className={styles.ram}>Ram</div>
        <div className={styles.staff6}>Staff</div>
        <div className={styles.laundryhomemaker}>Laundry/Homemaker</div>
        <img className={styles.frameChild} alt="" src="/vector-40.svg" />
        <img className={styles.frameItem} alt="" src="/vector-40.svg" />
        <img className={styles.frameInner} alt="" src="/vector-40.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-40.svg" />
        <div className={styles.staffsList}>Staff’s List</div>
        <div className={styles.tushar}>Tushar</div>
        <div className={styles.admin}>Admin</div>
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
        <div className={styles.button1}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button2}>
          <div className={styles.suspend}>{`Suspended `}</div>
        </div>
        <div className={styles.button3}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button4}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button5}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button6}>
          <div className={styles.suspend}>
            <span>Suspend</span>
            <span className={styles.span2}>{` `}</span>
          </div>
        </div>
        <div className={styles.button7}>
          <div className={styles.suspend}>Suspended</div>
        </div>
        <div className={styles.button8}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button9}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button10}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button11}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button12}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button13}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button14}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button15}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button16}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.staff7}>Staff</div>
        <div className={styles.button17}>
          <div className={styles.suspend}>Add User</div>
        </div>
      </div>
      <DashboardContainer managementTitle="Staff Management" />
    </div>
  );
};

export default StaffManagement;
import styles from "./StaffManagement.module.css";

const StaffManagement = () => {
  return (
    <div className={styles.staffManagement}>
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
      <div className={styles.staffManagement1}>Staff Management</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <img
              className={styles.filtersLinesIcon}
              alt=""
              src="/filters-lines.svg"
            />
            <div className={styles.text}>Filters</div>
          </div>
        </div>
        <div className={styles.name}>Name</div>
        <div className={styles.role}>Role</div>
        <div className={styles.service}>Service</div>
        <div className={styles.hrithik}>Hrithik</div>
        <div className={styles.staff}>Staff</div>
        <div className={styles.tiffin}>{`Tiffin `}</div>
        <div className={styles.rishabh}>Rishabh</div>
        <div className={styles.staff1}>Staff</div>
        <div className={styles.laundry}>Laundry</div>
        <div className={styles.manisha}>Manisha</div>
        <div className={styles.staff2}>Staff</div>
        <div className={styles.tiffinlaundry}>Tiffin/Laundry</div>
        <div className={styles.shreya}>Shreya</div>
        <div className={styles.staff3}>Staff</div>
        <div className={styles.chef}>{`Chef `}</div>
        <div className={styles.kaustubh}>Kaustubh</div>
        <div className={styles.staff4}>Staff</div>
        <div className={styles.homemaker}>{`Homemaker `}</div>
        <div className={styles.dinesh}>Dinesh</div>
        <div className={styles.staff5}>Staff</div>
        <div className={styles.laundry1}>{`Laundry `}</div>
        <div className={styles.prakhar}>Prakhar</div>
        <div className={styles.chef1}>{`Chef `}</div>
        <div className={styles.ram}>Ram</div>
        <div className={styles.staff6}>Staff</div>
        <div className={styles.laundryhomemaker}>Laundry/Homemaker</div>
        <img className={styles.frameChild} alt="" src="/vector-40.svg" />
        <img className={styles.frameItem} alt="" src="/vector-40.svg" />
        <img className={styles.frameInner} alt="" src="/vector-40.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-40.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-40.svg" />
        <div className={styles.staffsList}>Staff’s List</div>
        <div className={styles.tushar}>Tushar</div>
        <div className={styles.admin}>Admin</div>
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
        <div className={styles.button1}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button2}>
          <div className={styles.suspend}>{`Suspended `}</div>
        </div>
        <div className={styles.button3}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button4}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button5}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button6}>
          <div className={styles.suspend}>
            <span>Suspend</span>
            <span className={styles.span2}>{` `}</span>
          </div>
        </div>
        <div className={styles.button7}>
          <div className={styles.suspend}>Suspended</div>
        </div>
        <div className={styles.button8}>
          <div className={styles.suspend}>{`Suspend `}</div>
        </div>
        <div className={styles.button9}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button10}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button11}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button12}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button13}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button14}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button15}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.button16}>
          <div className={styles.suspend}>Delete</div>
        </div>
        <div className={styles.staff7}>Staff</div>
        <div className={styles.button17}>
          <div className={styles.suspend}>Add User</div>
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
                  <div className={styles.text3}>Dashboard</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/suppliers.svg"
                  />
                  <div className={styles.text4}>Profile</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text4}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/order.svg" />
                  <div className={styles.text4}>Tiffin Service</div>
                </div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text4}>Laundry Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text4}>Home Makers</div>
                </div>
              </div>
              <div className={styles.listMenu8}>
                <div className={styles.content6}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text4}>Staff Management</div>
                </div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.notificationIcon}
                  alt=""
                  src="/manage-store1.svg"
                />
                <div className={styles.text4}>Orders</div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content8}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text11}>Catering Service</div>
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
              <b className={styles.text3}>Settings</b>
            </div>
          </div>
          <div className={styles.listMenu10}>
            <div className={styles.content}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/log-out.svg"
              />
              <div className={styles.text4}>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
