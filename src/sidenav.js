import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BsFillBarChartFill,AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/all';
// import { BsFillBarChartFill } from 'react-icons/all';


const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  return (
    <ProSidebar
      collapsed={collapsed}
      breakPoint="md"
    >
      <SidebarHeader>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: "center", height: "50px" }}>
          <div onClick={() => handleCollapsedChange(!collapsed)} style={{ height: "50px", width: '50px', backgroundColor: "transparent", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            {!collapsed ? <AiOutlineMenuFold size="30" title="fold-navbar" /> : <AiOutlineMenuUnfold size="30" title="expand-navbar" />}
          </div>
          {!collapsed && <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            React Plotly
          </div>}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<BsFillBarChartFill />}
          >
            Bar-Chart
            <Link to="/barchart" />
          </MenuItem>
          <MenuItem
            // icon={<FaTachometerAlt />}
          >
            Splom-Chart
            <Link to="/splomchart" />
          </MenuItem>
        </Menu>

      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidenav;