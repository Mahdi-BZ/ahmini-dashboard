import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'

export function MenuInner() {
  return (
    <>
      <MenuItem title='Acceuil' to='/dashboard' icon='/media/new/home.svg' />

      <MenuInnerWithSub
        isMega={true}
        title='Ahmini assurance'
        to='/mega-menu'
        icon='/media/new/guarantee.svg'
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
