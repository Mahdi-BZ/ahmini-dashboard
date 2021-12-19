import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title='Acceuil' to='/dashboard' />

      {/* <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub> */}
      <MenuInnerWithSub
        isMega={true}
        title='Ahmini assurance'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Ahmini CNSS'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Kon Sanadi'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>
    </>
  )
}
