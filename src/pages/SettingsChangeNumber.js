import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import DashboardContainer from "../components/DashboardContainer";
import ChangeNumberForm from "../components/ChangeNumberForm";
import FormOTPFull from "../components/FormOTPFull";
import FormOTPFill from "../components/FormOTPFill";
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
      </div>
      <DashboardContainer
        managementTitle="User Management"
        propBackgroundColor="#ffddc8"
        propPadding="0px var(--padding-3xs)"
        propBoxSizing="border-box"
        propBackgroundColor1="#fff"
        propWidth="186px"
        propBorderRadius="unset"
        propPadding1="unset"
        propBoxSizing1="unset"
      />
      <div className={styles.groupParent}>
        <ChangeNumberForm />
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <FormOTPFull
        text="2"
        formOTPFullPosition="absolute"
        formOTPFullTop="606px"
        formOTPFullLeft="844px"
        formOTPFullWidth="327px"
        formOTPFullHeight="73px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
        shapeBorderRadius1="10px"
        shapeBorderRadius2="10px"
        shapeBorderRadius3="10px"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="928px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="606px"
        formOTPFillLeft="1013px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
      <FormOTPFill
        text="2"
        formOTPFillPosition="absolute"
        formOTPFillTop="604px"
        formOTPFillLeft="1097px"
        shapeBorderRadius="10px"
        shapeBorder="1.6px solid var(--color-darkslategray-100)"
        shapeBoxSizing="border-box"
      />
    </div>
  );
};

export default SettingsChangeNumber;
import styles from "./SettingsChangeNumber.module.css";

const SettingsChangeNumber = () => {
  return (
    <div className={styles.settingsChangeNumber}>
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
      <div className={styles.settings}>Settings</div>
      <div className={styles.searchBar1}>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
        <div className={styles.searchProductSupplier}>Search User, Vendor</div>
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
                  <div className={styles.text}>Dashboard</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/suppliers.svg"
                  />
                  <div className={styles.text1}>Profile</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/report.svg" />
                  <div className={styles.text1}>Chef Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img className={styles.searchIcon} alt="" src="/order.svg" />
                  <div className={styles.text1}>Tiffin Service</div>
                </div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text1}>Laundry Service</div>
                </div>
              </div>
              <div className={styles.listMenu3}>
                <div className={styles.content}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text1}>Home Makers</div>
                </div>
              </div>
              <div className={styles.listMenu8}>
                <div className={styles.content6}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/manage-store.svg"
                  />
                  <div className={styles.text1}>User Management</div>
                </div>
              </div>
              <div className={styles.content7}>
                <img
                  className={styles.notificationIcon}
                  alt=""
                  src="/manage-store1.svg"
                />
                <div className={styles.text1}>Orders</div>
              </div>
              <div className={styles.listMenu6}>
                <div className={styles.content8}>
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
          <div className={styles.listMenu10}>
            <div className={styles.content}>
              <img
                className={styles.notificationIcon}
                alt=""
                src="/settings.svg"
              />
              <b className={styles.text}>Settings</b>
            </div>
          </div>
          <div className={styles.listMenu10}>
            <div className={styles.content}>
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
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.glasssetParent}>
            <div className={styles.glassset} />
            <b className={styles.changeYourNumber}>Change your number</b>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.oldNumber}>Old Number</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupItem} />
                  <div className={styles.newNumber}>New Number</div>
                </div>
                <div className={styles.otpWrapper}>
                  <div className={styles.otp}>{`OTP `}</div>
                </div>
              </div>
            </div>
            <div className={styles.groupFrame}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <div className={styles.setNumber}>Set Number</div>
              </div>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector-22.svg" />
            <div className={styles.resendOtp}>Resend Otp?</div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.groupIcon1} alt="" src="/group.svg" />
        </div>
        <div className={styles.changePasswordWrapper}>
          <div className={styles.changePassword}>Change Password</div>
        </div>
        <div className={styles.changeNumberWrapper}>
          <div className={styles.changeNumber}>Change Number</div>
        </div>
        <div className={styles.raiseAComplaintWrapper}>
          <div className={styles.changeNumber}>Raise a complaint</div>
        </div>
        <div className={styles.othersWrapper}>
          <div className={styles.others}>Others</div>
        </div>
        <div className={styles.featureRequestWrapper}>
          <div className={styles.featureRequest}>Feature Request</div>
        </div>
      </div>
      <div className={styles.formOtpFull}>
        <div className={styles.formOtpFill}>
          <div className={styles.shape} />
          <div className={styles.text11}>2</div>
        </div>
        <div className={styles.formOtpFill}>
          <div className={styles.shape1} />
        </div>
        <div className={styles.formOtpFill}>
          <div className={styles.shape1} />
        </div>
        <div className={styles.formOtpFill}>
          <div className={styles.shape1} />
        </div>
      </div>
      <div className={styles.formOtpFill1}>
        <div className={styles.shape} />
        <div className={styles.text11}>2</div>
      </div>
      <div className={styles.formOtpFill2}>
        <div className={styles.shape} />
        <div className={styles.text11}>2</div>
      </div>
      <div className={styles.formOtpFill3}>
        <div className={styles.shape} />
        <div className={styles.text11}>2</div>
      </div>
    </div>
  );
};

export default SettingsChangeNumber;
