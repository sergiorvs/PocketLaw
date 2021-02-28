import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { menuList } from './constants';
import { useStyles } from './styles';
import { useApolloClient } from '@apollo/client';


function Sider({state, openDrawer, setOpenDrawer, setLoginState}) {
  const classes = useStyles();
  const history = useHistory();
  const client = useApolloClient();
  const {location = {}} = history;

  const [nestedList, setNestedList] = useState({
    laws: true
  });
  const [subNestedList, setSubNestedList] = useState(() => {
    const {state = {}} = location;
    const {subItem = null} = state;

    return subItem ? {[subItem]: true} : {};
  });

  const handleClick = (e) => {
    setNestedList({[e]: !nestedList[e]});
  };

  const handleSubMenuClick = (e) => {
    if (!subNestedList[e])
      setSubNestedList({[e]: !subNestedList[e]});
  };

  const drawer = <List
    component="nav"
    className={classes.root}
  >
    {menuList.map(item => {
      const CustomIcon = item.img;

      return (
        <React.Fragment key={`list-item-${item.id}`}>
          <ListItem
            button
            onClick={() => {
              handleClick(item.id);
            }}
            className={clsx(nestedList[item.id] && classes.activeItem, classes.itemList)}
          >
            <ListItemText primary={item.title} className={classes.text} />
            {CustomIcon &&
            <CustomIcon className={classes.icon} />
            }
            {item.submenu && (<div>
                {nestedList[item.id] ? <ExpandLess /> : <ExpandMore />}
              </div>
            )}
          </ListItem>
          {item.submenu && (
            <Collapse in={nestedList[item.id]} timeout="auto" unmountOnExit>
              {item.submenu && item.submenu.map(subitem => {
                  const SubCustomIcon = subitem.img;

                  return (
                    <List
                      key={`list-sub-item-${subitem.id}`}
                      component="div"
                      disablePadding
                      onClick={() => {
                        handleSubMenuClick(subitem.id);
                        history.push(`${subitem.link}#${subitem.id}`, {
                          item: item.id,
                          subItem: subitem.id,
                        });
                      }}
                    >
                      <ListItem button className={classes.nested}>
                        {subitem.img && <ListItemIcon>
                          <SubCustomIcon className={classes.icon} />
                        </ListItemIcon>}
                        <ListItemText
                          disableTypography
                          primary={subitem.title}
                          className={clsx(classes.text, subNestedList[subitem.id] && classes.activeSubItem)}
                        />
                      </ListItem>
                    </List>
                  );
                }
              )}
            </Collapse>
          )}
        </React.Fragment>
      );
    })}
  </List>;

  return (
    <React.Fragment>
      {!openDrawer && <div className={classes.siderContainer}>
        <div className={classes.siderMenu}>
          {drawer}
        </div>
      </div>}
      <Drawer
        variant="temporary"
        anchor={'left'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.siderMenuDrawer,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </React.Fragment>
  );
};

export default Sider;
