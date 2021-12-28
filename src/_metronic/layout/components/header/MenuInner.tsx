import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'

export function MenuInner() {
  return (
    <>
      <MenuItem title='Acceuil' to='/dashboard' icon='/media/icons/duotune/general/gen001.svg' />

      <MenuInnerWithSub
        isMega={true}
        title='Ahmini assurance'
        to='/mega-menu'
        icon='/media/icons/duotune/ecommerce/ecm008.svg'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Ahmini CNSS'
        to='/mega-menu'
        icon='/media/icons/duotune/technology/teh010.svg'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Kon Sanadi'
        to='/mega-menu'
        icon='/media/icons/duotune/finance/fin002.svg'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* <MegaMenu /> */}
      </MenuInnerWithSub>
    </>
  )
}
