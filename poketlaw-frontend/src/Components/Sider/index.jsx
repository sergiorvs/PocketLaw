import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { menuList } from './constants';
import { useStyles } from './styles';


function Sider({state, openDrawer, setOpenDrawer, setLoginState, isLogin}) {
  const classes = useStyles();
  const history = useHistory();
  const {location = {}} = history;

  const [nestedList, setNestedList] = useState({
      'about-us': true
    });
  const [subNestedList, setSubNestedList] = useState(() => {
    const {state = {}} = location;
    const {subItem = null} = state;

    return subItem ? {[subItem]: true} : {};
  });

  useEffect(() => {
    const {pathname, hash} = location;
    if(pathname=== '/') {

    } else {
      const path = pathname.replace(/\//g, '');
      const hashPath = hash.replace('#', '');

      setNestedList({[path]: true});
      if (!hashPath) {
        setSubNestedList({'inicio': true});
      } else {
        setSubNestedList({[hashPath]: true});
      }
    }
  }, [location]);

  const handleClick = (e) => {
    if (!nestedList[e]) {
      setNestedList({[e]: !nestedList[e]});
    }
  };

  const handleSubMenuClick = (e) => {
    if (!subNestedList[e])
      setSubNestedList({[e]: !subNestedList[e]});
  };

  const drawer = (isLogin) => <List
    component="nav"
    className={classes.root}
  >
    {menuList(isLogin).map(item => {
      const CustomIcon = item.img;

      return (
        <React.Fragment key={`list-item-${item.id}`}>
          <ListItem
            button
            onClick={() => {
              handleClick(item.id);
              if (!item.submenu) {
                history.push(item.link);
              }
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
          {drawer(isLogin)}
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
        {drawer(isLogin)}
      </Drawer>
    </React.Fragment>
  );
};

export default Sider;
