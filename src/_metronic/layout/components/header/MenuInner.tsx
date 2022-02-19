import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import { NavSection } from '../aside/menu.types'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IMenuProps {
  setNavSection: (navItem: NavSection) => void
}

export function MenuInner(props: IMenuProps) {
  const [ActiveRoute, setActiveRoute] = useState('ACCEUIL');
  const history = useHistory();
  return (
    <>
      <MenuItem title='Acceuil' to='/dashboard' icon='/media/icons/duotune/general/gen001.svg'
        onClickHandler={() => {
          props.setNavSection('ACCEUIL');
          setActiveRoute('ACCEUIL');
          history.push('/dashboard');
          }}
        isActive={ActiveRoute == 'ACCEUIL'} />

      <MenuItem
        title='Ahmini assurance'
        to='/mega-menu'
        icon='/media/icons/duotune/ecommerce/ecm008.svg'
        onClickHandler={() => {
          props.setNavSection('ASSURANCE')
          setActiveRoute('ASSURANCE');
        }}
        isActive={ActiveRoute == 'ASSURANCE'}
      >
        {/* <MegaMenu /> */}
      </MenuItem>

      <MenuItem
        title='Ahmini CNSS'
        to='/mega-menu'
        icon='/media/icons/duotune/technology/teh010.svg'
        onClickHandler={() => {
          props.setNavSection('CNSS');
          setActiveRoute('CNSS');
        }}
        isActive={ActiveRoute == 'CNSS'}
      >
        {/* <MegaMenu /> */}
      </MenuItem>

      <MenuItem
        title='Ahmini Sanadi'
        to='/mega-menu'
        icon='/media/icons/duotune/finance/fin002.svg'
        onClickHandler={() => {
          props.setNavSection('SANADI');
          setActiveRoute('SANADI');
        }}
        isActive={ActiveRoute == 'SANADI'}
      >
        {/* <MegaMenu /> */}
      </MenuItem>
      
      <MenuItem
        title='Ahmini Paiement'
        to='/mega-menu'
        icon='/media/icons/duotune/finance/fin002.svg'
        onClickHandler={() => {
          props.setNavSection('PAIEMENT');
          setActiveRoute('PAIEMENT');
        }}
        isActive={ActiveRoute == 'PAIEMENT'}
      ></MenuItem>
    </>
  )
}
