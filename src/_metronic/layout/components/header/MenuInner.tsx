import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import { NavSection } from '../aside/menu.types'

interface IMenuProps {
  setNavSection: (navItem: NavSection) => void
}

export function MenuInner(props: IMenuProps) {
  return (
    <>
      <MenuItem title='Acceuil' to='/dashboard' icon='/media/icons/duotune/general/gen001.svg'
        onClickHandler={() => props.setNavSection('ACCEUIL')} />

      <MenuItem
        title='Ahmini assurance'
        to='/mega-menu'
        icon='/media/icons/duotune/ecommerce/ecm008.svg'
        onClickHandler={() => props.setNavSection('ASSURANCE')}
      >
        {/* <MegaMenu /> */}
      </MenuItem>

      <MenuItem
        title='Ahmini CNSS'
        to='/mega-menu'
        icon='/media/icons/duotune/technology/teh010.svg'
        onClickHandler={() => props.setNavSection('CNSS')}
      >
        {/* <MegaMenu /> */}
      </MenuItem>

      <MenuItem
        title='Kon Sanadi'
        to='/mega-menu'
        icon='/media/icons/duotune/finance/fin002.svg'
        onClickHandler={() => props.setNavSection('SANADI')}
      >
        {/* <MegaMenu /> */}
      </MenuItem>
    </>
  )
}
